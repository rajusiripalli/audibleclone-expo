import "../../global.css";
import { ClerkProvider } from "@clerk/clerk-expo";
import { tokenCache } from "@clerk/clerk-expo/token-cache";
import { Slot } from "expo-router";
import { ThemeProvider, DarkTheme } from "@react-navigation/native";

const theme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: "#010D1A",
    card: "#010D1A",
    primary: "white",
  },
};

export default function RootLayout() {
  return (
    <ThemeProvider value={theme}>
      <ClerkProvider tokenCache={tokenCache}>
        <Slot />
      </ClerkProvider>
    </ThemeProvider>
  );
}
