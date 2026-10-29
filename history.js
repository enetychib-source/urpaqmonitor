// Urpaq Monitor — Отдельный модуль истории показаний датчика уровня воды (history.js)

const ARDUINO_STORAGE_KEY = "urpaq_arduino_real_history_v1";
const ARDUINO_SETTINGS_KEY = "urpaq_arduino_settings_v1";
const MAX_HISTORY_RECORDS = 2000;

const $ = (id) => document.getElementById(id);

let historyRecords = [];
let isLightTheme = false;

// Настройки порогов (синхронизируются с главной страницей)
let warnThreshold = 50;
let alarmThreshold = 80;
let recordIntervalMs = 5000;

// Переменные для прямого USB-подключения из вкладки истории
let serialPort = null;
let serialReader = null;
let serialReadTask = null;
let stopRequested = false;
const lastSavedPerStation = Object.create(null);

function pad2(n) {
  return String(n).padStart(2, "0");
}

function formatDateTime(ts) {
  const d = new Date(ts);
  const date = `${pad2(d.getDate())}.${pad2(d.getMonth() + 1)}.${d.getFullYear()}`;
  const time = `${pad2(d.getHours())}:${pad2(d.getMinutes())}:${pad2(d.getSeconds())}`;
  return { date, time };
}

function getStatusByValue(val) {
  if (val >= alarmThreshold) return "alarm";
  if (val >= warnThreshold) return "warning";
  return "normal";
}

function getStatusText(status) {
  if (status === "alarm") return "Тревога";
  if (status === "warning") return "Предупреждение";
  return "Норма";
}

function isValidRecord(rec) {
  return (
    rec &&
    typeof rec === "object" &&
    typeof rec.station_id === "string" &&
    rec.station_id.trim().length > 0 &&
    typeof rec.date === "string" &&
    typeof rec.time === "string" &&
    Number.isFinite(Number(rec.value)) &&
    Number(rec.value) >= 0 &&
    Number(rec.value) <= 100 &&
    ["normal", "warning", "alarm"].includes(rec.status) &&
    Number.isFinite(Number(rec.ts))
  );
}

function loadSettingsFromStorage() {
  try {
    const raw = localStorage.getItem(ARDUINO_SETTINGS_KEY);
    if (!raw) return;
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object") return;
    if (Number.isFinite(Number(parsed.alarm))) {
      alarmThreshold = Math.max(2, Math.min(100, Math.round(Number(parsed.alarm))));
    }
    if (Number.isFinite(Number(parsed.warn))) {
      warnThreshold = Math.max(1, Math.min(alarmThreshold - 1, Math.round(Number(parsed.warn))));
    }
    if (Number.isFinite(Number(parsed.intervalSec))) {
      recordIntervalMs = Math.max(1000, Math.round(Number(parsed.intervalSec) * 1000));
    }
  } catch (_) {}
}

function loadHistoryFromStorage() {
  try {
    const raw = localStorage.getItem(ARDUINO_STORAGE_KEY);
    if (!raw) {
      historyRecords = [];
      setStorageBadge(true, "💾 localStorage: Активен");
      return;
    }
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) throw new Error("Not an array");
    historyRecords = parsed.filter(isValidRecord).slice(0, MAX_HISTORY_RECORDS);
    setStorageBadge(true, "💾 localStorage: Активен");
  } catch (err) {
    console.warn("Ошибка чтения localStorage:", err);
    historyRecords = [];
    setStorageBadge(false, "⚠ Ошибка чтения localStorage");
  }
}

function saveHistoryToStorage() {
  if (historyRecords.length > MAX_HISTORY_RECORDS) {
    historyRecords = historyRecords.slice(0, MAX_HISTORY_RECORDS);
  }
  try {
    localStorage.setItem(ARDUINO_STORAGE_KEY, JSON.stringify(historyRecords));
    setStorageBadge(true, "💾 localStorage: Сохранено");
  } catch (err) {
    console.warn("Не удалось сохранить историю:", err);
    setStorageBadge(false, "⚠ Ошибка записи localStorage");
  }
}

function setStorageBadge(ok, text) {
  const el = $("storageStateBadge");
  if (!el) return;
  el.textContent = text;
  el.className = ok ? "connection-pill connected" : "connection-pill error";
}

