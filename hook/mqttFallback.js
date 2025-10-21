// hook/mqttFallback.js
let mqtt;

try {
  mqtt = require("mqtt/dist/mqtt");
  console.log("📦 MQTT real carregado com sucesso!");
} catch (err) {
  console.warn("mqtt.js não encontrado:", err?.message);
}

export default mqtt;
