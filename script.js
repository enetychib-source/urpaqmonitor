const STATIONS = [
  {
    name: {
      ru: "р. Есиль — г. Петропавловск",
      kk: "Есіл ө. — Петропавл қ.",
      en: "Esil river — Petropavl",
    },
    city: { ru: "Петропавловск", kk: "Петропавл", en: "Petropavl" },
    coords: [54.872, 69.135],
    level: 980,
    danger: 960,
    temp: 18.4,
    discharge: 310.5,
    type: "danger",
    date: "2026-08-09",
  },
  {
    name: {
      ru: "р. Есиль — с. Покровка (СКО)",
      kk: "Есіл ө. — Покровка ауылы (СҚО)",
      en: "Esil river — Pokrovka v.",
    },
    city: { ru: "Петропавловск", kk: "Петропавл", en: "Petropavl" },
    coords: [54.35, 68.42],
    level: 820,
    danger: 950,
    temp: 18.1,
    discharge: 245.0,
    type: "low",
    date: "2026-08-09",
  },
  {
    name: {
      ru: "Сергеевское вдхр. — г. Сергеевка",
      kk: "Сергеев су қоймасы — Сергеевка қ.",
      en: "Sergeevka res. — Sergeevka",
    },
    city: { ru: "Петропавловск", kk: "Петропавл", en: "Petropavl" },
    coords: [53.88, 67.41],
    level: 790,
    danger: 800,
    temp: 19.0,
    discharge: 280.2,
    type: "warn",
    date: "2026-08-09",
  },
  {
    name: {
      ru: "р. Есиль — г. Астана",
      kk: "Есіл ө. — Астана қ.",
      en: "Esil river — Astana",
    },
    city: { ru: "Астана", kk: "Астана", en: "Astana" },
    coords: [51.155, 71.4304],
    level: 412,
    danger: 650,
    temp: 20.5,
    discharge: 48.3,
    type: "low",
    date: "2026-08-09",
  },
  {
    name: {
      ru: "Астанинское (Вячеславское) вдхр.",
      kk: "Астана (Вячеслав) су қоймасы",
      en: "Astana reservoir",
    },
    city: { ru: "Астана", kk: "Астана", en: "Astana" },
    coords: [51.05, 72.035],
    level: 390,
    danger: 550,
    temp: 20.1,
    discharge: 32.0,
    type: "low",
    date: "2026-08-09",
  },
  {
    name: {
      ru: "оз. Копа — г. Кокшетау",
      kk: "Қопа к. — Көкшетау қ.",
      en: "Kopa lake — Kokshetau",
    },
    city: { ru: "Кокшетау", kk: "Көкшетау", en: "Kokshetau" },
    coords: [53.295, 69.375],
    level: 215,
    danger: 340,
    temp: 19.2,
    discharge: 12.4,
    type: "low",
    date: "2026-08-09",
  },
  {
    name: {
      ru: "р. Жабай — г. Атбасар",
      kk: "Жабай ө. — Атбасар қ.",
      en: "Zhabai river — Atbasar",
    },
    city: { ru: "Кокшетау", kk: "Көкшетау", en: "Kokshetau" },
    coords: [51.81, 68.36],
    level: 460,
    danger: 445,
    temp: 19.5,
    discharge: 98.0,
    type: "danger",
    date: "2026-08-09",
  },
  {
    name: {
      ru: "р. Тобол — г. Костанай",
      kk: "Тобыл ө. — Қостанай қ.",
      en: "Tobol river — Kostanay",
    },
    city: { ru: "Костанай", kk: "Қостанай", en: "Kostanay" },
    coords: [53.2144, 63.652],
    level: 685,
    danger: 800,
    temp: 19.8,
    discharge: 175.6,
    type: "low",
    date: "2026-08-09",
  },
  {
    name: {
      ru: "Каратомарское вдхр. — г. Рудный",
      kk: "Қаратомар су қоймасы — Рудный қ.",
      en: "Karatomar res. — Rudny",
    },
    city: { ru: "Костанай", kk: "Қостанай", en: "Kostanay" },
    coords: [52.95, 63.12],
    level: 540,
    danger: 620,
    temp: 19.4,
    discharge: 140.0,
    type: "low",
    date: "2026-08-09",
  },
  {
    name: {
      ru: "р. Иртыш — г. Павлодар",
      kk: "Ертіс ө. — Павлодар қ.",
      en: "Irtysh river — Pavlodar",
    },
    city: { ru: "Павлодар", kk: "Павлодар", en: "Pavlodar" },
    coords: [52.2873, 76.925],
    level: 590,
    danger: 760,
    temp: 20.2,
    discharge: 920.0,
    type: "low",
    date: "2026-08-09",
  },
  {
    name: {
      ru: "р. Иртыш — г. Семей",
      kk: "Ертіс ө. — Семей қ.",
      en: "Irtysh river — Semey",
    },
    city: { ru: "Семей", kk: "Семей", en: "Semey" },
    coords: [50.4111, 80.25],
    level: 380,
    danger: 550,
    temp: 18.7,
    discharge: 810.0,
    type: "low",
    date: "2026-08-09",
  },
  {
    name: {
      ru: "р. Иртыш — г. Усть-Каменогорск",
      kk: "Ертіс ө. — Өскемен қ.",
      en: "Irtysh river — Oskemen",
    },
    city: { ru: "Усть-Каменогорск", kk: "Өскемен", en: "Oskemen" },
    coords: [49.9483, 82.6157],
    level: 345,
    danger: 500,
    temp: 16.5,
    discharge: 690.0,
    type: "seasonal",
    date: "2026-08-09",
  },
  {
    name: {
      ru: "р. Ульба — г. Усть-Каменогорск",
      kk: "Үлбі ө. — Өскемен қ.",
      en: "Ulba river — Oskemen",
    },
    city: { ru: "Усть-Каменогорск", kk: "Өскемен", en: "Oskemen" },
    coords: [49.97, 82.65],
    level: 410,
    danger: 520,
    temp: 15.8,
    discharge: 145.0,
    type: "low",
    date: "2026-08-09",
  },
  {
    name: {
      ru: "р. Нура — г. Темиртау",
      kk: "Нұра ө. — Теміртау қ.",
      en: "Nura river — Temirtau",
    },
    city: { ru: "Караганда", kk: "Қарағанды", en: "Karaganda" },
    coords: [50.06, 72.96],
    level: 315,
    danger: 480,
    temp: 20.0,
    discharge: 42.1,
    type: "low",
    date: "2026-08-09",
  },
  {
    name: {
      ru: "р. Жайык (Урал) — г. Уральск",
      kk: "Жайық ө. — Орал қ.",
      en: "Zhaiyk (Ural) river — Oral",
    },
    city: { ru: "Уральск", kk: "Орал", en: "Oral" },
    coords: [51.21, 51.385],
    level: 865,
    danger: 850,
    temp: 21.6,
    discharge: 1420.0,
    type: "danger",
    date: "2026-08-09",
  },
  {
    name: {
      ru: "р. Чаган — г. Уральск",
      kk: "Шаған ө. — Орал қ.",
      en: "Chagan river — Oral",
    },
    city: { ru: "Уральск", kk: "Орал", en: "Oral" },
    coords: [51.235, 51.34],
    level: 610,
    danger: 780,
    temp: 21.0,
    discharge: 85.0,
    type: "low",
    date: "2026-08-09",
  },
  {
    name: {
      ru: "р. Жайык (Урал) — г. Атырау",
      kk: "Жайық ө. — Атырау қ.",
      en: "Zhaiyk (Ural) river — Atyrau",
    },
    city: { ru: "Атырау", kk: "Атырау", en: "Atyrau" },
    coords: [47.11, 51.915],
    level: 558,
    danger: 550,
    temp: 23.4,
    discharge: 1380.0,
    type: "danger",
    date: "2026-08-09",
  },
  {
    name: {
      ru: "р. Илек — г. Актобе",
      kk: "Елек ө. — Ақтөбе қ.",
      en: "Ilek river — Aktobe",
    },
    city: { ru: "Актобе", kk: "Ақтөбе", en: "Aktobe" },
    coords: [50.2839, 57.185],
    level: 325,
    danger: 450,
    temp: 21.2,
    discharge: 54.0,
    type: "low",
    date: "2026-08-09",
  },
  {
    name: {
      ru: "р. Сырдарья — г. Кызылорда",
      kk: "Сырдария ө. — Қызылорда қ.",
      en: "Syr Darya river — Kyzylorda",
    },
    city: { ru: "Кызылорда", kk: "Қызылорда", en: "Kyzylorda" },
    coords: [44.835, 65.5092],
    level: 470,
    danger: 640,
    temp: 24.5,
    discharge: 390.0,
    type: "seasonal",
    date: "2026-08-09",
  },
  {
    name: {
      ru: "р. Талас — г. Тараз",
      kk: "Талас ө. — Тараз қ.",
      en: "Talas river — Taraz",
    },
    city: { ru: "Тараз", kk: "Тараз", en: "Taraz" },
    coords: [42.9, 71.395],
    level: 195,
    danger: 320,
    temp: 21.8,
    discharge: 38.5,
    type: "low",
    date: "2026-08-09",
  },
  {
    name: {
      ru: "р. Бадам — г. Шымкент",
      kk: "Бадам ө. — Шымкент қ.",
      en: "Badam river — Shymkent",
    },
    city: { ru: "Шымкент", kk: "Шымкент", en: "Shymkent" },
    coords: [42.31, 69.5901],
    level: 165,
    danger: 290,
    temp: 22.9,
    discharge: 24.0,
    type: "low",
    date: "2026-08-09",
  },
  {
    name: {
      ru: "р. Малая Алматинка — г. Алматы",
      kk: "Кіші Алматы ө. — Алматы қ.",
      en: "Malaya Almatinka river — Almaty",
    },
    city: { ru: "Алматы", kk: "Алматы", en: "Almaty" },
    coords: [43.2383, 76.958],
    level: 142,
    danger: 230,
    temp: 14.6,
    discharge: 8.7,
    type: "seasonal",
    date: "2026-08-09",
  },
  {
    name: {
      ru: "р. Или — г. Конаев",
      kk: "Іле ө. — Қонаев қ.",
      en: "Ili river — Konaev",
    },
    city: { ru: "Алматы", kk: "Алматы", en: "Almaty" },
    coords: [43.86, 77.08],
    level: 480,
    danger: 600,
    temp: 21.5,
    discharge: 460.0,
    type: "low",
    date: "2026-08-09",
  },
  {
    name: {
      ru: "р. Ертис — г. Павлодар (затон)",
      kk: "Ертіс ө. — Павлодар қ. (затон)",
      en: "Irtysh river — Pavlodar backwater",
    },
    city: { ru: "Павлодар", kk: "Павлодар", en: "Pavlodar" },
    // Координаты ориентировочные: точные координаты поста в таблице не указаны.
    coords: [52.291, 76.931],
    level: 319,
    danger: null,
    temp: 5.8,
    discharge: null,
    type: "sample",
        date: "2026-10-28",
    observedAt: "20:00",
    statusCode: 600,
    dataLabel: "demo-history",
    history: [
      ["2026-09-28",319,14.2,319,14.6],
      ["2026-09-29",319,13.4,319,13.8],
      ["2026-09-30",318,13.6,318,14.6],
      ["2026-10-01",318,13.4,318,14.6],
      ["2026-10-02",315,13.0,313,14.4],
      ["2026-10-03",311,13.2,311,14.6],
      ["2026-10-04",312,13.2,313,13.8],
      ["2026-10-05",314,12.6,314,13.2],
      ["2026-10-06",314,11.2,315,10.8],
      ["2026-10-07",314,9.8,314,9.6],
      ["2026-10-08",313,9.2,314,9.8],
      ["2026-10-09",316,9.4,316,9.8],
      ["2026-10-10",316,8.8,315,9.4],
      ["2026-10-11",313,8.6,313,9.4],
      ["2026-10-12",313,8.4,314,10.4],
      ["2026-10-13",315,9.4,315,10.0],
      ["2026-10-14",315,9.6,316,9.4],
      ["2026-10-15",318,8.4,318,8.8],
      ["2026-10-16",318,7.8,319,8.2],
      ["2026-10-17",321,7.8,322,8.0],
      ["2026-10-18",318,7.6,315,8.0],
      ["2026-10-19",313,7.6,313,9.2],
      ["2026-10-20",314,8.4,314,8.2],
      ["2026-10-21",315,7.6,315,7.4],
      ["2026-10-22",315,7.0,316,6.8],
      ["2026-10-23",316,5.6,318,5.6],
      ["2026-10-24",318,5.2,317,5.2],
      ["2026-10-25",316,4.8,317,5.4],
      ["2026-10-26",317,4.8,319,5.6],
      ["2026-10-27",319,5.2,319,5.6],
      ["2026-10-28",319,5.6,319,5.8],
    ],
  },
];

