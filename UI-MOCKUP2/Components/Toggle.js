import React from "react";
import { Switch } from "react-native";
import { useTheme } from "../Context/ThemeContext";

const Toggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <Switch
      trackColor={{ false: "#767577", true: "green" }}
      thumbColor={isDark ? "white" : "#f4f3f4"}
      ios_backgroundColor="#3e3e3e"
      onValueChange={toggleTheme}
      value={isDark}
    />
  );
};

export default Toggle;
