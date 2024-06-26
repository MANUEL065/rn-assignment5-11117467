import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Transaction } from "../Mock/Transaction";

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subContainer}>
        {/* Profile display */}
        <View style={styles.profile}>
          <View style={styles.profileDisplay}>
            <Image
              style={styles.profileIcon}
              source={require("../assets/profile.png")}
            />
            <View style={styles.profileText}>
              <Text style={[styles.greeting]}>Welcome Back</Text>
              <Text style={[styles.name]}>Eric Atsu</Text>
            </View>
          </View>

          <View style={styles.search}>
            <Image
              style={[styles.searchIcon]}
              source={require("../assets/icons8-search-480.png")}
            />
          </View>
        </View>

        {/* card */}
        <Image
          style={styles.cardImage}
          source={require("../assets/Card.png")}
        />

        {/* Transfer options */}
        <View style={styles.flatlistContainer}>
          <View style={styles.imageMainContainer}>
            <View style={[styles.imageContainer]}>
              <Image
                style={styles.transferIcon}
                source={require("../assets/up.png")}
              />
            </View>
            <Text>Sent</Text>
          </View>

          <View style={styles.imageMainContainer}>
            <View style={[styles.imageContainer]}>
              <Image
                style={styles.transferIcon}
                source={require("../assets/down.png")}
              />
            </View>
            <Text>Receive</Text>
          </View>
          <View style={styles.imageMainContainer}>
            <View style={[styles.imageContainer]}>
              <Image
                style={styles.transferIcon}
                source={require("../assets/dollar.png")}
              />
            </View>
            <Text>Loan</Text>
          </View>
          <View style={styles.imageMainContainer}>
            <View style={[styles.imageContainer]}>
              <Image
                style={styles.transferIcon}
                source={require("../assets/topCloud.png")}
              />
            </View>
            <Text>TopUp</Text>
          </View>
        </View>

        {/* Transaction */}
        <View style={styles.transaction}>
          <View style={styles.transactionHeader}>
            <Text style={[styles.transactionText]}>Transaction</Text>
            <Text style={styles.seeAll}>See All</Text>
          </View>
          <View style={styles.flatlistContainer}>
            <FlatList
              style={styles.flatList}
              data={Transaction}
              renderItem={({ item }) => (
                <View style={styles.flatListChild}>
                  <View style={styles.transactionCard}>
                    <Image
                      style={styles.transactionCardImage}
                      source={item.image}
                    />
                    <View style={styles.transactionCardText}>
                      <Text style={[styles.transactionCardTextName]}>
                        {item.name}
                      </Text>
                      <Text style={[styles.transactionCardTextIndustry]}>
                        {item.industry}
                      </Text>
                    </View>
                  </View>
                  <Text>{item.amount}</Text>
                </View>
              )}
              Vertical
              showsVerticalScrollIndicator={false}
              keyExtractor={(item) => item.id}
            />
          </View>
        </View>

        {/* BottomNavigation */}
        <View style={styles.bottomNavigation}>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Image
              style={[styles.home]}
              source={require("../assets/homeActive.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Image
              style={[styles.homeIcon]}
              source={require("../assets/myCards.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Image
              style={[styles.homeIcon]}
              source={require("../assets/pie.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
            <Image
              style={[styles.homeIcon]}
              source={require("../assets/settings.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subContainer: {
    padding: 20,
    justifyContent: "space-between",
    alignItems: "start",
    height: "100%",
    gap: 15,
  },
  profile: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  profileDisplay: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  profileIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  profileText: {
    flexDirection: "column",
    gap: 5,
  },
  greeting: {
    fontSize: 20,
    fontWeight: "bold",
  },
  name: {
    fontSize: 16,
    fontWeight: "400",
  },
  search: {},
  searchIcon: {
    width: 30,
    height: 30,
  },
  cardImage: {
    height: 230,
    width: "100%",
    borderRadius: 30,
  },
  flatlistContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  imageContainer: {
    padding: 15,
    borderRadius: 30,
  },
  transferIcon: {
    width: 30,
    height: 30,
    borderRadius: 30,
    resizeMode: "contain",
  },
  imageMainContainer: {
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  transactionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  transaction: {
    marginTop: 10,
  },
  transactionText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  seeAll: {
    fontSize: 15,
    color: "blue",
  },
  transactionCardImage: {
    width: 40,
    height: 40,
  },
  flatList: {
    width: 389,
    height: 300,
  },
  flatListChild: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 20,
    flex: 1,
    padding: 10,
    marginTop: 20,
    marginBottom: 20,
  },
  transactionCard: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  transactionCardText: {
    flexDirection: "column",
    gap: 5,
  },
  transactionCardTextName: {
    fontSize: 16,
    fontWeight: "500",
  },
  transactionCardTextIndustry: {
    fontSize: 12,
    fontWeight: "400",
  },
  homeIcon: {
    height: 25,
    width: 25,
    resizeMode: "contain",
  },
  bottomNavigation: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    padding: 20,
    bottom: 10,
  },
  home: {
    height: 30,
    width: 30,
    resizeMode: "contain",
  },
});