const T = {
  ru: {
    subHeader: "Гидрологический мониторинг Казахстана",
    title: "Мониторинг вод",
    intro: "Офлайн-архив гидрологических наблюдений. Данные за 9 августа 2026 года и демонстрационная история Павлодара.",
    liveSidebarInfo: "Официальная карта загружает последние опубликованные наблюдения. Для актуальных данных требуется интернет.",
    searchLabel: "ПОИСК ПОСТА ИЛИ ГОРОДА",
    placeholder: "Например, Петропавловск...",
    citiesLabel: "АРХИВНЫЙ СПИСОК ПОСТОВ",
    noticeTitle: "⚠ Информация о данных",
    liveNotice: "Показываются последние данные, опубликованные Казгидрометом. Дата измерения видна у каждого поста; частота публикации зависит от источника.",
    archiveNotice: "Офлайн-архив включает устаревший снимок от 09.08.2026 и демонстрационную историю поста в Павлодаре за 28.09–28.10.2026. История не обновляется автоматически.",
    mapTitle: "Карта гидропостов",
    liveSubtitle: "Официальная карта Казгидромета. Дата наблюдения указана в карточке каждого поста.",
    archiveSubtitle: "Офлайн-архив и демонстрационная история наблюдений в Павлодаре за 28.09–28.10.2026.",
    liveStatus: "● Источник Казгидромета",
    archiveStatus: "● Офлайн-архив",
    s1: "Всего постов",
    liveS1note: "442 поста в источнике",
    archiveS1note: "24 поста, включая историю Павлодара",
    liveS2: "Актуальность",
    archiveS2: "Дата снимка",
    liveS2value: "В источнике",
    archiveS2value: "09.08.2026",
    liveS2note: "Дата указана у каждого поста",
    archiveS2note: "Устаревшие офлайн-данные",
    s3: "Источник",
    s3note: "Архивная копия / демонстрационные данные",
    liveFootnote: "Официальный сервис · автоматическое обновление каждые 15 минут",
    archiveFootnote: "Офлайн-архив · история Павлодара предоставлена для демонстрации; автообновления нет",
    refreshLive: "Обновить данные",
    showArchive: "Офлайн-архив",
    showLive: "Актуальные данные",
    secureSourceWarning: "Официальный сервис работает по HTTP, поэтому браузер блокирует его встраивание на HTTPS-сайте.",
    openOfficialSource: "Открыть официальный источник ↗",
    secureStatus: "● Источник в новой вкладке",
    secureS2value: "Откройте",
    secureS2note: "Источник открыт отдельно",
    secureFootnote: "Источник работает по HTTP · открывается в новой вкладке",
    reset: "Весь Казахстан",
    noresults: "Ничего не найдено.",
    observed: "Дата наблюдения",
    level: "Фактический уровень",
    danger: "Опасный уровень",
    temp: "Температура воды",
    discharge: "Расход воды",
    condition: "Состояние",
    snapshot: "Офлайн-снимок от 09.08.2026. Значения истории Павлодара предоставлены для демонстрации и не обновляются автоматически.",
    open: "Официальный сайт ↗",
    pushSub: "🔔 Подписаться на Web Push алерты о паводках",
    pushBtn: "Включить уведомления",
    pushEnabled: "✅ Уведомления успешно подключены!",
    btnList: "📋 Список постов",
    btnMap: "🗺 Открыть карту",
    origLink: "Архив наблюдений",
    tgBtn: "✈ Telegram Бот",
    themeDark: "🌙 Темная",
    themeLight: "☀️ Светлая",
    legTitle: "Уровень опасности",
    cond: {
      danger: "Опасный уровень",
      warn: "Неблагоприятный",
      low: "Низкий уровень",
      seasonal: "Сезонный пост",
    },
  },
  kk: {
    subHeader: "Қазақстанның гидрологиялық мониторингі",
    title: "Су мониторингі",
    intro: "Гидрологиялық бақылаулардың офлайн мұрағаты. 2026 жылғы 9 тамыз деректері және Павлодардың демонстрациялық тарихы.",
    liveSidebarInfo: "Ресми карта жарияланған соңғы бақылауларды көрсетеді. Өзекті деректер үшін интернет қажет.",
    searchLabel: "БЕКЕТТІ НЕМЕСЕ ҚАЛАНЫ ІЗДЕУ",
    placeholder: "Мысалы, Петропавл...",
    citiesLabel: "МҰРАҒАТТАҒЫ БЕКЕТТЕР ТІЗІМІ",
    noticeTitle: "⚠ Деректер туралы ақпарат",
    liveNotice: "Қазгидромет жариялаған соңғы деректер көрсетіледі. Өлшеу күні әр бекетте бар; жариялау жиілігін дереккөз анықтайды.",
    archiveNotice: "Офлайн мұрағатта 09.08.2026 күнгі ескі деректер және Павлодар бекетінің 28.09–28.10.2026 күндеріне арналған демонстрациялық тарихы бар. Тарих автоматты жаңартылмайды.",
    mapTitle: "Гидробекеттер картасы",
    liveSubtitle: "Қазгидрометтің ресми картасы. Бақылау күні әр бекеттің карточкасында көрсетілген.",
    archiveSubtitle: "Офлайн мұрағат және Павлодардағы 28.09–28.10.2026 бақылауларының демонстрациялық тарихы.",
    liveStatus: "● Қазгидромет дереккөзі",
    archiveStatus: "● Офлайн мұрағат",
    s1: "Барлық бекеттер",
    liveS1note: "Дереккөзде 442 бекет",
    archiveS1note: "24 бекет, Павлодар тарихымен бірге",
    liveS2: "Өзектілігі",
    archiveS2: "Снимок күні",
    liveS2value: "Дереккөзде",
    archiveS2value: "09.08.2026",
    liveS2note: "Күні әр бекетте көрсетілген",
    archiveS2note: "Ескірген офлайн деректер",
    s3: "Дереккөз",
    s3note: "Мұрағат көшірмесі / демонстрациялық деректер",
    liveFootnote: "Ресми сервис · әр 15 минут сайын автоматты жаңарту",
    archiveFootnote: "Офлайн мұрағат · Павлодар тарихы демонстрация үшін берілген; автоматты жаңарту жоқ",
    refreshLive: "Деректерді жаңарту",
    showArchive: "Офлайн мұрағат",
    showLive: "Өзекті деректер",
    secureSourceWarning: "Ресми сервис HTTP арқылы жұмыс істейді, сондықтан браузер оны HTTPS сайтында ендіруге тыйым салады.",
    openOfficialSource: "Ресми дереккөзді ашу ↗",
    secureStatus: "● Дереккөз бөлек қойындыда",
    secureS2value: "Ашыңыз",
    secureS2note: "Дереккөз бөлек ашылады",
    secureFootnote: "Дереккөз HTTP арқылы жұмыс істейді · бөлек қойындыда ашылады",
    reset: "Бүкіл Қазақстан",
    noresults: "Ештеңе табылмады.",
    observed: "Бақылау күні",
    level: "Нақты деңгей",
    danger: "Қауіпті деңгей",
    temp: "Су температурасы",
    discharge: "Су шығыны",
    condition: "Жағдайы",
    snapshot: "09.08.2026 күнгі офлайн деректер. Павлодар тарихы демонстрациялық және автоматты жаңартылмайды.",
    open: "Ресми сайт ↗",
    pushSub: "🔔 Су тасқыны туралы Push-хабарлама алу",
    pushBtn: "Хабарламаларды қосу",
    pushEnabled: "✅ Хабарламалар қосылды!",
    btnList: "📋 Бекеттер тізімі",
    btnMap: "🗺 Картаны ашу",
    origLink: "Бақылаулар мұрағаты",
    tgBtn: "✈ Telegram боты",
    themeDark: "🌙 Қараңғы",
    themeLight: "☀️ Жарық",
    legTitle: "Қауіптілік деңгейі",
    cond: {
      danger: "Қауіпті деңгей",
      warn: "Жағымсыз",
      low: "Төмен деңгей",
      seasonal: "Маусымдық бекет",
    },
  },
  en: {
    subHeader: "Hydrological Monitoring of Kazakhstan",
    title: "Water Monitoring",
    intro: "Offline archive of hydrological observations, with a snapshot from 9 August 2026 and a demonstration history for Pavlodar.",
    liveSidebarInfo: "The official map loads the latest observations published. Internet access is required for current data.",
    searchLabel: "SEARCH STATION OR CITY",
    placeholder: "For example, Petropavl...",
    citiesLabel: "ARCHIVED STATIONS",
    noticeTitle: "⚠ Data Information",
        liveNotice: "Showing the latest data published by Kazhydromet. Each station shows its observation date; publication frequency depends on the source.",
    archiveNotice: "Offline archive includes an old snapshot from 09.08.2026 and a demonstration history for the Pavlodar station from 28 Sep to 28 Oct 2026. The history does not update automatically.",
    mapTitle: "Hydroposts Map",
    liveSubtitle: "Official Kazhydromet map. The observation date is shown in each station card.",
    archiveSubtitle: "Offline archive and demonstration history for the Pavlodar station, 28 Sep–28 Oct 2026.",
    liveStatus: "● Kazhydromet source",
    archiveStatus: "● Offline archive",
    s1: "Total posts",
    liveS1note: "442 stations in source",
    archiveS1note: "24 stations incl. Pavlodar history",
    liveS2: "Freshness",
    archiveS2: "Snapshot date",
    liveS2value: "At source",
    archiveS2value: "09.08.2026",
    liveS2note: "Date shown for each station",
    archiveS2note: "Outdated offline data",
    s3: "Source",
    s3note: "Archive snapshot / demonstration data",
    liveFootnote: "Official service · auto-refreshes every 15 minutes",
    archiveFootnote: "Offline archive · Pavlodar history is supplied for demonstration; no automatic updates",
    refreshLive: "Refresh data",
    showArchive: "Offline archive",
    showLive: "Current data",
    secureSourceWarning: "The official service uses HTTP, so browsers block it from being embedded on HTTPS sites.",
    openOfficialSource: "Open official source ↗",
    secureStatus: "● Source opens in a new tab",
    secureS2value: "Open",
    secureS2note: "Source opens separately",
    secureFootnote: "Source uses HTTP · opens in a separate tab",
    reset: "All Kazakhstan",
    noresults: "No results found.",
    observed: "Observation date",
    level: "Actual level",
    danger: "Danger level",
    temp: "Water temperature",
    discharge: "Water discharge",
    condition: "Condition",
    snapshot: "Offline snapshot from 09.08.2026. Pavlodar history is demonstration data and does not update automatically.",
    open: "Official site ↗",
    pushSub: "🔔 Subscribe to flood Web Push alerts",
    pushBtn: "Enable Notifications",
    pushEnabled: "✅ Notifications enabled successfully!",
    btnList: "📋 Station List",
    btnMap: "🗺 Open Map",
    origLink: "Observation archive",
    tgBtn: "✈ Telegram Bot",
    themeDark: "🌙 Dark",
    themeLight: "☀️ Light",
    legTitle: "Danger Level",
    cond: {
      danger: "Danger level",
      warn: "Unfavorable",
      low: "Low level",
      seasonal: "Seasonal station",
    },
  },
};

