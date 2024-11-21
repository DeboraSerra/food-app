import AsyncStorage from "@react-native-async-storage/async-storage";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Screen } from "react-native-screens";
import Onboarding from "./components/onboarding";

export default function Index() {
  const [user, setUser] = useState();
  const [showOnboarding, setShowOnboarding] = useState(false);
  useEffect(() => {
    AsyncStorage.getItem("userData").then((userData) => {
      if (!userData) {
        setShowOnboarding(true);
      } else {
        setUser(JSON.parse(userData));
      }
    });
  }, []);
  if (showOnboarding) {
    return (
      <Screen style={s.screen}>
        <StatusBar
          backgroundColor='#F8EDD1'
          hidden={false}
          style='dark'
        />
        <View style={s.statusBar} />
        <Onboarding setShowOnboarding={setShowOnboarding} />
      </Screen>
    );
  }
  return (
    <View style={s.container}>
      <Text>Order for Food</Text>
    </View>
  );
}

const s = StyleSheet.create({
  statusBar: {
    backgroundColor: "#F8EDD1",
    height: 40
  },
  screen: {
    flex: 1,
  },
  container: {
    backgroundColor: "#f5f5f5",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#E58480",
  },
});