function updateStationOptions() {
  const select = $("filterStation");
  if (!select) return;
  const prevValue = select.value || "all";
  const stations = Array.from(new Set(historyRecords.map((r) => r.station_id))).sort();

  select.replaceChildren();
  const allOpt = document.createElement("option");
  allOpt.value = "all";
  allOpt.textContent = "Все станции";
  select.append(allOpt);

  stations.forEach((st) => {
    const opt = document.createElement("option");
    opt.value = st;
    opt.textContent = st;
    select.append(opt);
  });

  if ([...select.options].some((o) => o.value === prevValue)) {
    select.value = prevValue;
  }
}

function getFilteredRecords() {
  const stFilter = $("filterStation") ? $("filterStation").value : "all";
  const statusFilter = $("filterStatus") ? $("filterStatus").value : "all";
  const periodFilter = $("filterPeriod") ? $("filterPeriod").value : "all";
  const searchQuery = ($("filterSearch") ? $("filterSearch").value : "").trim().toLowerCase();

  const now = Date.now();
  let cutoff = 0;
  if (periodFilter === "5m") cutoff = now - 5 * 60 * 1000;
  else if (periodFilter === "1h") cutoff = now - 60 * 60 * 1000;
  else if (periodFilter === "24h") cutoff = now - 24 * 60 * 60 * 1000;
  else if (periodFilter === "7d") cutoff = now - 7 * 24 * 60 * 60 * 1000;

  return historyRecords.filter((rec) => {
    if (stFilter !== "all" && rec.station_id !== stFilter) return false;
    if (statusFilter !== "all" && rec.status !== statusFilter) return false;
    if (cutoff > 0 && rec.ts < cutoff) return false;
    if (searchQuery) {
      const hay = `${rec.date} ${rec.time} ${rec.station_id} ${rec.value}% ${getStatusText(rec.status)}`.toLowerCase();
      if (!hay.includes(searchQuery)) return false;
    }
    return true;
  });
}

function renderSummaryAndChart(filtered) {
  // 1. Последнее измерение из всей истории
  if (historyRecords.length > 0) {
    const latest = historyRecords[0];
    $("summaryLastLevel").textContent = `${Math.round(latest.value)}%`;
    $("summaryLastMeta").textContent = `${latest.station_id} · ${latest.date} ${latest.time} (${getStatusText(latest.status)})`;
  } else {
    $("summaryLastLevel").textContent = "—%";
    $("summaryLastMeta").textContent = "Нет записей";
  }

  // 2. Мин, Макс, Среднее по текущему фильтру
  if (filtered.length === 0) {
    $("summaryMinLevel").textContent = "—%";
    $("summaryMinMeta").textContent = "Нет данных за период";
    $("summaryMaxLevel").textContent = "—%";
    $("summaryMaxMeta").textContent = "Нет данных за период";
    $("summaryAvgLevel").textContent = "—%";
    $("summaryAlarmCount").textContent = "Срабатываний тревоги: 0";
  } else {
    let minRec = filtered[0];
    let maxRec = filtered[0];
    let sum = 0;
    let alarms = 0;
    filtered.forEach((r) => {
      if (r.value < minRec.value) minRec = r;
      if (r.value > maxRec.value) maxRec = r;
      sum += Number(r.value);
      if (r.status === "alarm") alarms += 1;
    });
    const avg = sum / filtered.length;
    $("summaryMinLevel").textContent = `${Math.round(minRec.value)}%`;
    $("summaryMinMeta").textContent = `${minRec.station_id} · ${minRec.date} ${minRec.time}`;
    $("summaryMaxLevel").textContent = `${Math.round(maxRec.value)}%`;
    $("summaryMaxMeta").textContent = `${maxRec.station_id} · ${maxRec.date} ${maxRec.time}`;
    $("summaryAvgLevel").textContent = `${avg.toFixed(1)}%`;
    $("summaryAlarmCount").textContent = `Срабатываний тревоги: ${alarms}`;
  }

  renderSvgChart(filtered);
}

