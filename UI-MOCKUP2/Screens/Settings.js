import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  useColorScheme,
} from "react-native";
import React from "react";
import Toggle from "../Components/Toggle";
import { useTheme } from "../Context/ThemeContext";

const Settings = ({ navigation }) => {
  const { isDark } = useTheme();
  const styles = isDark ? darkStyles : lightStyles;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subContainer}>
        <View style={styles.settingsHeader}>
          <Text style={styles.text}>Settings</Text>
        </View>

        <View style={styles.settingsListContainer}>
          <View style={styles.settingsList}>
            <Text style={styles.text1}>Language</Text>
            <Image
              style={styles.settingsIcon}
              source={require("../assets/icons8-right-arrow-100.png")}
            />
          </View>
          <View style={styles.settingsList}>
            <Text style={styles.text1}>My Profile</Text>
            <Image
              style={styles.settingsIcon}
              source={require("../assets/icons8-right-arrow-100.png")}
            />
          </View>
          <View style={styles.settingsList}>
            <Text style={styles.text1}>Contact Us</Text>
            <Image
              style={styles.settingsIcon}
              source={require("../assets/icons8-right-arrow-100.png")}
            />
          </View>
          <View style={styles.settingsList}>
            <Text style={styles.text1}>Change Password</Text>
            <Image
              style={styles.settingsIcon}
              source={require("../assets/icons8-right-arrow-100.png")}
            />
          </View>
          <View style={styles.settingsList}>
            <Text style={styles.text1}>Privacy Policy</Text>
            <Image
              style={styles.settingsIcon}
              source={require("../assets/icons8-right-arrow-100.png")}
            />
          </View>

          <View style={styles.settingsTheme}>
            <Text style={styles.text1}>Theme</Text>
            <Toggle />
          </View>
        </View>

        {/* Bottom Navigation */}
        <View style={styles.bottomNavigation}>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Image style={styles.home} source={require("../assets/home.png")} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Image
              style={styles.homeIcon}
              source={require("../assets/myCards.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Image
              style={styles.homeIcon}
              source={require("../assets/pie.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
            <Image
              style={styles.homeIcon}
              source={require("../assets/settingsActive.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Settings;

const lightStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  subContainer: {
    padding: 20,
    justifyContent: "space-between",
    alignItems: "flex-start",
    height: "100%",
    gap: 20,
  },
  settingsHeader: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  settingsListContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    width: "100%",
    gap: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
  },
  text1: {
    fontSize: 15,
    fontWeight: "500",
    color: "#000",
  },
  settingsList: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    borderBottomWidth: 0.5,
    borderColor: "gray",
    padding: 10,
  },
  settingsTheme: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    padding: 10,
  },
  settingsIcon: {
    width: 20,
    height: 20,
  },
  homeIcon: {
    height: 25,
    width: 25,
  },
  bottomNavigation: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    padding: 20,
    top: 28,
  },
  home: {
    height: 30,
    width: 30,
    resizeMode: "contain",
  },
});

const darkStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  subContainer: {
    padding: 20,
    justifyContent: "space-between",
    alignItems: "flex-start",
    height: "100%",
    gap: 20,
  },
  settingsHeader: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  settingsListContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    width: "100%",
    gap: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  text1: {
    fontSize: 15,
    fontWeight: "500",
    color: "#fff",
  },
  settingsList: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    borderBottomWidth: 0.5,
    borderColor: "gray",
    padding: 10,
  },
  settingsTheme: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    padding: 10,
  },
  settingsIcon: {
    width: 20,
    height: 20,
  },
  homeIcon: {
    height: 25,
    width: 25,
  },
  bottomNavigation: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    padding: 20,
    top: 28,
  },
  home: {
    height: 30,
    width: 30,
    resizeMode: "contain",
  },
});
