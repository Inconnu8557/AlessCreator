import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Monitor } from "lucide-react";

type Theme = "light" | "dark" | "system";

const themes: { value: Theme; icon: JSX.Element; label: string }[] = [
    {
        value: "light",
        icon: <Sun className="w-4 h-4" />,
        label: "Clair"
    },
    {
        value: "dark",
        icon: <Moon className="w-4 h-4" />,
        label: "Sombre"
    },
    {
        value: "system",
        icon: <Monitor className="w-4 h-4" />,
        label: "Système"
    }
];

const ThemeToggle = () => {
    const [theme, setTheme] = useState<Theme>(() => {
        if (typeof window !== "undefined") {
            return (localStorage.getItem("theme") as Theme) || "system";
        }
        return "system";
    });
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleSystemThemeChange = (e: MediaQueryListEvent) => {
            if (theme === "system") {
                document.documentElement.setAttribute(
                    "data-theme",
                    e.matches ? "dark" : "light"
                );
            }
        };

        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
        mediaQuery.addListener(handleSystemThemeChange);

        // Appliquer le thème initial
        if (theme === "system") {
            document.documentElement.setAttribute(
                "data-theme",
                mediaQuery.matches ? "dark" : "light"
            );
        } else {
            document.documentElement.setAttribute("data-theme", theme);
        }

        localStorage.setItem("theme", theme);

        return () => mediaQuery.removeListener(handleSystemThemeChange);
    }, [theme]);

    const currentTheme = themes.find((t) => t.value === theme);

    return (
        <div className="relative">
            <motion.button
                className="flex items-center gap-2 px-3 py-2 transition-colors rounded-lg hover:bg-base-200"
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                {currentTheme?.icon}
                <span className="text-sm">{currentTheme?.label}</span>
            </motion.button>

            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-40"
                            onClick={() => setIsOpen(false)}
                        />
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="absolute right-0 z-50 p-2 mt-2 bg-base-200 border rounded-xl shadow-lg w-36"
                        >
                            {themes.map((t) => (
                                <motion.button
                                    key={t.value}
                                    className={`flex items-center w-full gap-2 px-3 py-2 text-sm rounded-lg transition-colors ${
                                        theme === t.value
                                            ? "bg-accent text-white"
                                            : "hover:bg-base-300"
                                    }`}
                                    onClick={() => {
                                        setTheme(t.value);
                                        setIsOpen(false);
                                    }}
                                    whileHover={{ x: 5 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {t.icon}
                                    {t.label}
                                </motion.button>
                            ))}
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
};

export default ThemeToggle; 