/*
 * Urpaq Monitor — Скетч датчика уровня воды для Arduino Uno / Nano
 * Скорость порта: 9600 бод
 * Формат вывода: JSON построчно
 * {"station_id":"dam_01","parameter":"water_level","value":42,"unit":"%"}
 */

const char* STATION_ID = "dam_01";
const int WATER_SENSOR_PIN = A0; // Аналоговый вход датчика уровня воды (например, HW-038)
const int LED_ALARM_PIN = 13;    // Встроенный светодиод для индикации тревоги (>= 80%)

const int ADC_DRY = 0;
const int ADC_FULL = 700;

void setup() {
  Serial.begin(9600);
  pinMode(WATER_SENSOR_PIN, INPUT);
  pinMode(LED_ALARM_PIN, OUTPUT);
}

void loop() {
  int rawAdc = analogRead(WATER_SENSOR_PIN);
  int levelPercent = map(rawAdc, ADC_DRY, ADC_FULL, 0, 100);
  levelPercent = constrain(levelPercent, 0, 100);

  digitalWrite(LED_ALARM_PIN, levelPercent >= 80 ? HIGH : LOW);

  Serial.print("{\"station_id\":\"");
  Serial.print(STATION_ID);
  Serial.print("\",\"parameter\":\"water_level\",\"value\":");
  Serial.print(levelPercent);
  Serial.println(",\"unit\":\"%\"}");

  delay(1000);
}
