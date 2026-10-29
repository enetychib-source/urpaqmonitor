const http = require('http');
const { Server } = require('socket.io');
const { SerialPort } = require('serialport');
const { ReadlineParser } = require('@serialport/parser-readline');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
  res.end('Urpaq Monitor Central Server is running!\n');
});

const io = new Server(server, { cors: { origin: '*' } });

// Настройки COM-порта (измените путь под вашу систему, например COM3 или /dev/ttyUSB0)
const PORT_PATH = process.env.ARDUINO_PORT || 'COM3';
const BAUD_RATE = 9600;

let serialPort = null;
let lastPacket = null;

function initSerial() {
  try {
    serialPort = new SerialPort({ path: PORT_PATH, baudRate: BAUD_RATE });
    const parser = serialPort.pipe(new ReadlineParser({ delimiter: '\n' }));

    serialPort.on('open', () => {
      console.log(`[Serial] Порт ${PORT_PATH} успешно открыт на скорости ${BAUD_RATE}`);
    });

    parser.on('data', (line) => {
      const cleanLine = line.trim();
      if (!cleanLine) return;
      try {
        const data = JSON.parse(cleanLine);
        lastPacket = data;
        // Рассылаем всем подключенным клиентам (браузерам)
        io.emit('arduino-data', data);
      } catch (err) {
        console.warn('[Serial] Не удалось распарсить JSON:', cleanLine);
      }
    });

    serialPort.on('error', (err) => {
      console.error('[Serial Error]:', err.message);
      setTimeout(initSerial, 5000);
    });
  } catch (err) {
    console.error('[Serial Init Error]:', err.message);
    setTimeout(initSerial, 5000);
  }
}

io.on('connection', (socket) => {
  console.log('[WebSocket] Новый клиент подключился:', socket.id);
  if (lastPacket) {
    socket.emit('arduino-data', lastPacket);
  }
  socket.on('disconnect', () => {
    console.log('[WebSocket] Клиент отключился:', socket.id);
  });
});

const HTTP_PORT = process.env.PORT || 3000;
server.listen(HTTP_PORT, () => {
  console.log(`🚀 Urpaq Monitor Server запущен на http://localhost:${HTTP_PORT}`);
  initSerial();
});
