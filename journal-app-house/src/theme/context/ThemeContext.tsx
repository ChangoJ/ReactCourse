import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

// Definir el tipo del tema
type Theme = "light" | "dark";

// Definir la interfaz del contexto
interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}


const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Hook personalizado para usar el contexto
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme debe ser usado dentro de un ThemeProvider");
  }
  return context;
};

// Proveedor del tema
interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {

  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "dark" ? "dark" : "light";
  });


  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);


  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};