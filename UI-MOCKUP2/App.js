import React from "react";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import StackNavigator from "./Components/StackNavigator";
import { ThemeProvider, useTheme } from "./Context/ThemeContext";

const App = () => {
  return (
    <ThemeProvider>
      <MainApp />
    </ThemeProvider>
  );
};

const MainApp = () => {
  const { isDark } = useTheme();

  const lightTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: "#fff",
      text: "#000",
    },
  };

  const darkTheme = {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      background: "#000",
      text: "#fff",
    },
  };

  return (
    <NavigationContainer theme={isDark ? darkTheme : lightTheme}>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default App;