function createSvgEl(tag, attrs = {}) {
  const el = document.createElementNS("http://www.w3.org/2000/svg", tag);
  Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, String(v)));
  return el;
}

function renderSvgChart(filtered) {
  const svg = $("historyChartSvg");
  if (!svg) return;
  svg.replaceChildren();

  const width = 900;
  const height = 230;
  const padLeft = 46;
  const padRight = 24;
  const padTop = 20;
  const padBottom = 34;
  const plotW = width - padLeft - padRight;
  const plotH = height - padTop - padBottom;

  const yForVal = (v) => padTop + plotH - (Math.max(0, Math.min(100, v)) / 100) * plotH;

  // Сетка 0..100%
  [0, 25, 50, 75, 100].forEach((val) => {
    const y = yForVal(val);
    svg.append(
      createSvgEl("line", {
        x1: padLeft,
        y1: y,
        x2: width - padRight,
        y2: y,
        stroke: "currentColor",
        "stroke-opacity": "0.12",
      }),
    );
    const t = createSvgEl("text", {
      x: padLeft - 8,
      y: y + 4,
      "text-anchor": "end",
      fill: "currentColor",
      opacity: "0.65",
      "font-size": "10",
    });
    t.textContent = `${val}%`;
    svg.append(t);
  });

  // Линии порогов
  const yWarn = yForVal(warnThreshold);
  svg.append(
    createSvgEl("line", {
      x1: padLeft,
      y1: yWarn,
      x2: width - padRight,
      y2: yWarn,
      stroke: "#f59e0b",
      "stroke-width": "1.3",
      "stroke-dasharray": "5,4",
    }),
  );

  const yAlarm = yForVal(alarmThreshold);
  svg.append(
    createSvgEl("line", {
      x1: padLeft,
      y1: yAlarm,
      x2: width - padRight,
      y2: yAlarm,
      stroke: "#ef4444",
      "stroke-width": "1.5",
      "stroke-dasharray": "6,4",
    }),
  );

  if (filtered.length === 0) {
    const emptyTxt = createSvgEl("text", {
      x: width / 2,
      y: height / 2 + 4,
      "text-anchor": "middle",
      fill: "currentColor",
      opacity: "0.6",
      "font-size": "13",
    });
    emptyTxt.textContent = "Нет сохранённых записей для построения графика";
    svg.append(emptyTxt);
    return;
  }

  // Сортируем по возрастанию времени (слева старые, справа новые)
  const chronological = filtered.slice().sort((a, b) => a.ts - b.ts);
  const sampled =
    chronological.length > 140
      ? chronological.filter(
          (_, idx) => idx % Math.ceil(chronological.length / 140) === 0 || idx === chronological.length - 1,
        )
      : chronological;

  const coords = sampled.map((rec, i) => ({
    x: sampled.length === 1 ? padLeft + plotW / 2 : padLeft + (i / (sampled.length - 1)) * plotW,
    y: yForVal(rec.value),
    rec,
  }));

  if (coords.length > 1) {
    const pts = coords.map((c) => `${c.x.toFixed(1)},${c.y.toFixed(1)}`).join(" ");
    svg.append(
      createSvgEl("polyline", {
        points: pts,
        fill: "none",
        stroke: "#25b8f2",
        "stroke-width": "2.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
      }),
    );
  }

  coords.forEach((c) => {
    const color =
      c.rec.status === "alarm" ? "#ef4444" : c.rec.status === "warning" ? "#f59e0b" : "#10b981";
    const dot = createSvgEl("circle", {
      cx: c.x.toFixed(1),
      cy: c.y.toFixed(1),
      r: coords.length > 60 ? "3.2" : "4.5",
      fill: color,
      stroke: "#091524",
      "stroke-width": "1.4",
      style: "cursor:pointer",
    });
    const info = `${c.rec.date} ${c.rec.time} · Станция: ${c.rec.station_id} · Уровень: ${Math.round(c.rec.value)}% (${getStatusText(c.rec.status)})`;
    const title = createSvgEl("title");
    title.textContent = info;
    dot.append(title);
    dot.addEventListener("mouseenter", () => {
      if ($("chartPointDetails")) $("chartPointDetails").textContent = info;
    });
    svg.append(dot);
  });
}

