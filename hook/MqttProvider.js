import React, { createContext, useContext, useEffect, useMemo, useRef, useState } from "react";
// Remova import fixo se quiser forçar clientFactory, mas deixamos como fallback opcional:
let defaultMqttLib = null;
try {
  defaultMqttLib = require("mqtt/dist/mqtt");
} catch (_) {
  // silencioso: só será problema se não vier clientFactory
}

const MQTTContext = createContext(null);

export const MQTTProvider = ({
  children,
  mqttConfig = {},
}) => {
  // --- validação de config obrigatória ---
  if (!mqttConfig || typeof mqttConfig !== "object") {
    throw new Error("MQTTProvider: 'mqttConfig' é obrigatório e deve ser um objeto.");
  }
  const {
    url,
    topics,
    options = {},
    clientFactory, // função opcional para injetar outra lib
    maxMessages = 100,      // novo: limite de buffer
    parseJson = true,       // novo: tenta JSON.parse
    onMessage,              // novo: callback opcional (msgObj)
  } = mqttConfig;

  if (!url || typeof url !== "string") {
    throw new Error("MQTTProvider: 'url' (string) é obrigatório em mqttConfig.");
  }
  if (!topics || ( !Array.isArray(topics) && typeof topics !== "string")) {
    throw new Error("MQTTProvider: 'topics' deve ser string ou array de strings.");
  }

  const normTopics = Array.isArray(topics) ? topics : [topics];

  const clientRef = useRef(null);
  const [isConnected, setIsConnected] = useState(false);
  const [messages, setMessages] = useState([]); // [{ topic, text, json, ts }]
  const [sensorData, setSensorData] = useState({ temperatura: null, umidade: null, raw: null });
  const [mqttError, setMqttError] = useState(null);

  // Normaliza client
  const normalizeClient = (client) => {
    const on = (ev, h) => {
      if (client.on) client.on(ev, h);
      else if (client.addEventListener) client.addEventListener(ev, h);
    };
    const off = (ev, h) => {
      if (client.off) client.off(ev, h);
      else if (client.removeListener) client.removeListener(ev, h);
      else if (client.removeEventListener) client.removeEventListener(ev, h);
    };
    const subscribe = (t, opts) => {
      if (Array.isArray(t)) return t.forEach(tt => subscribe(tt, opts));
      if (client.subscribe) client.subscribe(t, opts);
    };
    const publish = (t, payload, opts) => {
      const msg = typeof payload === "string" ? payload : JSON.stringify(payload);
      if (client.publish) client.publish(t, msg, opts);
    };
    const end = () => {
      if (client.end) client.end(true);
      else if (client.disconnect) client.disconnect();
      else if (client.close) client.close();
    };
    return { raw: client, on, off, subscribe, publish, end };
  };

  const connectClient = () => {
    if (clientRef.current) return clientRef.current;
    let baseClient;
    try {
      baseClient = clientFactory
        ? clientFactory({ url, options })
        : (defaultMqttLib
            ? defaultMqttLib.connect(url, options)
            : (() => { throw new Error("Nenhuma lib MQTT disponível e 'clientFactory' não foi fornecido."); })());
    } catch (err) {
      setMqttError(err);
      console.error("Erro ao criar cliente MQTT:", err);
      return null;
    }
    clientRef.current = normalizeClient(baseClient);
    return clientRef.current;
  };

  const updateSensorData = (temperatura, umidade, raw) => {
    setSensorData({ temperatura, umidade, raw });
  };

  useEffect(() => {
    const client = connectClient();
    if (!client) return;

    const handleConnect = () => {
      setIsConnected(true);
      client.subscribe(normTopics);
    };

    const pushMessage = (msgObj) => {
      setMessages(prev => {
        const next = [...prev, msgObj];
        if (next.length > maxMessages) next.splice(0, next.length - maxMessages);
        return next;
      });
      if (typeof onMessage === "function") {
        try { onMessage(msgObj); } catch (e) { console.warn("onMessage callback error:", e); }
      }
    };

    const handleMessage = (topic, message) => {
      let text;
      try {
        text = message?.toString ? message.toString() : String(message);
      } catch {
        text = "";
      }
      let json = null;
      if (parseJson) {
        try { json = JSON.parse(text); } catch {}
      }
      pushMessage({ topic, text, json, ts: Date.now() });
      try {
        const data = JSON.parse(text);
        if (typeof data.temperatura === "number" || typeof data.umidade === "number") {
          updateSensorData(
            typeof data.temperatura === "number" ? data.temperatura : null,
            typeof data.umidade === "number" ? data.umidade : null,
            data
          );
        } else {
          setSensorData(s => ({ ...s, raw: data }));
        }
      } catch (e) {
        // mantém último válido; apenas log opcional
      }
    };

    const handleClose = () => setIsConnected(false);
    const handleError = (err) => {
      setIsConnected(false);
      setMqttError(err);
    };

    client.on("connect", handleConnect);
    client.on("message", handleMessage);
    client.on("close", handleClose);
    client.on("error", handleError);

    return () => {
      client.off("connect", handleConnect);
      client.off("message", handleMessage);
      client.off("close", handleClose);
      client.off("error", handleError);
      client.end();
      clientRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url, JSON.stringify(normTopics), JSON.stringify(options), !!clientFactory, maxMessages, parseJson, onMessage]);

  const api = useMemo(() => ({
    isConnected,
    messages,
    lastMessage: messages[messages.length - 1] || null,
    sensorData,
    mqttError,
    publish: (topic, payload, opts) => {
      const msg = typeof payload === "string" ? payload : JSON.stringify(payload);
      clientRef.current?.publish(topic, msg, opts);
    },
    subscribe: (t, opts) => clientRef.current?.subscribe(t, opts),
    clearMessages: () => setMessages([]),
    disconnect: () => clientRef.current?.end(),
    client: clientRef.current?.raw,
  }), [isConnected, messages, sensorData, mqttError]);

  return <MQTTContext.Provider value={api}>{children}</MQTTContext.Provider>;
};

export const useMQTT = () => {
  const ctx = useContext(MQTTContext);
  if (!ctx) throw new Error("useMQTT deve ser usado dentro de MQTTProvider");
  return ctx;
};
