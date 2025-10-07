import React, { createContext, useContext, useMemo, useState } from "react";
import { DarkTheme, LightTheme } from "./Themes/Themes";

const ThemeContext = createContext();

export const Buildstrap = ({ children, customThemes }) => {
  const [isDark, setIsDark] = useState(false);
  const toggleTheme = () => setIsDark((prev) => !prev);

  const theme = useMemo(() => {
    // Fallback pros seus temas base
    const baseDark = DarkTheme;
    const baseLight = LightTheme;

    // Caso o usuário tenha passado temas customizados
    const userDark = customThemes?.dark || {};
    const userLight = customThemes?.light || {};

    // Faz merge entre seus temas e os do usuário
    const mergedDark = { ...baseDark, ...userDark };
    const mergedLight = { ...baseLight, ...userLight };

    // Retorna o tema final
    return isDark ? mergedDark : mergedLight;
  }, [isDark, customThemes]);
  return (
    <ThemeContext.Provider value={{ theme, isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
