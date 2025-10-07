import React, { createContext, useContext, useMemo, useState } from "react";
import { DarkTheme, LightTheme } from "./Themes/Themes";

const ThemeContext = createContext();

export const Buildstrap = ({ children, customTheme }) => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => setIsDark((prev) => !prev);

  const theme = useMemo(() => {
    // Prioriza o tema customizado se ele for fornecido
    if (customTheme) return customTheme;
    return isDark ? DarkTheme : LightTheme;
  }, [isDark, customTheme]);
  return (
    <ThemeContext.Provider value={{ theme, isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
