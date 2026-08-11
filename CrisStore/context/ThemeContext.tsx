import React, {createContext, ReactNode, useEffect, useState} from "react";
import Colors , { LightColors } from "@/constants/Colors";

import { getTheme, saveTheme } from "@/utils/storage";

interface ThemeContextType {
    theme: "light" | "dark";
    colors: typeof LightColors;
    toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType);

export default function ThemeProvider({ children }: { children: ReactNode }) {
    const [theme, setTheme] = useState<"light" | "dark">("light");

    useEffect(() => {
        loadTheme()
    }, [])

    const loadTheme = async () => {
        const saved = await getTheme();

        setTheme(saved);
    }

    const toggleTheme = async () => {
        const newTheme = theme === "light" ? "dark" : "light";

        setTheme(newTheme);
        await saveTheme(newTheme);
    }

    return (
        <ThemeContext.Provider
            value={{
                theme,
                colors: theme === "light" ? Colors.light : Colors.dark, toggleTheme,
            }}
        >
            {children}
        </ThemeContext.Provider>
    )
}