let lang = "ru";
let isDark = false;
let isMobileListOpen = false;
const $ = (id) => document.getElementById(id);
const tr = () => T[lang];
let dataMode = "archive";

const map = L.map("map", { center: [48.2, 67.5], zoom: 5, zoomControl: false });
L.control.zoom({ position: "topright" }).addTo(map);

const lightTileLayer = L.tileLayer(
  "https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}",
  { maxZoom: 18, attribution: "Tiles © Esri" },
).addTo(map);
const darkTileLayer = L.tileLayer(
  "https://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}",
  { maxZoom: 16, attribution: "Tiles © Esri" },
);

const legend = L.control({ position: "bottomright" });
legend.onAdd = function () {
  const div = L.DomUtil.create("div", "info legend");
  div.id = "legendContent";
  return div;
};
legend.addTo(map);

function renderLegend() {
  const el = $("legendContent");
  if (!el) return;
  const c = tr().cond;
  el.innerHTML =
    `<div id="legTitle">${tr().legTitle}</div>` +
    `<i style="background:#1797cf"></i><span>${c.low}</span><br>` +
    `<i style="background:#FFA500"></i><span>${c.warn}</span><br>` +
    `<i style="background:#FF0000"></i><span>${c.danger}</span><br>` +
    `<i style="background:#72B026"></i><span>${c.seasonal}</span>`;
}

const getColor = (type) =>
  type === "danger"
    ? "#FF0000"
    : type === "warn"
      ? "#FFA500"
      : type === "seasonal"
        ? "#72B026"
        : "#1797cf";
let leafletMarkers = [];

function buildSparkline(values, stroke, unit) {
  const width = 320, height = 72, pad = 8;
  const min = Math.min(...values), max = Math.max(...values);
  const range = max - min || 1;
  const points = values.map((v, i) => {
    const x = pad + i * (width - pad * 2) / Math.max(1, values.length - 1);
    const y = height - pad - ((v - min) / range) * (height - pad * 2);
    return `${x.toFixed(1)},${y.toFixed(1)}`;
  }).join(" ");
  return `<div style="font-size:11px;margin-top:7px"><div style="display:flex;justify-content:space-between"><b>${unit === "см" ? "Уровень воды" : "Температура воды"}</b><span>${max} / ${min} ${unit}</span></div><svg viewBox="0 0 ${width} ${height}" role="img" aria-label="График: ${unit}" style="display:block;width:100%;height:72px"><line x1="8" y1="64" x2="312" y2="64" stroke="currentColor" opacity=".18"/><polyline points="${points}" fill="none" stroke="${stroke}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>`;
}

function buildHistoryPopup(s, sName, color) {
  const rows = s.history.map(([date, level08, temp08, level20, temp20]) =>
    `<tr><td>${date}</td><td>${level08}</td><td>${temp08.toFixed(1)}</td><td>${level20}</td><td>${temp20.toFixed(1)}</td></tr>`
  ).join("");
  const levels = s.history.flatMap((row) => [row[1], row[3]]);
  const temps = s.history.flatMap((row) => [row[2], row[4]]);
  return `<div style="min-width:280px;max-width:360px"><div class="popup-title">${sName}</div><div class="popup-note" style="margin:4px 0 8px">Демонстрационная история · 28.09–28.10.2026 · координаты ориентировочные</div><div class="popup-row"><span>Последнее наблюдение:</span> <b>28.10.2026, 20:00</b></div><div class="popup-row"><span>${tr().level}:</span> <b style="color:${color}">319 см</b></div><div class="popup-row"><span>${tr().temp}:</span> <b>5,8 °C</b></div><div class="popup-row"><span>Расход воды:</span> <b>нет данных</b></div><div class="popup-row"><span>Код состояния:</span> <b>600</b></div>${buildSparkline(levels, color, "см")}${buildSparkline(temps, "#0ea5e9", "°C")}<details style="margin-top:8px"><summary style="cursor:pointer;font-weight:600">История наблюдений (31 день)</summary><div style="max-height:260px;overflow:auto;margin-top:6px"><table style="border-collapse:collapse;width:100%;font-size:11px"><thead><tr><th>Дата</th><th>Ур. 08</th><th>°C 08</th><th>Ур. 20</th><th>°C 20</th></tr></thead><tbody>${rows}</tbody></table></div><div style="font-size:10px;margin-top:5px">Уровень — см; температура — °C. Прочерк по расходу сохранён как отсутствие данных.</div></details><div class="popup-note" style="margin-top:8px">Источник: таблица наблюдений, предоставленная для конкурсной демонстрации. Не является live-обновлением.</div></div>`;
}

function renderMapMarkers() {
  leafletMarkers.forEach((m) => map.removeLayer(m.marker));
  leafletMarkers = [];
  STATIONS.forEach((s) => {
    const color = s.type === "sample" ? "#8b5cf6" : getColor(s.type);
    const condText = tr().cond[s.type] || s.type;
    const sName = s.name[lang] || s.name.ru;
    const icon = L.divIcon({
      className: "",
      html: `<div style="width:16px;height:16px;border-radius:50%;background:${color};border:2px solid #fff;box-shadow:0 0 6px rgba(0,0,0,0.45)"></div>`,
      iconSize: [16, 16],
      iconAnchor: [8, 8],
      popupAnchor: [0, -8],
    });
    const popupContent = s.history
      ? buildHistoryPopup(s, sName, color)
      : `<div><div class="popup-title">${sName}</div><div class="popup-row"><span>${tr().observed}:</span> <b>${s.date}</b></div><div class="popup-row"><span>${tr().level}:</span> <b style="color:${color}">${s.level} см</b></div>${s.danger != null ? `<div class="popup-row"><span>${tr().danger}:</span> <b>${s.danger} см</b></div>` : ""}<div class="popup-row"><span>${tr().temp}:</span> <b>${s.temp} °C</b></div><div class="popup-row"><span>${tr().discharge}:</span> <b>${s.discharge == null ? "—" : `${s.discharge} м³/с`}</b></div><div class="popup-row"><span>${tr().condition}:</span> <b>${condText}</b></div><div class="popup-note">${tr().snapshot}</div></div>`;
    const marker = L.marker(s.coords, { icon })
      .addTo(map)
      .bindPopup(popupContent);
    leafletMarkers.push({ station: s, marker });
  });
  $("count").textContent = STATIONS.length;
}

function openStation(s) {
  const isMobile = window.innerWidth <= 850;
  if (isMobile) {
    toggleMobileView(false);
  }
  setTimeout(
    () => {
      map.invalidateSize();
      map.flyTo(s.coords, 11, { duration: 0.7 });
      const found = leafletMarkers.find((m) => m.station === s);
      if (found) found.marker.openPopup();
    },
    isMobile ? 120 : 0,
  );
}

function renderSidebar(query = "") {
  const el = $("cities");
  el.replaceChildren();
  const q = query.trim().toLowerCase();

  const filtered = STATIONS.filter((s) => {
    if (!q) return true;
    const name = (s.name[lang] || s.name.ru).toLowerCase();
    const city = (s.city[lang] || s.city.ru).toLowerCase();
    return name.includes(q) || city.includes(q);
  });
    if (!filtered.length) {
    const p = document.createElement("p");
    p.className = "muted";
    p.textContent = tr().noresults;
    el.append(p);
    return;
  }

  filtered.forEach((s) => {
    const color = s.type === "sample" ? "#8b5cf6" : getColor(s.type);
    const condText = tr().cond[s.type] || s.type;
    const sName = s.name[lang] || s.name.ru;
    const sCity = s.city[lang] || s.city.ru;

    const btn = document.createElement("button");
    btn.className = "city";

    const head = document.createElement("div");
    head.className = "city-head";

    const strong = document.createElement("strong");
    strong.textContent = `${sCity} — ${sName}`;

    const badge = document.createElement("span");
    badge.className = "badge";
    badge.style.background = color + "22";
    badge.style.color = color;
    badge.textContent = `${s.level} см`;

    head.append(strong, badge);

    const small = document.createElement("small");
    small.textContent = s.history
      ? `История 28.09–28.10.2026 · ${s.level} см · ${s.temp.toLocaleString("ru-RU")} °C`
      : `${condText}${s.danger != null ? ` · ${tr().danger}: ${s.danger} см` : ""}`;

    btn.append(head, small);
    btn.onclick = () => openStation(s);
    el.append(btn);
  });
}

function setDataMode() {
  dataMode = "archive";
  const t = tr();

  $("map").style.display = "block";
  $("archiveStationList").hidden = false;
  $("liveSidebarInfo").hidden = true;
  $("mapwrap").classList.remove("live-mode");

  $("status").textContent = t.archiveStatus;
  $("mapSubtitle").textContent = t.archiveSubtitle;
  $("s1note").textContent = t.archiveS1note;
  $("s2").textContent = t.archiveS2;
  $("date").textContent = t.archiveS2value;
  $("s2note").textContent = t.archiveS2note;
  $("count").textContent = String(STATIONS.length);
  $("noticeText").textContent = t.archiveNotice;
  $("footnote").textContent = t.archiveFootnote;

  setTimeout(() => map.invalidateSize(), 100);
}

function toggleMobileView(showList) {
  isMobileListOpen =
    typeof showList === "boolean" ? showList : !isMobileListOpen;

  const sidebar = $("sidebar");
  const mainContent = $("mainContent");
  const toggleBtn = $("mobileToggleBtn");

  window.scrollTo({ top: 0, behavior: "instant" });

  if (isMobileListOpen) {
    sidebar.classList.add("active");
    mainContent.classList.add("hidden-mobile");
    toggleBtn.innerHTML = `<span id="mobileToggleText">${tr().btnMap}</span>`;
  } else {
    sidebar.classList.remove("active");
    mainContent.classList.remove("hidden-mobile");
    toggleBtn.innerHTML = `<span id="mobileToggleText">${tr().btnList}</span>`;
    setTimeout(() => map.invalidateSize(), 100);
  }
}

function setLang(l) {
  lang = l;
  document.documentElement.lang = l;

  const t = tr();

  $("subHeader").textContent = t.subHeader;
  $("title").textContent = t.title;
  $("intro").textContent = t.intro;
  $("searchLabel").textContent = t.searchLabel;
  $("search").placeholder = t.placeholder;
  $("citiesLabel").textContent = t.citiesLabel;
  $("noticeTitle").textContent = t.noticeTitle;
  $("mapTitle").textContent = t.mapTitle;
  $("s1").textContent = t.s1;
  $("s2").textContent = t.archiveS2;
  $("s3").textContent = t.s3;
  $("s3note").textContent = t.s3note;
  $("resetText").textContent = t.reset;
  $("pushText").textContent = t.pushSub;
  $("pushBtn").textContent = t.pushBtn;

  $("mobileToggleBtn").innerHTML =
    `<span aria-hidden="true">📋</span> <span id="mobileToggleText">${isMobileListOpen ? t.btnMap : t.btnList}</span>`;

  $("themeToggle").textContent = isDark ? t.themeLight : t.themeDark;
  if ($("tgBtn")) $("tgBtn").textContent = t.tgBtn;
  if ($("origLink")) $("origLink").textContent = t.origLink;
  if (typeof updateArduinoLocale === "function") updateArduinoLocale();

  renderLegend();
  renderMapMarkers();
  renderSidebar($("search").value);
  setDataMode();
}

