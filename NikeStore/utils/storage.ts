import AsyncStorage from "@react-native-async-storage/async-storage";

const THEME_KEY = "@theme";
const ONBOARDING_KEY = "@onboarding";

export const saveTheme = async (theme: "light" | "dark") => {
  await AsyncStorage.setItem(THEME_KEY, theme);
};

export const getTheme = async (): Promise<"light" | "dark"> => {
  const theme = await AsyncStorage.getItem(THEME_KEY);

  return theme === "dark" ? "dark" : "light";
};

export const completeOnboarding = async () => {
  await AsyncStorage.setItem(ONBOARDING_KEY, "true");
};

export const isOnboardingCompleted = async () => {
  const value = await AsyncStorage.getItem(ONBOARDING_KEY);

  return value === "true";
};