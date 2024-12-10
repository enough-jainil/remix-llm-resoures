import { Sun, Moon } from "lucide-react";
import { useTheme } from "~/context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full transition-colors duration-200
        dark:bg-zinc-800/50 dark:hover:bg-zinc-700/50 dark:text-zinc-400 dark:hover:text-white
        bg-zinc-100 hover:bg-zinc-200 text-zinc-600 hover:text-zinc-800
        border dark:border-zinc-700/50 border-zinc-200"
    >
      {theme === "dark" ? (
        <Sun className="w-5 h-5" />
      ) : (
        <Moon className="w-5 h-5" />
      )}
    </button>
  );
}
