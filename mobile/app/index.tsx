import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Screen } from "react-native-screens";

export default function Index() {
  return (
    <Screen style={s.container}>
      <StatusBar hidden={true} />
      <Image
        source={require("@/assets/images/logo.png")}
        style={{ alignSelf: "center" }}
      />
      <Text style={s.text}>What are you looking for?</Text>
      <TouchableOpacity style={s.button}>
        <Text style={s.btnText}>Order a Meal</Text>
      </TouchableOpacity>
      <TouchableOpacity style={s.button}>
        <Text style={s.btnText}>I’m a Business</Text>
      </TouchableOpacity>
      <TouchableOpacity style={s.button}>
        <Text style={s.btnText}>I want to deliver</Text>
      </TouchableOpacity>
    </Screen>
  );
}

const s = StyleSheet.create({
  container: {
    backgroundColor: "#F8EDD1",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },
  text: {
    color: "#391713",
    fontSize: 16,
    marginBottom: 20,
    fontFamily: "regular"
  },
  button: {
    backgroundColor: "#E58480",
    padding: 8,
    borderRadius: 30,
    width: 260,
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"
  },
  btnText: {
    textAlign: "center",
    color: "#FFFFFF",
    fontSize: 24,
    fontFamily: "regular"
  },
});