$("themeToggle").addEventListener("click", () => {
  isDark = !isDark;
  document.body.classList.toggle("dark", isDark);

  $("themeToggle").textContent = isDark ? tr().themeLight : tr().themeDark;

  if (isDark) {
    map.removeLayer(lightTileLayer);
    darkTileLayer.addTo(map);
  } else {
    map.removeLayer(darkTileLayer);
    lightTileLayer.addTo(map);
  }
});

$("pushBtn").addEventListener("click", () => {
  if ("Notification" in window) {
    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        alert(tr().pushEnabled);
        new Notification("Urpaq Monitor", {
          body: "Вы успешно подписались на штормовые веб-пуши!",
        });
      }
    });
  } else {
    alert("Ваш браузер не поддерживает Web Push уведомления.");
  }
});

$("mobileToggleBtn").addEventListener("click", () => toggleMobileView());
$("lang").addEventListener("change", (e) => setLang(e.target.value));
$("search").addEventListener("input", (e) => renderSidebar(e.target.value));

$("reset").addEventListener("click", () => {
  map.closePopup();
  map.flyTo([48.2, 67.5], 5, { duration: 0.8 });
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 850) {
    $("sidebar").classList.remove("active");
    $("mainContent").classList.remove("hidden-mobile");
    map.invalidateSize();
  }
});

// --- USB Serial connection, Telemetry, Alarms, History & Analytics for Arduino ---

const ARDUINO_STORAGE_KEY = "urpaq_arduino_real_history_v1";
const ARDUINO_SETTINGS_KEY = "urpaq_arduino_settings_v1";
const MAX_HISTORY_RECORDS = 2000;
const STALE_TIMEOUT_MS = 5000;
const ALARM_REPEAT_MS = 4000;
const WARNING_REPEAT_COOLDOWN_MS = 30000;
const NOTIFICATION_COOLDOWN_MS = 15000;

let floodPort = null;
let floodReader = null;
let floodReadTask = null;
let isConnectingSerial = false;
let floodStopRequested = false;

let floodLastStatus = "offline";
let floodSensorState = "disconnected"; // disconnected | connected | error | sim
let isDataStale = false;
let lastPacketTimestamp = 0;
let lastValidReading = null; // { station_id, value, unit, status, ts, date, time, isSim }

let floodAudio = null;
let isAudioMuted = false;
let floodAlarmTimer = null;
let lastWarningBeepAt = 0;
let lastNotificationAt = 0;
let freshnessWatchdogTimer = null;

// Per-station tracking for smart history throttling: { [station_id]: { ts, status } }
const lastRecordedByStation = Object.create(null);
const lastSimRecordedByStation = Object.create(null);

let realHistory = [];
let storageAvailable = true;

// Separate in-memory buffer for Test/Demo simulator so real history is never polluted
let demoSimHistory = [];
let simAutoTimer = null;

const ARDUINO_I18N = {
  ru: {
    statusNormal: "Норма",
    statusWarning: "Предупреждение",
    statusAlarm: "Тревога",
    statusOffline: "Ожидание данных",
    statusStale: "Нет свежих данных (> 5 с)",
    sensorConnected: "Подключён",
    sensorDisconnected: "Отключён",
    sensorError: "Ошибка",
    sensorSim: "Тестовый режим",
    soundOn: "🔔 Звук: Вкл",
    soundOff: "🔇 Звук: Выкл",
    sourceReal: "Источник: Реальные показания Arduino (USB)",
    sourceDemo: "Источник: Демонстрационные / тестовые данные",
    modeUsb: "Режим: USB Serial",
    modeSim: "Режим: Тест / Симулятор",
  },
  kk: {
    statusNormal: "Қалыпты",
    statusWarning: "Ескерту",
    statusAlarm: "Дабыл",
    statusOffline: "Деректер күтілуде",
    statusStale: "Жаңа деректер жоқ (> 5 с)",
    sensorConnected: "Қосылған",
    sensorDisconnected: "Ажыратылған",
    sensorError: "Қате",
    sensorSim: "Тест режимі",
    soundOn: "🔔 Дыбыс: Қосулы",
    soundOff: "🔇 Дыбыс: Өшірулі",
    sourceReal: "Дереккөз: Нақты Arduino көрсеткіштері (USB)",
    sourceDemo: "Дереккөз: Демонстрациялық / тест деректері",
    modeUsb: "Режим: USB Serial",
    modeSim: "Режим: Тест / Симулятор",
  },
  en: {
    statusNormal: "Normal",
    statusWarning: "Warning",
    statusAlarm: "Alarm",
    statusOffline: "Waiting for data",
    statusStale: "No fresh data (> 5 s)",
    sensorConnected: "Connected",
    sensorDisconnected: "Disconnected",
    sensorError: "Error",
    sensorSim: "Test Mode",
    soundOn: "🔔 Sound: On",
    soundOff: "🔇 Sound: Off",
    sourceReal: "Source: Real Arduino Readings (USB)",
    sourceDemo: "Source: Demonstration / Test Data",
    modeUsb: "Mode: USB Serial",
    modeSim: "Mode: Test / Simulator",
  },
};

function atr() {
  return ARDUINO_I18N[lang] || ARDUINO_I18N.ru;
}

function pad2(n) {
  return String(n).padStart(2, "0");
}

function formatDateTime(ts) {
  const d = new Date(ts);
  const date = `${pad2(d.getDate())}.${pad2(d.getMonth() + 1)}.${d.getFullYear()}`;
  const time = `${pad2(d.getHours())}:${pad2(d.getMinutes())}:${pad2(d.getSeconds())}`;
  return { date, time, full: `${date}, ${time}` };
}

function getThresholds() {
  const alarmEl = $("alarmThreshold");
  const warnEl = $("warningThreshold");
  let alarm = Number(alarmEl ? alarmEl.value : 80);
  if (!Number.isFinite(alarm) || alarm < 2 || alarm > 100) alarm = 80;
  alarm = Math.round(alarm);

  let warn = Number(warnEl ? warnEl.value : 50);
  if (!Number.isFinite(warn) || warn < 1 || warn > 99) warn = 50;
  warn = Math.round(warn);

  if (warn >= alarm) {
    warn = Math.max(1, alarm - 1);
  }
  return { warn, alarm };
}

function getHistoryIntervalMs() {
  const el = $("historyInterval");
  const sec = Number(el ? el.value : 5);
  if (!Number.isFinite(sec) || sec < 1) return 5000;
  return Math.round(sec * 1000);
}

function evaluateWaterStatus(value) {
  const { warn, alarm } = getThresholds();
  if (value >= alarm) return "alarm";
  if (value >= warn) return "warning";
  return "normal";
}

function getStatusLabel(status) {
  const t = atr();
  if (status === "alarm") return t.statusAlarm;
  if (status === "warning") return t.statusWarning;
  if (status === "normal") return t.statusNormal;
  if (status === "stale") return t.statusStale;
  return t.statusOffline;
}

function syncThresholdUi() {
  const { warn, alarm } = getThresholds();
  if ($("warningThreshold")) $("warningThreshold").value = String(warn);
  if ($("alarmThreshold")) $("alarmThreshold").value = String(alarm);

  if ($("warnMarkerLine")) {
    $("warnMarkerLine").style.left = `${warn}%`;
    $("warnMarkerLine").title = `Порог предупреждения: ${warn}%`;
  }
  if ($("alarmMarkerLine")) {
    $("alarmMarkerLine").style.left = `${alarm}%`;
    $("alarmMarkerLine").title = `Порог тревоги: ${alarm}%`;
  }
  if ($("arduinoThresholdSummary")) {
    $("arduinoThresholdSummary").textContent =
      `Норма <${warn}% · Пред. ${warn}–${alarm - 1}% · Трев. ≥${alarm}%`;
  }
}

function saveSettings() {
  const { warn, alarm } = getThresholds();
  const intervalSec = Math.round(getHistoryIntervalMs() / 1000);
  try {
    localStorage.setItem(
      ARDUINO_SETTINGS_KEY,
      JSON.stringify({ warn, alarm, intervalSec, muted: isAudioMuted }),
    );
  } catch (_) {}
}

function loadSettings() {
  try {
    const raw = localStorage.getItem(ARDUINO_SETTINGS_KEY);
    if (!raw) return;
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object") return;
    if (Number.isFinite(Number(parsed.alarm)) && $("alarmThreshold")) {
      $("alarmThreshold").value = String(Math.max(2, Math.min(100, Math.round(Number(parsed.alarm)))));
    }
    if (Number.isFinite(Number(parsed.warn)) && $("warningThreshold")) {
      $("warningThreshold").value = String(Math.max(1, Math.min(99, Math.round(Number(parsed.warn)))));
    }
    if (Number.isFinite(Number(parsed.intervalSec)) && $("historyInterval")) {
      const allowed = ["1", "5", "10", "30", "60"];
      const s = String(parsed.intervalSec);
      if (allowed.includes(s)) $("historyInterval").value = s;
    }
    if (typeof parsed.muted === "boolean") {
      isAudioMuted = parsed.muted;
    }
  } catch (_) {}
  syncThresholdUi();
  updateMuteButtonUi();
}

function checkSerialEnvironment() {
  const warnBox = $("serialEnvWarning");
  const warnTitle = $("serialEnvWarningTitle");
  const warnText = $("serialEnvWarningText");
  if (!warnBox) return;

  const isFileProto = window.location.protocol === "file:";
  const hasSerial = "serial" in navigator;

  if (!hasSerial && isFileProto) {
    warnBox.hidden = false;
    warnTitle.textContent = "⚠ Сайт открыт через file:// и Web Serial API заблокирован браузером";
    warnText.textContent =
      "Для подключения Arduino по USB откройте проект в Google Chrome или Microsoft Edge через локальный HTTP-сервер: выполните в папке проекта команду python -m http.server 8000 и откройте http://localhost:8000.";
  } else if (!hasSerial) {
    warnBox.hidden = false;
    warnTitle.textContent = "⚠ Браузер не поддерживает Web Serial API";
    warnText.textContent =
      "Подключение Arduino по USB доступно в настольных версиях Google Chrome и Microsoft Edge (версия 89+). Вы можете использовать встроенный тестовый режим ниже или открыть сайт в Chrome / Edge.";
  } else if (isFileProto) {
    warnBox.hidden = false;
    warnTitle.textContent = "ℹ Сайт открыт напрямую из файла (file://)";
    warnText.textContent =
      "Если браузер запретит доступ к COM-порту в режиме file://, запустите локальный сервер командой python -m http.server 8000 и откройте http://localhost:8000.";
  } else {
    warnBox.hidden = true;
  }
}

// --- Audio & Alarm Timer Control ---
function stopAlarmRepeatTimer() {
  if (floodAlarmTimer !== null) {
    clearInterval(floodAlarmTimer);
    floodAlarmTimer = null;
  }
}

function startAlarmRepeatTimer() {
  stopAlarmRepeatTimer();
  floodAlarmTimer = setInterval(() => {
    if (floodLastStatus === "alarm" && !isDataStale && !isAudioMuted && floodSensorState !== "disconnected") {
      playFloodBeep("alarm");
    } else if (floodLastStatus !== "alarm") {
      stopAlarmRepeatTimer();
    }
  }, ALARM_REPEAT_MS);
}