function renderTableAndAll() {
  const filtered = getFilteredRecords();
  renderSummaryAndChart(filtered);

  const badge = $("totalRecordsBadge");
  if (badge) {
    badge.textContent =
      filtered.length === historyRecords.length
        ? `Записей: ${historyRecords.length} / ${MAX_HISTORY_RECORDS}`
        : `Найдено: ${filtered.length} из ${historyRecords.length}`;
  }

  const tbody = $("historyTableBody");
  const emptyState = $("historyEmptyState");
  if (!tbody) return;
  tbody.replaceChildren();

  if (filtered.length === 0) {
    if (emptyState) emptyState.hidden = false;
    return;
  }
  if (emptyState) emptyState.hidden = true;

  const frag = document.createDocumentFragment();
  filtered.forEach((rec, index) => {
    const tr = document.createElement("tr");

    const tdNum = document.createElement("td");
    tdNum.textContent = String(index + 1);

    const tdDate = document.createElement("td");
    tdDate.textContent = rec.date;

    const tdTime = document.createElement("td");
    tdTime.textContent = rec.time;

    const tdStation = document.createElement("td");
    const stBold = document.createElement("strong");
    stBold.textContent = rec.station_id;
    tdStation.append(stBold);

    const tdVal = document.createElement("td");
    tdVal.textContent = `${Math.round(rec.value)}%`;

    const tdStatus = document.createElement("td");
    const pill = document.createElement("span");
    pill.className = `status-pill ${rec.status}`;
    pill.textContent = getStatusText(rec.status);
    tdStatus.append(pill);

    tr.append(tdNum, tdDate, tdTime, tdStation, tdVal, tdStatus);
    frag.append(tr);
  });
  tbody.append(frag);
}

function addNewRecord(station_id, numValue, forceImmediate = false) {
  const value = Math.max(0, Math.min(100, Math.round(Number(numValue) * 10) / 10));
  const status = getStatusByValue(value);
  const ts = Date.now();
  const prev = lastSavedPerStation[station_id];

  if (!forceImmediate && prev && prev.status === status && ts - prev.ts < recordIntervalMs) {
    return false;
  }

  lastSavedPerStation[station_id] = { ts, status };
  const fmt = formatDateTime(ts);
  const newEntry = {
    id: `${ts}_${Math.random().toString(36).slice(2, 7)}`,
    ts,
    date: fmt.date,
    time: fmt.time,
    value,
    status,
    station_id,
  };

  historyRecords.unshift(newEntry);
  if (historyRecords.length > MAX_HISTORY_RECORDS) {
    historyRecords.length = MAX_HISTORY_RECORDS;
  }
  saveHistoryToStorage();
  updateStationOptions();
  renderTableAndAll();
  return true;
}

// Экспорт в CSV с UTF-8 BOM для Excel
function exportCsv() {
  const recordsToExport = getFilteredRecords();
  if (!recordsToExport.length) {
    alert("Нет записей для экспорта в CSV.");
    return;
  }
  const escapeCell = (v) => `"${String(v ?? "").split('"').join('""')}"`;
  const header = ["№", "Дата", "Время", "ID станции", "Уровень воды (%)", "Статус"];
  const lines = [header.map(escapeCell).join(";")];

  recordsToExport.forEach((r, idx) => {
    lines.push(
      [idx + 1, r.date, r.time, r.station_id, Math.round(r.value), getStatusText(r.status)]
        .map(escapeCell)
        .join(";"),
    );
  });

  const csvContent = "\uFEFF" + lines.join("\r\n");
  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  const fmt = formatDateTime(Date.now());
  a.href = url;
  a.download = `urpaq_water_history_${fmt.date.split(".").reverse().join("-")}.csv`;
  document.body.append(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1500);
}

