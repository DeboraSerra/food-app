import { IUser } from "@/utils/interfaces";
import { StatusBar } from "expo-status-bar";
import { UserCircle2 } from "lucide-react-native";
import { useEffect, useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Screen } from "react-native-screens";
import BottomMenu from "./components/bottomMenu";
import Onboarding from "./components/onboarding";
import Top from "./components/top";

const TopSection = {
  login: ({ img, action }: { img?: string; action?: () => void }) => (
    <TouchableOpacity onPress={action}>
      {img ? <Image src={img} /> : <UserCircle2 />}
      <View>
        <Text>Login</Text>
        <Text>Click here to add your address</Text>
      </View>
    </TouchableOpacity>
  ),
};

export default function Index() {
  const [user, setUser] = useState({} as IUser);
  const [showOnboarding, setShowOnboarding] = useState(false);

  useEffect(() => {
    // AsyncStorage.getItem("userData").then((userData) => {
    //   if (!userData) {
    //     setShowOnboarding(true);
    //   } else {
    //     setUser(JSON.parse(userData));
    //   }
    // });
  }, []);

  if (showOnboarding) {
    return (
      <Screen style={s.screen}>
        <StatusBar backgroundColor='#F8EDD1' hidden={false} style='dark' />
        <View style={s.statusBarOnboarding} />
        <Onboarding setShowOnboarding={setShowOnboarding} />
      </Screen>
    );
  }
  return (
    <Screen style={s.screen}>
      <StatusBar backgroundColor='#F8EDD1' hidden={false} style='dark' />
      <View style={s.statusBar} />
      <ScrollView style={s.dashboardContainer}>
        <Top
          action={() => {}}
          page={TopSection.login({ img: user?.image })}
          setPage={() => {}}
          showSearch={true}
        />
        <Text>Order for Food</Text>
      </ScrollView>
      <BottomMenu />
    </Screen>
  );
}

const s = StyleSheet.create({
  statusBarOnboarding: {
    backgroundColor: "#F8EDD1",
    height: 40,
  },
  statusBar: {
    backgroundColor: "#E58480",
    height: 40,
  },
  screen: {
    flex: 1,
  },
  dashboardContainer: {
    backgroundColor: "#f5f5f5",
    flexGrow: 1,
    minHeight: 100,
  },
  text: {
    color: "#E58480",
  },
});
