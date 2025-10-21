import React, { createContext, useContext, useEffect, useState } from "react";

let mqttLib = null;

try {
  // Tenta carregar o mqtt.js (tanto web quanto native)
  mqttLib = require("mqtt");
  if (mqttLib?.default?.connect) mqttLib = mqttLib.default;
  console.log("📦 MQTT carregado com sucesso!");
} catch (error) {
  console.warn("⚙️ Modo simulado — mqtt.js não encontrado:", error?.message);
}

const MqttContext = createContext(null);

export const MqttProvider = ({ children, mqttConfig }) => {
  const [client, setClient] = useState(null);
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    if (!mqttLib) {
      console.warn("⚙️ MQTT.js não está disponível — modo simulado ativo.");
      return;
    }

    if (!mqttConfig?.brokerUrl) {
      console.warn("⚠️ Nenhum broker MQTT informado.");
      return;
    }

    console.log(`🔌 Tentando conectar a ${mqttConfig.brokerUrl}`);
    let clientInstance;

    try {
      clientInstance = mqttLib.connect(mqttConfig.brokerUrl, mqttConfig.options || {});
      setClient(clientInstance);

      clientInstance.on("connect", () => {
        setConnected(true);
        console.log("✅ Conectado ao broker MQTT!");

        if (mqttConfig?.topics?.length) {
          mqttConfig.topics.forEach((topic) => clientInstance.subscribe(topic));
        }
      });

      clientInstance.on("message", (topic, message) => {
        console.log(`📩 [${topic}] ${message.toString()}`);
      });

      clientInstance.on("error", (err) => {
        console.error("❌ Erro MQTT:", err.message);
        setConnected(false);
      });

      clientInstance.on("close", () => {
        console.warn("📴 Desconectado do broker MQTT.");
        setConnected(false);
      });
    } catch (err) {
      console.error("❌ Falha ao inicializar MQTT:", err);
      setConnected(false);
    }

    return () => {
      if (clientInstance) {
        clientInstance.end(true);
        console.log("🚪 Cliente MQTT encerrado.");
      }
    };
  }, [mqttConfig]);

  return (
    <MqttContext.Provider value={{ client, connected }}>
      {children}
    </MqttContext.Provider>
  );
};

export const useMqttContext = () => {
  const context = useContext(MqttContext);
  if (!context)
    throw new Error("useMqttContext deve ser usado dentro de um MqttProvider");
  return context;
};
