import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={s.loginContainer}>
      <Text>Login</Text>
    </View>
  );
}

const s = StyleSheet.create({
  loginContainer: {
    backgroundColor: "#f5f5f5",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#E58480",
  },
});