// Прямое подключение к Arduino из вкладки истории (опционально)
async function connectArduinoFromHistoryTab() {
  if (!("serial" in navigator)) {
    alert("Для подключения Arduino по USB откройте страницу в Google Chrome или Microsoft Edge через http://localhost.");
    return;
  }
  try {
    serialPort = await navigator.serial.requestPort();
    await serialPort.open({ baudRate: 9600 });
    stopRequested = false;
    $("histConnectBtn").disabled = true;
    $("histDisconnectBtn").disabled = false;
    $("histConnectionBadge").textContent = "● USB: Подключено (9600 бод)";
    $("histConnectionBadge").className = "connection-pill connected";

    const decoder = new TextDecoder("utf-8");
    let buffer = "";
    serialReader = serialPort.readable.getReader();

    serialReadTask = (async () => {
      try {
        while (!stopRequested && serialPort) {
          const { value, done } = await serialReader.read();
          if (done) break;
          if (!value) continue;
          buffer += decoder.decode(value, { stream: true });
          let nl;
          while ((nl = buffer.indexOf("\n")) >= 0) {
            const line = buffer.slice(0, nl).trim();
            buffer = buffer.slice(nl + 1);
            if (!line) continue;
            try {
              const data = JSON.parse(line);
              if (
                data &&
                data.parameter === "water_level" &&
                typeof data.station_id === "string" &&
                Number.isFinite(Number(data.value))
              ) {
                addNewRecord(data.station_id.trim(), Number(data.value));
              }
            } catch (_) {}
          }
        }
      } catch (_) {
      } finally {
        try {
          if (serialReader) serialReader.releaseLock();
        } catch (_) {}
        serialReader = null;
      }
    })();
  } catch (err) {
    if (err && err.name !== "NotFoundError") {
      alert("Не удалось открыть COM-порт. Проверьте, не открыт ли порт в другой вкладке или в Arduino IDE.");
    }
  }
}

async function disconnectArduinoFromHistoryTab() {
  stopRequested = true;
  try {
    if (serialReader) await serialReader.cancel();
  } catch (_) {}
  try {
    if (serialReadTask) await serialReadTask;
  } catch (_) {}
  try {
    if (serialPort) await serialPort.close();
  } catch (_) {}
  serialPort = null;
  $("histConnectBtn").disabled = false;
  $("histDisconnectBtn").disabled = true;
  $("histConnectionBadge").textContent = "● USB: Отключено";
  $("histConnectionBadge").className = "connection-pill";
}

// События интерфейса
$("themeToggle").addEventListener("click", () => {
  isLightTheme = !isLightTheme;
  document.body.classList.toggle("dark", isLightTheme);
  $("themeToggle").textContent = isLightTheme ? "☀️ Светлая" : "🌙 Темная";
});

$("filterStation").addEventListener("change", renderTableAndAll);
$("filterStatus").addEventListener("change", renderTableAndAll);
$("filterPeriod").addEventListener("change", renderTableAndAll);
$("filterSearch").addEventListener("input", renderTableAndAll);

$("exportCsvBtn").addEventListener("click", exportCsv);

$("addTestRecordBtn").addEventListener("click", () => {
  const sampleLevels = [28, 49, 50, 68, 79, 80, 94];
  const randomLevel = sampleLevels[Math.floor(Math.random() * sampleLevels.length)];
  addNewRecord("dam_01", randomLevel, true);
});

$("clearHistoryBtn").addEventListener("click", () => {
  if (!historyRecords.length) {
    alert("История уже пуста.");
    return;
  }
  $("confirmClearBox").hidden = false;
});

$("confirmClearYes").addEventListener("click", () => {
  historyRecords = [];
  saveHistoryToStorage();
  updateStationOptions();
  renderTableAndAll();
  $("confirmClearBox").hidden = true;
});

$("confirmClearNo").addEventListener("click", () => {
  $("confirmClearBox").hidden = true;
});

$("histConnectBtn").addEventListener("click", connectArduinoFromHistoryTab);
$("histDisconnectBtn").addEventListener("click", disconnectArduinoFromHistoryTab);

// Автоматическая синхронизация при поступлении новых записей из главной вкладки index.html
window.addEventListener("storage", (e) => {
  if (e.key === ARDUINO_STORAGE_KEY || e.key === ARDUINO_SETTINGS_KEY) {
    loadSettingsFromStorage();
    loadHistoryFromStorage();
    updateStationOptions();
    renderTableAndAll();
  }
});

// Инициализация при открытии вкладки
loadSettingsFromStorage();
loadHistoryFromStorage();
updateStationOptions();
renderTableAndAll();