function playFloodBeep(level) {
  if (isAudioMuted) return;
  try {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return;
    if (!floodAudio || floodAudio.state === "closed") {
      floodAudio = new AudioContextClass();
    }
    if (floodAudio.state === "suspended") {
      floodAudio.resume().catch(() => {});
    }

    const now = floodAudio.currentTime;
    if (level === "alarm") {
      // Distinct two-tone alarm signal
      const osc1 = floodAudio.createOscillator();
      const osc2 = floodAudio.createOscillator();
      const gain = floodAudio.createGain();

      osc1.type = "sawtooth";
      osc2.type = "sine";
      osc1.frequency.setValueAtTime(920, now);
      osc1.frequency.setValueAtTime(1320, now + 0.18);

      osc2.frequency.setValueAtTime(460, now);
      osc2.frequency.setValueAtTime(660, now + 0.18);

      gain.gain.setValueAtTime(0.09, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.42);

      osc1.connect(gain);
      osc2.connect(gain);
      gain.connect(floodAudio.destination);

      osc1.start(now);
      osc2.start(now);
      osc1.stop(now + 0.42);
      osc2.stop(now + 0.42);
    } else {
      // Short single warning tone
      const osc = floodAudio.createOscillator();
      const gain = floodAudio.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(760, now);
      gain.gain.setValueAtTime(0.07, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.18);
      osc.connect(gain);
      gain.connect(floodAudio.destination);
      osc.start(now);
      osc.stop(now + 0.18);
    }
  } catch (error) {
    console.warn("Звуковой сигнал недоступен:", error);
  }
}

function closeAudioResources() {
  stopAlarmRepeatTimer();
  if (floodAudio && typeof floodAudio.close === "function" && floodAudio.state !== "closed") {
    try {
      floodAudio.close().catch(() => {});
    } catch (_) {}
  }
  floodAudio = null;
}

function updateMuteButtonUi() {
  const btn = $("arduinoMuteBtn");
  if (!btn) return;
  btn.setAttribute("aria-pressed", isAudioMuted ? "true" : "false");
  btn.textContent = isAudioMuted ? atr().soundOff : atr().soundOn;
}

function sendSystemNotification(title, body) {
  if (!("Notification" in window) || Notification.permission !== "granted") return;
  const now = Date.now();
  if (now - lastNotificationAt < NOTIFICATION_COOLDOWN_MS) return;
  lastNotificationAt = now;
  try {
    new Notification(title, { body });
  } catch (_) {}
}

// --- Validation of Incoming Arduino Packet ---
function validateArduinoPacket(data) {
  if (!data || typeof data !== "object" || Array.isArray(data)) {
    return { valid: false, reason: "Ожидался JSON-объект." };
  }
  if (data.parameter !== "water_level") {
    return {
      valid: false,
      reason: `Неизвестный параметр "${String(data.parameter ?? "")}" (ожидается "water_level").`,
    };
  }
  const rawStation = typeof data.station_id === "string" ? data.station_id.trim() : "";
  if (!rawStation) {
    return { valid: false, reason: "Отсутствует обязательное строковое поле station_id." };
  }
  const station_id = rawStation.slice(0, 64);

  if (data.value === null || data.value === undefined || data.value === "" || typeof data.value === "boolean") {
    return { valid: false, reason: "Отсутствует числовое значение уровня воды (value)." };
  }
  const numValue = Number(data.value);
  if (!Number.isFinite(numValue)) {
    return { valid: false, reason: "Поле value не является конечным числом." };
  }
  if (numValue < 0 || numValue > 100) {
    return {
      valid: false,
      reason: `Значение уровня воды (${numValue}) выходит за допустимый диапазон 0–100%.`,
    };
  }
  const unit = data.unit === undefined || data.unit === null ? "%" : String(data.unit).trim();
  if (unit !== "%") {
    return { valid: false, reason: `Некорректная единица измерения "${unit}" (ожидается "%").` };
  }

  return {
    valid: true,
    station_id,
    parameter: "water_level",
    value: Math.round(numValue * 10) / 10,
    unit: "%",
  };
}

// --- UI Panel Rendering ---
function setFloodUi(level, value, title, detail, options = {}) {
  const panel = $("arduinoAlert");
  if (panel) panel.dataset.level = level;
  if ($("arduinoAlertTitle")) $("arduinoAlertTitle").textContent = title;
  if ($("arduinoAlertText")) $("arduinoAlertText").textContent = detail;
  if ($("arduinoAlertIcon")) {
    $("arduinoAlertIcon").textContent =
      level === "alarm" ? "🚨" : level === "warning" ? "⚠️" : level === "normal" ? "✅" : "ℹ️";
  }

  const meterValEl = $("waterMeterValue");
  const meterFillEl = $("waterMeterFill");
  const staleBadge = $("waterMeterStaleBadge");

  if (options.stale) {
    if (staleBadge) staleBadge.hidden = false;
    if (meterValEl) {
      const prevText = lastValidReading ? `${Math.round(lastValidReading.value)}%` : "—";
      meterValEl.textContent = `Устарело (посл.: ${prevText})`;
      meterValEl.classList.add("stale-value");
    }
    if (meterFillEl) {
      meterFillEl.classList.add("stale");
    }
  } else {
    if (staleBadge) staleBadge.hidden = true;
    if (meterValEl) meterValEl.classList.remove("stale-value");
    if (meterFillEl) meterFillEl.classList.remove("stale");

    if (value !== null && Number.isFinite(value)) {
      const shown = Math.max(0, Math.min(100, value));
      if (meterValEl) meterValEl.textContent = `${Math.round(shown)}%`;
      if (meterFillEl) {
        meterFillEl.style.width = `${shown}%`;
        meterFillEl.className = `water-meter-fill ${
          level === "alarm" ? "alarm" : level === "warning" ? "warning" : ""
        }`;
      }
    } else if (options.resetMeter) {
      if (meterValEl) meterValEl.textContent = "—%";
      if (meterFillEl) {
        meterFillEl.style.width = "0%";
        meterFillEl.className = "water-meter-fill";
      }
    }
  }
}

function updateTelemetryCards() {
  const t = atr();
  const stateEl = $("arduinoSensorState");
  const statusEl = $("arduinoWaterStatus");
  const connPill = $("arduinoConnection");
  const srcBadge = $("arduinoSourceBadge");

  if (srcBadge) {
    if (floodSensorState === "sim") {
      srcBadge.textContent = t.modeSim;
      srcBadge.className = "source-pill source-demo";
    } else {
      srcBadge.textContent = t.modeUsb;
      srcBadge.className = "source-pill source-real";
    }
  }

  if (stateEl) {
    if (floodSensorState === "connected") {
      stateEl.textContent = isDataStale ? "Подключён (нет данных)" : t.sensorConnected;
      stateEl.className = `telemetry-value ${isDataStale ? "status-text-stale" : "status-text-normal"}`;
    } else if (floodSensorState === "error") {
      stateEl.textContent = t.sensorError;
      stateEl.className = "telemetry-value status-text-alarm";
    } else if (floodSensorState === "sim") {
      stateEl.textContent = isDataStale ? "Тест (таймаут > 5 с)" : t.sensorSim;
      stateEl.className = `telemetry-value ${isDataStale ? "status-text-stale" : "status-text-normal"}`;
    } else {
      stateEl.textContent = t.sensorDisconnected;
      stateEl.className = "telemetry-value status-text-offline";
    }
  }

  if (connPill) {
    connPill.classList.remove("connected", "error", "stale");
    if (floodSensorState === "connected") {
      const stName = lastValidReading ? lastValidReading.station_id : "Arduino";
      if (isDataStale) {
        connPill.textContent = `● Нет свежих данных · ${stName}`;
        connPill.classList.add("stale");
      } else {
        connPill.textContent = `● Подключён · ${stName}`;
        connPill.classList.add("connected");
      }
    } else if (floodSensorState === "error") {
      connPill.textContent = "● Ошибка датчика";
      connPill.classList.add("error");
    } else if (floodSensorState === "sim") {
      const stName = lastValidReading ? lastValidReading.station_id : "sim";
      connPill.textContent = isDataStale ? `● Тест: таймаут · ${stName}` : `● Тест · ${stName}`;
      connPill.classList.add(isDataStale ? "stale" : "connected");
    } else {
      connPill.textContent = `● ${t.sensorDisconnected}`;
    }
  }

  if (statusEl) {
    if (isDataStale) {
      statusEl.textContent = t.statusStale;
      statusEl.className = "telemetry-value status-text-stale";
    } else if (floodLastStatus === "alarm") {
      statusEl.textContent = t.statusAlarm;
      statusEl.className = "telemetry-value status-text-alarm";
    } else if (floodLastStatus === "warning") {
      statusEl.textContent = t.statusWarning;
      statusEl.className = "telemetry-value status-text-warning";
    } else if (floodLastStatus === "normal") {
      statusEl.textContent = t.statusNormal;
      statusEl.className = "telemetry-value status-text-normal";
    } else {
      statusEl.textContent = t.statusOffline;
      statusEl.className = "telemetry-value status-text-offline";
    }
  }
}

// --- 5-Second Freshness Watchdog ---
function startFreshnessWatchdog() {
  if (freshnessWatchdogTimer !== null) return;
  freshnessWatchdogTimer = setInterval(checkDataFreshness, 1000);
}

function stopFreshnessWatchdog() {
  if (freshnessWatchdogTimer !== null) {
    clearInterval(freshnessWatchdogTimer);
    freshnessWatchdogTimer = null;
  }
}

function checkDataFreshness() {
  if (floodSensorState === "disconnected" || !lastPacketTimestamp) return;
  const elapsedMs = Date.now() - lastPacketTimestamp;
  const elapsedSec = Math.floor(elapsedMs / 1000);

  if ($("arduinoDataAge")) {
    $("arduinoDataAge").textContent =
      elapsedSec <= 1
        ? "Свежесть данных: только что (< 1 с)"
        : `Свежесть данных: ${elapsedSec} с назад`;
  }

  if (elapsedMs >= STALE_TIMEOUT_MS && !isDataStale) {
    isDataStale = true;
    stopAlarmRepeatTimer();
    const lastInfo = lastValidReading
      ? `Последнее измерение (${Math.round(lastValidReading.value)}% от ${lastValidReading.station_id}) получено в ${lastValidReading.time}.`
      : "Данные перестали поступать.";
    setFloodUi(
      "warning",
      lastValidReading ? lastValidReading.value : null,
      "ВНИМАНИЕ: Отсутствуют свежие данные более 5 секунд",
      `${lastInfo} Устаревшее значение снято с актуального отображения.`,
      { stale: true },
    );
    updateTelemetryCards();
  }
}

// --- History Management (localStorage + CSV + Filters) ---
function isValidHistoryRecord(rec) {
  return (
    rec &&
    typeof rec === "object" &&
    typeof rec.station_id === "string" &&
    rec.station_id.length > 0 &&
    typeof rec.date === "string" &&
    typeof rec.time === "string" &&
    Number.isFinite(Number(rec.value)) &&
    Number(rec.value) >= 0 &&
    Number(rec.value) <= 100 &&
    ["normal", "warning", "alarm"].includes(rec.status) &&
    Number.isFinite(Number(rec.ts))
  );
}

function updateStorageBadge(ok, note) {
  storageAvailable = ok;
  const badge = $("historyStorageBadge");
  if (!badge) return;
  if (ok) {
    badge.textContent = note || "💾 localStorage: Активен";
    badge.className = "connection-pill connected";
  } else {
    badge.textContent = note || "⚠ localStorage: Ограничен";
    badge.className = "connection-pill error";
  }
}

function loadRealHistory() {
  try {
    const raw = localStorage.getItem(ARDUINO_STORAGE_KEY);
    if (!raw) {
      realHistory = [];
      updateStorageBadge(true, "💾 localStorage: Готов");
      return;
    }
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) {
      throw new Error("History in localStorage is not an array");
    }
    const cleaned = parsed.filter(isValidHistoryRecord).slice(0, MAX_HISTORY_RECORDS);
    realHistory = cleaned;
    if (cleaned.length !== parsed.length) {
      saveRealHistory();
      updateStorageBadge(true, "💾 localStorage: Восстановлен");
    } else {
      updateStorageBadge(true, "💾 localStorage: Активен");
    }
  } catch (err) {
    console.warn("История в localStorage повреждена или недоступна, сброс:", err);
    realHistory = [];
    try {
      localStorage.removeItem(ARDUINO_STORAGE_KEY);
      updateStorageBadge(true, "💾 localStorage: Очищен после сбоя");
    } catch (_) {
      updateStorageBadge(false, "⚠ localStorage недоступен (в памяти)");
    }
  }
}

