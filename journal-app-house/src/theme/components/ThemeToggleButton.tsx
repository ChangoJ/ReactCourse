import { Icon } from "@iconify/react";
import { useTheme } from "../context/ThemeContext";

export const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center justify-center p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-foreground"
      title={theme === "light" ? "Cambiar a modo oscuro" : "Cambiar a modo claro"}
    >
      {theme === "light" ? (
        <Icon icon="solar:moon-bold" className="w-6 h-6" />
      ) : (
        <Icon icon="solar:sun-bold" className="w-6 h-6" />
      )}
    </button>
  );
};