import React, { createContext, useContext, useMemo, useState } from "react";
import { DarkTheme, LightTheme } from "./Themes/Themes";

const ThemeContext = createContext();

export const ThemeProvider = ({ children, customThemes }) => {
  const [isDark, setIsDark] = useState(false);
  const toggleTheme = () => setIsDark((prev) => !prev);

  const theme = useMemo(() => {
    if (customThemes) {
      // Se o usuário passou temas customizados (ex: { light, dark })
      if (isDark && customThemes.dark) return customThemes.dark;
      if (!isDark && customThemes.light) return customThemes.light;
    }

    // fallback para os temas padrão
    return isDark ? defaultDarkTheme : defaultLightTheme;
  }, [isDark, customThemes]);
  return (
    <ThemeContext.Provider value={{ theme, isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