function saveRealHistory() {
  if (realHistory.length > MAX_HISTORY_RECORDS) {
    realHistory = realHistory.slice(0, MAX_HISTORY_RECORDS);
  }
  try {
    localStorage.setItem(ARDUINO_STORAGE_KEY, JSON.stringify(realHistory));
    updateStorageBadge(true, "💾 localStorage: Активен");
  } catch (err) {
    console.warn("Не удалось записать историю в localStorage:", err);
    updateStorageBadge(false, "⚠ Ошибка записи в localStorage");
  }
}

function shouldRecordMeasurement(trackerMap, station_id, status, ts) {
  const prev = trackerMap[station_id];
  if (!prev) return true;
  // Immediate recording on status change or transition to/from alarm/warning
  if (prev.status !== status) return true;
  const intervalMs = getHistoryIntervalMs();
  if (ts - prev.ts >= intervalMs) return true;
  return false;
}

function recordMeasurementIfNeeded(reading, isSim = false) {
  const tracker = isSim ? lastSimRecordedByStation : lastRecordedByStation;
  if (!shouldRecordMeasurement(tracker, reading.station_id, reading.status, reading.ts)) {
    return false;
  }
  tracker[reading.station_id] = { ts: reading.ts, status: reading.status };

  const entry = {
    id: `${reading.ts}_${Math.random().toString(36).slice(2, 7)}`,
    ts: reading.ts,
    date: reading.date,
    time: reading.time,
    value: reading.value,
    status: reading.status,
    station_id: reading.station_id,
  };

  if (isSim) {
    demoSimHistory.unshift(entry);
    if (demoSimHistory.length > MAX_HISTORY_RECORDS) {
      demoSimHistory.length = MAX_HISTORY_RECORDS;
    }
    refreshStationFilterOptions();
    if ($("analyticsSourceSelect") && $("analyticsSourceSelect").value === "demo") {
      renderAnalyticsAndChart();
    }
  } else {
    realHistory.unshift(entry);
    if (realHistory.length > MAX_HISTORY_RECORDS) {
      realHistory.length = MAX_HISTORY_RECORDS;
    }
    saveRealHistory();
    refreshStationFilterOptions();
    renderHistoryTable();
    if ($("analyticsSourceSelect") && $("analyticsSourceSelect").value === "real") {
      renderAnalyticsAndChart();
    }
  }
  return true;
}

function refreshStationFilterOptions() {
  const realStations = new Set(realHistory.map((r) => r.station_id));
  const allStations = new Set([
    ...realStations,
    ...demoSimHistory.map((r) => r.station_id),
  ]);

  const histSelect = $("historyStationFilter");
  if (histSelect) {
    const current = histSelect.value || "all";
    histSelect.replaceChildren();
    const optAll = document.createElement("option");
    optAll.value = "all";
    optAll.textContent = "Все станции";
    histSelect.append(optAll);

    Array.from(realStations)
      .sort()
      .forEach((st) => {
        const opt = document.createElement("option");
        opt.value = st;
        opt.textContent = st;
        histSelect.append(opt);
      });
    if ([...histSelect.options].some((o) => o.value === current)) {
      histSelect.value = current;
    }
  }

  const anSelect = $("analyticsStationSelect");
  if (anSelect) {
    const current = anSelect.value || "all";
    anSelect.replaceChildren();
    const optAll = document.createElement("option");
    optAll.value = "all";
    optAll.textContent = "Все станции";
    anSelect.append(optAll);

    Array.from(allStations)
      .sort()
      .forEach((st) => {
        const opt = document.createElement("option");
        opt.value = st;
        opt.textContent = st;
        anSelect.append(opt);
      });
    if ([...anSelect.options].some((o) => o.value === current)) {
      anSelect.value = current;
    }
  }
}

function renderHistoryTable() {
  const tbody = $("arduinoHistoryTbody");
  const emptyBox = $("arduinoHistoryEmpty");
  const countBadge = $("historyCountBadge");
  if (!tbody) return;

  const stFilter = $("historyStationFilter") ? $("historyStationFilter").value : "all";
  const statusFilter = $("historyStatusFilter") ? $("historyStatusFilter").value : "all";

  const filtered = realHistory.filter((item) => {
    if (stFilter !== "all" && item.station_id !== stFilter) return false;
    if (statusFilter !== "all" && item.status !== statusFilter) return false;
    return true;
  });

  if (countBadge) {
    countBadge.textContent =
      filtered.length === realHistory.length
        ? `Записей: ${realHistory.length} / ${MAX_HISTORY_RECORDS}`
        : `Показано: ${filtered.length} из ${realHistory.length} (макс. ${MAX_HISTORY_RECORDS})`;
  }

  tbody.replaceChildren();

  if (filtered.length === 0) {
    if (emptyBox) {
      emptyBox.hidden = false;
      emptyBox.textContent =
        realHistory.length === 0
          ? "Реальных показаний Arduino пока нет. Подключите датчик через USB, чтобы измерения автоматически сохранялись в историю."
          : "По выбранным фильтрам записей не найдено.";
    }
    return;
  }

  if (emptyBox) emptyBox.hidden = true;

  const fragment = document.createDocumentFragment();
  filtered.forEach((rec) => {
    const trEl = document.createElement("tr");

    const tdDate = document.createElement("td");
    tdDate.textContent = rec.date;

    const tdTime = document.createElement("td");
    tdTime.textContent = rec.time;

    const tdStation = document.createElement("td");
    const codeEl = document.createElement("strong");
    codeEl.textContent = rec.station_id;
    tdStation.append(codeEl);

    const tdValue = document.createElement("td");
    tdValue.textContent = `${Math.round(rec.value)}%`;

    const tdStatus = document.createElement("td");
    const pill = document.createElement("span");
    pill.className = `status-pill ${rec.status}`;
    pill.textContent = getStatusLabel(rec.status);
    tdStatus.append(pill);

    trEl.append(tdDate, tdTime, tdStation, tdValue, tdStatus);
    fragment.append(trEl);
  });

  tbody.append(fragment);
}

function escapeCsvCell(val) {
  const s = String(val ?? "").split('"').join('""');
  return `"${s}"`;
}

function buildCsvContent(records) {
  const header = ["Дата", "Время", "ID станции", "Уровень воды (%)", "Статус"];
  const lines = [header.map(escapeCsvCell).join(";")];
  records.forEach((r) => {
    const row = [
      r.date,
      r.time,
      r.station_id,
      Math.round(r.value),
      getStatusLabel(r.status),
    ];
    lines.push(row.map(escapeCsvCell).join(";"));
  });
  // Prepend UTF-8 BOM so Microsoft Excel opens Cyrillic UTF-8 cleanly
  return "\uFEFF" + lines.join("\r\n");
}

function exportHistoryToCsv() {
  if (!realHistory.length) {
    alert("История реальных показаний Arduino пуста. Нет данных для экспорта.");
    return;
  }
  const csvContent = buildCsvContent(realHistory);
  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  const nowFmt = formatDateTime(Date.now());
  const fileStamp = `${nowFmt.date.split(".").reverse().join("-")}_${nowFmt.time.replace(/:/g, "-")}`;
  a.href = url;
  a.download = `urpaq_arduino_history_${fileStamp}.csv`;
  document.body.append(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1500);
}

function clearRealHistoryConfirmed() {
  realHistory = [];
  Object.keys(lastRecordedByStation).forEach((k) => delete lastRecordedByStation[k]);
  saveRealHistory();
  refreshStationFilterOptions();
  renderHistoryTable();
  renderAnalyticsAndChart();
  if ($("historyConfirmBar")) $("historyConfirmBar").hidden = true;
}

// --- Core Reading Handler ---
function handleFloodReading(data, options = {}) {
  const isSim = Boolean(options.isSim);
  const check = validateArduinoPacket(data);

  if (!check.valid) {
    floodSensorState = "error";
    setFloodUi(
      "warning",
      null,
      "Ошибка формата данных от датчика",
      check.reason,
    );
    if ($("arduinoPortInfo")) {
      $("arduinoPortInfo").textContent = `Ошибка пакета: ${check.reason}`;
    }
    updateTelemetryCards();
    return false;
  }

  const nowTs = typeof options.timestamp === "number" ? options.timestamp : Date.now();
  const fmt = formatDateTime(nowTs);
  const value = check.value;
  const unit = check.unit;
  const station_id = check.station_id;
  const { warn, alarm } = getThresholds();
  const status = evaluateWaterStatus(value);
  const prevStatus = floodLastStatus;

  isDataStale = false;
  lastPacketTimestamp = nowTs;
  floodSensorState = isSim ? "sim" : "connected";

  lastValidReading = {
    station_id,
    value,
    unit,
    status,
    ts: nowTs,
    date: fmt.date,
    time: fmt.time,
    isSim,
  };

  startFreshnessWatchdog();

  // Update telemetry cards with safe textContent
  if ($("arduinoStationName")) $("arduinoStationName").textContent = station_id;
  if ($("arduinoParameterInfo")) {
    $("arduinoParameterInfo").textContent = `Параметр: ${check.parameter} (${unit})`;
  }
  if ($("arduinoLastTime")) $("arduinoLastTime").textContent = fmt.full;
  if ($("arduinoDataAge")) $("arduinoDataAge").textContent = "Свежесть данных: только что (< 1 с)";
  if ($("arduinoPortInfo")) {
    $("arduinoPortInfo").textContent = isSim
      ? "Источник: встроенный тестовый стенд"
      : "Порт: USB Serial активен (9600 бод)";
  }

  if (status === "alarm") {
    setFloodUi(
      "alarm",
      value,
      "ТРЕВОГА! ОБНАРУЖЕН ОПАСНЫЙ УРОВЕНЬ ВОДЫ",
      `Станция ${station_id}: уровень ${Math.round(value)}${unit} достиг или превысил порог тревоги (${alarm}%).`,
    );
    if (prevStatus !== "alarm") {
      playFloodBeep("alarm");
      startAlarmRepeatTimer();
      sendSystemNotification(
        "🚨 Urpaq Monitor — ТРЕВОГА",
        `Станция ${station_id}: опасный уровень воды ${Math.round(value)}${unit} (порог ${alarm}%).`,
      );
    } else if (!floodAlarmTimer) {
      startAlarmRepeatTimer();
    }
  } else if (status === "warning") {
    stopAlarmRepeatTimer();
    setFloodUi(
      "warning",
      value,
      "ВНИМАНИЕ: Уровень воды повышен (Предупреждение)",
      `Станция ${station_id}: уровень ${Math.round(value)}${unit} (диапазон предупреждения ${warn}–${alarm - 1}%, тревога с ${alarm}%).`,
    );
    if (prevStatus !== "warning" && prevStatus !== "alarm") {
      playFloodBeep("warning");
      lastWarningBeepAt = nowTs;
      sendSystemNotification(
        "⚠️ Urpaq Monitor — Предупреждение",
        `Станция ${station_id}: уровень воды повысился до ${Math.round(value)}${unit}.`,
      );
    } else if (nowTs - lastWarningBeepAt >= WARNING_REPEAT_COOLDOWN_MS) {
      playFloodBeep("warning");
      lastWarningBeepAt = nowTs;
    }
  } else {
    stopAlarmRepeatTimer();
    setFloodUi(
      "normal",
      value,
      "Уровень воды в пределах нормы",
      `Станция ${station_id}: текущий уровень ${Math.round(value)}${unit} (норма менее ${warn}%).`,
    );
    if (prevStatus === "alarm" || prevStatus === "warning") {
      sendSystemNotification(
        "✅ Urpaq Monitor — Уровень нормализовался",
        `Станция ${station_id}: текущий уровень воды ${Math.round(value)}${unit}.`,
      );
    }
  }

  floodLastStatus = status;
  updateTelemetryCards();
  recordMeasurementIfNeeded(lastValidReading, isSim);
  return true;
}

