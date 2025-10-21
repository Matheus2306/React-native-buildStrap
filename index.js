import React from "react";
import { ThemeContextProvider } from "./hook/ThemeProvider";
import { MqttProvider } from "./hook/MQTTContext";

/**
 * Buildstrap — Core Provider
 * Integra tema e MQTT de forma opcional e inteligente.
 */
export const Buildstrap = ({ children, customThemes, mqttConfig }) => {
  const hasMqtt = mqttConfig && typeof mqttConfig === "object";

  return (
    <ThemeContextProvider customThemes={customThemes}>
      {hasMqtt ? (
        <MqttProvider mqttConfig={mqttConfig}>{children}</MqttProvider>
      ) : (
        children
      )}
    </ThemeContextProvider>
  );
};

// Reexporta a API pública do pacote
export { createStyles } from "./hook/CreateStyles";
export { DarkTheme, LightTheme } from "./Themes/Themes";
export { useTheme, ThemeContextProvider } from "./hook/ThemeProvider";
export { useMqttContext } from "./hook/MQTTContext";
