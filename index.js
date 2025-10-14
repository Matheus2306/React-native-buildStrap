import React from "react";
import { ThemeContextProvider } from "./hook/ThemeProvider";
import { MQTTProvider } from "./hook/MqttProvider";

export const Buildstrap = ({ children, customThemes, mqttConfig }) => {
  return (
    <ThemeContextProvider customThemes={customThemes}>
      {mqttConfig ? (
        <MQTTProvider mqttConfig={mqttConfig}>{children}</MQTTProvider>
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