// --- Analytics & Time-Series SVG Chart ---
function seedInitialDemoAnalyticsData() {
  const now = Date.now();
  const samplePoints = [
    { offsetMin: -50, val: 28, st: "dam_01" },
    { offsetMin: -42, val: 34, st: "dam_01" },
    { offsetMin: -35, val: 49, st: "dam_01" },
    { offsetMin: -28, val: 54, st: "dam_01" },
    { offsetMin: -21, val: 68, st: "dam_01" },
    { offsetMin: -15, val: 82, st: "dam_01" },
    { offsetMin: -10, val: 74, st: "dam_01" },
    { offsetMin: -5, val: 44, st: "dam_01" },
    { offsetMin: -30, val: 38, st: "dam_02" },
    { offsetMin: -18, val: 52, st: "dam_02" },
    { offsetMin: -6, val: 41, st: "dam_02" },
  ];
  demoSimHistory = samplePoints
    .map((p, idx) => {
      const ts = now + p.offsetMin * 60 * 1000;
      const fmt = formatDateTime(ts);
      const status = evaluateWaterStatus(p.val);
      return {
        id: `demo_${idx}`,
        ts,
        date: fmt.date,
        time: fmt.time,
        value: p.val,
        status,
        station_id: p.st,
      };
    })
    .sort((a, b) => b.ts - a.ts);
}

function getFilteredAnalyticsData() {
  const sourceMode = $("analyticsSourceSelect") ? $("analyticsSourceSelect").value : "real";
  const stationFilter = $("analyticsStationSelect") ? $("analyticsStationSelect").value : "all";
  const periodFilter = $("analyticsPeriodSelect") ? $("analyticsPeriodSelect").value : "all";

  const baseList = sourceMode === "demo" ? demoSimHistory : realHistory;
  const now = Date.now();
  let cutoff = 0;
  if (periodFilter === "5m") cutoff = now - 5 * 60 * 1000;
  else if (periodFilter === "1h") cutoff = now - 60 * 60 * 1000;
  else if (periodFilter === "24h") cutoff = now - 24 * 60 * 60 * 1000;
  else if (periodFilter === "7d") cutoff = now - 7 * 24 * 60 * 60 * 1000;

  const filtered = baseList.filter((item) => {
    if (stationFilter !== "all" && item.station_id !== stationFilter) return false;
    if (cutoff > 0 && item.ts < cutoff) return false;
    return true;
  });

  // Sort chronologically (oldest -> newest) for time-series plotting
  return {
    sourceMode,
    points: filtered.slice().sort((a, b) => a.ts - b.ts),
  };
}

function renderAnalyticsAndChart() {
  const { sourceMode, points } = getFilteredAnalyticsData();
  const badge = $("analyticsSourceBadge");
  if (badge) {
    if (sourceMode === "demo") {
      badge.textContent = atr().sourceDemo;
      badge.className = "source-pill source-demo";
    } else {
      badge.textContent = atr().sourceReal;
      badge.className = "source-pill source-real";
    }
  }

  const minEl = $("statMinLevel");
  const maxEl = $("statMaxLevel");
  const avgEl = $("statAvgLevel");
  const cntEl = $("statSamplesCount");
  const minNote = $("statMinNote");
  const maxNote = $("statMaxNote");

  if (points.length === 0) {
    if (minEl) minEl.textContent = "—%";
    if (maxEl) maxEl.textContent = "—%";
    if (avgEl) avgEl.textContent = "—%";
    if (cntEl) cntEl.textContent = "0";
    if (minNote) minNote.textContent = "Нет данных за период";
    if (maxNote) maxNote.textContent = "Нет данных за период";
  } else {
    let minPoint = points[0];
    let maxPoint = points[0];
    let sum = 0;
    points.forEach((p) => {
      if (p.value < minPoint.value) minPoint = p;
      if (p.value > maxPoint.value) maxPoint = p;
      sum += p.value;
    });
    const avg = sum / points.length;
    if (minEl) minEl.textContent = `${Math.round(minPoint.value)}%`;
    if (maxEl) maxEl.textContent = `${Math.round(maxPoint.value)}%`;
    if (avgEl) avgEl.textContent = `${avg.toFixed(1)}%`;
    if (cntEl) cntEl.textContent = String(points.length);
    if (minNote) minNote.textContent = `${minPoint.station_id} · ${minPoint.time}`;
    if (maxNote) maxNote.textContent = `${maxPoint.station_id} · ${maxPoint.time}`;
  }

  renderWaterLevelSvgChart(points, sourceMode);
}

function createSvgElement(tag, attrs = {}) {
  const el = document.createElementNS("http://www.w3.org/2000/svg", tag);
  Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, String(v)));
  return el;
}

function renderWaterLevelSvgChart(points, sourceMode) {
  const svg = $("arduinoChartSvg");
  if (!svg) return;
  svg.replaceChildren();

  const width = 820;
  const height = 240;
  const padLeft = 46;
  const padRight = 22;
  const padTop = 20;
  const padBottom = 34;
  const plotW = width - padLeft - padRight;
  const plotH = height - padTop - padBottom;

  const { warn, alarm } = getThresholds();
  const yForVal = (v) => padTop + plotH - (Math.max(0, Math.min(100, v)) / 100) * plotH;

  // Defs for area gradient
  const defs = createSvgElement("defs");
  const grad = createSvgElement("linearGradient", {
    id: "waterChartGrad",
    x1: "0",
    y1: "0",
    x2: "0",
    y2: "1",
  });
  const stop1 = createSvgElement("stop", {
    offset: "0%",
    "stop-color": sourceMode === "demo" ? "#a855f7" : "#25b8f2",
    "stop-opacity": "0.38",
  });
  const stop2 = createSvgElement("stop", {
    offset: "100%",
    "stop-color": sourceMode === "demo" ? "#a855f7" : "#25b8f2",
    "stop-opacity": "0.02",
  });
  grad.append(stop1, stop2);
  defs.append(grad);
  svg.append(defs);

  // Horizontal grid lines (0%, 25%, 50%, 75%, 100%)
  [0, 25, 50, 75, 100].forEach((val) => {
    const y = yForVal(val);
    const line = createSvgElement("line", {
      x1: padLeft,
      y1: y,
      x2: width - padRight,
      y2: y,
      stroke: "currentColor",
      "stroke-opacity": "0.12",
      "stroke-width": "1",
    });
    const label = createSvgElement("text", {
      x: padLeft - 8,
      y: y + 4,
      "text-anchor": "end",
      fill: "currentColor",
      opacity: "0.65",
      "font-size": "10",
    });
    label.textContent = `${val}%`;
    svg.append(line, label);
  });

  // Threshold dashed lines (Warning & Alarm)
  const yWarn = yForVal(warn);
  const warnLine = createSvgElement("line", {
    x1: padLeft,
    y1: yWarn,
    x2: width - padRight,
    y2: yWarn,
    stroke: "#f59e0b",
    "stroke-width": "1.3",
    "stroke-dasharray": "5,4",
  });
  const warnTxt = createSvgElement("text", {
    x: width - padRight - 4,
    y: Math.max(12, yWarn - 4),
    "text-anchor": "end",
    fill: "#fbbf24",
    "font-size": "10",
    "font-weight": "700",
  });
  warnTxt.textContent = `Предупреждение ${warn}%`;

  const yAlarm = yForVal(alarm);
  const alarmLine = createSvgElement("line", {
    x1: padLeft,
    y1: yAlarm,
    x2: width - padRight,
    y2: yAlarm,
    stroke: "#ef4444",
    "stroke-width": "1.5",
    "stroke-dasharray": "6,4",
  });
  const alarmTxt = createSvgElement("text", {
    x: width - padRight - 4,
    y: Math.max(12, yAlarm - 4),
    "text-anchor": "end",
    fill: "#f87171",
    "font-size": "10",
    "font-weight": "700",
  });
  alarmTxt.textContent = `Тревога ${alarm}%`;
  svg.append(warnLine, warnTxt, alarmLine, alarmTxt);

  if (points.length === 0) {
    const emptyText = createSvgElement("text", {
      x: width / 2,
      y: height / 2 + 4,
      "text-anchor": "middle",
      fill: "currentColor",
      opacity: "0.6",
      "font-size": "13",
    });
    emptyText.textContent =
      sourceMode === "real"
        ? "Нет реальных показаний Arduino за выбранный период (переключитесь на Демо или подключите датчик)"
        : "Нет тестовых данных за выбранный период";
    svg.append(emptyText);
    return;
  }

  // Limit plotted points to max 120 evenly sampled / recent points for crisp rendering
  const displayPoints =
    points.length > 120
      ? points.filter((_, idx) => idx % Math.ceil(points.length / 120) === 0 || idx === points.length - 1)
      : points;

  const xForIndex = (i) =>
    displayPoints.length === 1
      ? padLeft + plotW / 2
      : padLeft + (i / (displayPoints.length - 1)) * plotW;

  const coords = displayPoints.map((p, i) => ({
    x: xForIndex(i),
    y: yForVal(p.value),
    point: p,
  }));

  if (coords.length > 1) {
    const polyPoints = coords.map((c) => `${c.x.toFixed(1)},${c.y.toFixed(1)}`).join(" ");
    const areaPoints =
      `${coords[0].x.toFixed(1)},${(padTop + plotH).toFixed(1)} ` +
      polyPoints +
      ` ${coords[coords.length - 1].x.toFixed(1)},${(padTop + plotH).toFixed(1)}`;

    const polygon = createSvgElement("polygon", {
      points: areaPoints,
      fill: "url(#waterChartGrad)",
    });
    const polyline = createSvgElement("polyline", {
      points: polyPoints,
      fill: "none",
      stroke: sourceMode === "demo" ? "#a855f7" : "#25b8f2",
      "stroke-width": "2.6",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
    });
    svg.append(polygon, polyline);
  }

  // Time axis labels (start, middle, end)
  const labelIndices =
    coords.length === 1
      ? [0]
      : coords.length === 2
        ? [0, 1]
        : [0, Math.floor((coords.length - 1) / 2), coords.length - 1];

  labelIndices.forEach((idx) => {
    const c = coords[idx];
    const tLabel = createSvgElement("text", {
      x: c.x,
      y: height - 10,
      "text-anchor": idx === 0 ? "start" : idx === coords.length - 1 ? "end" : "middle",
      fill: "currentColor",
      opacity: "0.7",
      "font-size": "10",
    });
    tLabel.textContent = `${c.point.date.slice(0, 5)} ${c.point.time}`;
    svg.append(tLabel);
  });

  // Plot interactive points
  coords.forEach((c) => {
    const dotColor =
      c.point.status === "alarm"
        ? "#ef4444"
        : c.point.status === "warning"
          ? "#f59e0b"
          : "#10b981";
    const circle = createSvgElement("circle", {
      cx: c.x.toFixed(1),
      cy: c.y.toFixed(1),
      r: coords.length > 50 ? "3.2" : "4.5",
      fill: dotColor,
      stroke: "#091524",
      "stroke-width": "1.5",
      style: "cursor:pointer",
    });

    const tooltipText = `${c.point.date} ${c.point.time} · Станция: ${c.point.station_id} · Уровень: ${Math.round(c.point.value)}% (${getStatusLabel(c.point.status)})`;
    const titleEl = createSvgElement("title");
    titleEl.textContent = tooltipText;
    circle.append(titleEl);

    circle.addEventListener("mouseenter", () => {
      if ($("chartHoverInfo")) $("chartHoverInfo").textContent = tooltipText;
    });
    circle.addEventListener("click", () => {
      if ($("chartHoverInfo")) $("chartHoverInfo").textContent = tooltipText;
    });

    svg.append(circle);
  });
}

