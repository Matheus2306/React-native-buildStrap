import React, { createContext, useContext, useState } from "react";
import { DarkTheme, LightTheme } from "./Themes/Themes";

const ThemeContext = createContext();

export const Buildstrap = ({ children }) => {
  const [isDark, setIsDark] = useState(false);
  const toggleTheme = () => setIsDark((prev) => !prev);

 const theme = isDark ? DarkTheme : LightTheme

  return (
    <ThemeContext.Provider value={{ theme, isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
