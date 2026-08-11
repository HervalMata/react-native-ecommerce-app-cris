import { Stack } from "expo-router";

// @ts-ignore
import ThemeProvider from "../context/ThemeContext";

export default function RootLayout() {
    return (
        <ThemeProvider>
            <Stack
                screenOptions={{
                    headerShown: false,
                }}
            />
        </ThemeProvider>
    )
}