// --- Web Serial API Connection & Disconnection ---
async function connectFloodArduino() {
  if (isConnectingSerial || floodPort) return;

  if (!("serial" in navigator)) {
    checkSerialEnvironment();
    setFloodUi(
      "offline",
      null,
      "Браузер не поддерживает Web Serial API",
      "Откройте сайт в настольном Google Chrome или Microsoft Edge (через http://localhost при локальном запуске).",
    );
    return;
  }

  stopSimAutoStream();
  isConnectingSerial = true;
  if ($("arduinoConnect")) $("arduinoConnect").disabled = true;

  try {
    const selectedPort = await navigator.serial.requestPort();
    await selectedPort.open({ baudRate: 9600 });

    floodPort = selectedPort;
    floodStopRequested = false;
    floodSensorState = "connected";
    isDataStale = false;
    lastPacketTimestamp = Date.now();
    startFreshnessWatchdog();

    if ($("arduinoConnect")) $("arduinoConnect").disabled = true;
    if ($("arduinoDisconnect")) $("arduinoDisconnect").disabled = false;
    if ($("arduinoPortInfo")) $("arduinoPortInfo").textContent = "Порт открыт: 9600 бод · ожидание строк JSON";

    updateTelemetryCards();
    setFloodUi(
      "normal",
      null,
      "Arduino подключена — ожидание первого пакета данных",
      "Убедитесь, что скетч Arduino отправляет строки JSON на скорости 9600 бод.",
    );

    const decoder = new TextDecoder("utf-8");
    let buffer = "";
    floodReader = floodPort.readable.getReader();

    floodReadTask = (async () => {
      try {
        while (!floodStopRequested && floodPort) {
          const { value, done } = await floodReader.read();
          if (done) break;
          if (!value) continue;

          buffer += decoder.decode(value, { stream: true });
          if (buffer.length > 8192) {
            buffer = buffer.slice(-2048);
          }

          let newlineIndex;
          while ((newlineIndex = buffer.indexOf("\n")) >= 0) {
            const rawLine = buffer.slice(0, newlineIndex).trim();
            buffer = buffer.slice(newlineIndex + 1);
            if (!rawLine) continue;

            try {
              const parsed = JSON.parse(rawLine);
              handleFloodReading(parsed, { isSim: false });
            } catch (parseErr) {
              floodSensorState = "error";
              updateTelemetryCards();
              setFloodUi(
                "warning",
                null,
                "Ошибка чтения строки JSON от Arduino",
                "Получена некорректная строка по Serial. Проверьте скорость 9600 бод и формат JSON в скетче.",
              );
              console.warn("Не удалось разобрать JSON-строку от Arduino:", rawLine, parseErr);
            }
          }
        }
      } catch (readError) {
        if (!floodStopRequested) {
          console.error("Ошибка чтения Serial-порта:", readError);
          floodSensorState = "error";
          stopAlarmRepeatTimer();
          updateTelemetryCards();
          setFloodUi(
            "warning",
            null,
            "Потеряно соединение с Arduino по USB",
            "Кабель USB был отключён или произошёл сбой COM-порта. Проверьте подключение и нажмите «Подключить Arduino».",
            { stale: true },
          );
        }
      } finally {
        try {
          if (floodReader) floodReader.releaseLock();
        } catch (_) {}
        floodReader = null;
      }
    })();
  } catch (error) {
    console.error("Ошибка подключения к Arduino:", error);
    floodPort = null;
    floodReader = null;
    floodReadTask = null;
    floodSensorState = error && error.name === "NotFoundError" ? "disconnected" : "error";
    updateTelemetryCards();

    let humanMsg = "Проверьте USB-кабель и убедитесь, что порт не занят другой программой.";
    if (error && error.name === "NotFoundError") {
      humanMsg = "Вы не выбрали COM-порт в диалоговом окне браузера.";
    } else if (error && (error.name === "InvalidStateError" || error.name === "NetworkError" || /open|busy|access/i.test(error.message || ""))) {
      humanMsg = "Не удалось открыть COM-порт. Закройте Монитор порта в Arduino IDE или другие программы, использующие этот порт, и попробуйте снова.";
    } else if (error && error.name === "SecurityError") {
      humanMsg = "Доступ к USB Serial заблокирован политикой безопасности. Откройте сайт через http://localhost.";
      checkSerialEnvironment();
    }

    setFloodUi("offline", null, "Не удалось подключить Arduino", humanMsg);
    if ($("arduinoConnect")) $("arduinoConnect").disabled = false;
    if ($("arduinoDisconnect")) $("arduinoDisconnect").disabled = true;
  } finally {
    isConnectingSerial = false;
  }
}

async function disconnectFloodArduino(reasonTitle, reasonDetail) {
  floodStopRequested = true;
  stopAlarmRepeatTimer();
  stopFreshnessWatchdog();

  try {
    if (floodReader) await floodReader.cancel();
  } catch (_) {}
  try {
    if (floodReadTask) await floodReadTask;
  } catch (_) {}
  try {
    if (floodPort) await floodPort.close();
  } catch (_) {}

  floodPort = null;
  floodReader = null;
  floodReadTask = null;
  floodLastStatus = "offline";
  floodSensorState = "disconnected";
  isDataStale = false;
  lastPacketTimestamp = 0;

  if ($("arduinoConnect")) $("arduinoConnect").disabled = false;
  if ($("arduinoDisconnect")) $("arduinoDisconnect").disabled = true;
  if ($("arduinoPortInfo")) $("arduinoPortInfo").textContent = "Порт: отключён (9600 бод)";
  if ($("arduinoDataAge")) $("arduinoDataAge").textContent = "Свежесть данных: отключён";

  updateTelemetryCards();
  setFloodUi(
    "offline",
    null,
    reasonTitle || "Отключено от Arduino",
    reasonDetail || "Подключите устройство по USB, чтобы возобновить мониторинг уровня воды.",
    { resetMeter: true },
  );
}

// --- Test / Simulator Bench Functions (Isolated from Real History) ---
function stopSimAutoStream() {
  if (simAutoTimer !== null) {
    clearInterval(simAutoTimer);
    simAutoTimer = null;
    if ($("simAutoToggleBtn")) {
      $("simAutoToggleBtn").textContent = "▶ Запустить авто-поток (тест)";
    }
  }
}

function sendSimulatedPacket(value) {
  if (floodPort) {
    alert("Сейчас активно реальное USB-подключение Arduino. Отключите его перед запуском тестового сценария.");
    return;
  }
  const stSelect = $("simStationSelect");
  const station_id = stSelect ? stSelect.value : "dam_01";
  if ($("analyticsSourceSelect") && $("analyticsSourceSelect").value !== "demo") {
    $("analyticsSourceSelect").value = "demo";
  }
  handleFloodReading(
    {
      station_id,
      parameter: "water_level",
      value: Number(value),
      unit: "%",
    },
    { isSim: true },
  );
}

function updateArduinoLocale() {
  updateMuteButtonUi();
  updateTelemetryCards();
  renderHistoryTable();
  renderAnalyticsAndChart();
}

// --- Event Listeners & Initialization ---
$("arduinoConnect").addEventListener("click", connectFloodArduino);
$("arduinoDisconnect").addEventListener("click", () => {
  disconnectFloodArduino();
});

$("arduinoMuteBtn").addEventListener("click", () => {
  isAudioMuted = !isAudioMuted;
  if (isAudioMuted) {
    stopAlarmRepeatTimer();
  } else if (floodLastStatus === "alarm" && !isDataStale && floodSensorState !== "disconnected") {
    playFloodBeep("alarm");
    startAlarmRepeatTimer();
  }
  updateMuteButtonUi();
  saveSettings();
});

function handleThresholdInputChange() {
  syncThresholdUi();
  saveSettings();
  if (lastValidReading && !isDataStale && floodSensorState !== "disconnected") {
    handleFloodReading(
      {
        station_id: lastValidReading.station_id,
        parameter: "water_level",
        value: lastValidReading.value,
        unit: lastValidReading.unit,
      },
      { isSim: Boolean(lastValidReading.isSim) },
    );
  }
  renderAnalyticsAndChart();
}

$("alarmThreshold").addEventListener("change", handleThresholdInputChange);
$("warningThreshold").addEventListener("change", handleThresholdInputChange);
$("historyInterval").addEventListener("change", saveSettings);

$("historyStationFilter").addEventListener("change", renderHistoryTable);
$("historyStatusFilter").addEventListener("change", renderHistoryTable);
$("exportCsvBtn").addEventListener("click", exportHistoryToCsv);

$("clearHistoryBtn").addEventListener("click", () => {
  if (!realHistory.length) {
    alert("История показаний Arduino уже пуста.");
    return;
  }
  const bar = $("historyConfirmBar");
  if (bar) bar.hidden = false;
});

$("confirmClearYesBtn").addEventListener("click", clearRealHistoryConfirmed);
$("confirmClearNoBtn").addEventListener("click", () => {
  if ($("historyConfirmBar")) $("historyConfirmBar").hidden = true;
});

$("analyticsSourceSelect").addEventListener("change", renderAnalyticsAndChart);
$("analyticsStationSelect").addEventListener("change", renderAnalyticsAndChart);
$("analyticsPeriodSelect").addEventListener("change", renderAnalyticsAndChart);

// Simulator buttons
document.querySelectorAll("[data-sim-val]").forEach((btn) => {
  btn.addEventListener("click", () => {
    const val = Number(btn.getAttribute("data-sim-val"));
    sendSimulatedPacket(val);
  });
});

$("simAutoToggleBtn").addEventListener("click", () => {
  if (floodPort) {
    alert("Отключите реальную Arduino перед запуском тестового авто-потока.");
    return;
  }
  if (simAutoTimer !== null) {
    stopSimAutoStream();
    return;
  }
  const sequence = [32, 45, 49, 50, 64, 79, 80, 92, 84, 58, 42];
  let idx = 0;
  $("simAutoToggleBtn").textContent = "⏹ Остановить авто-поток (тест)";
  sendSimulatedPacket(sequence[idx]);
  simAutoTimer = setInterval(() => {
    idx = (idx + 1) % sequence.length;
    sendSimulatedPacket(sequence[idx]);
  }, 1500);
});

$("simTimeoutTestBtn").addEventListener("click", () => {
  stopSimAutoStream();
  sendSimulatedPacket(46);
  if ($("arduinoAlertText")) {
    $("arduinoAlertText").textContent =
      "Тест потери сигнала запущен: подача пакетов остановлена, через 5 секунд сработает защита от устаревших данных...";
  }
});

$("simBadJsonTestBtn").addEventListener("click", () => {
  stopSimAutoStream();
  handleFloodReading({ station_id: "dam_01", parameter: "water_level", value: 145, unit: "%" }, { isSim: true });
});

$("simResetBtn").addEventListener("click", () => {
  stopSimAutoStream();
  disconnectFloodArduino("Тестовый режим сброшен", "Подключите Arduino по USB или выберите тестовый сценарий.");
});

if ("serial" in navigator) {
  navigator.serial.addEventListener("disconnect", (event) => {
    if (floodPort && (!event.port || event.port === floodPort)) {
      disconnectFloodArduino(
        "USB-устройство Arduino отключено",
        "Физическое соединение с датчиком прервано. Проверьте кабель и подключите заново.",
      );
    }
  });
}

window.addEventListener("beforeunload", () => {
  closeAudioResources();
});

// Initialize all modules
checkSerialEnvironment();
loadSettings();
loadRealHistory();
seedInitialDemoAnalyticsData();
refreshStationFilterOptions();
renderHistoryTable();
renderAnalyticsAndChart();
renderMapMarkers();
renderSidebar();
setLang("ru");
