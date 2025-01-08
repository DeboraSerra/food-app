import {
  Home,
  ScrollText,
  Search,
  ShoppingCart,
  User,
} from "lucide-react-native";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const BottomMenu = () => {
  return (
    <View style={s.bottomMenu}>
      <TouchableOpacity style={s.btn}>
        <Home />
        <Text style={s.text}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={s.btn}>
        <Search />
        <Text style={s.text}>Search</Text>
      </TouchableOpacity>
      <TouchableOpacity style={s.btn}>
        <ScrollText />
        <Text style={s.text}>Order</Text>
      </TouchableOpacity>
      <TouchableOpacity style={s.btn}>
        <ShoppingCart />
        <Text style={s.text}>Cart</Text>
      </TouchableOpacity>
      <TouchableOpacity style={s.btn}>
        <User />
        <Text style={s.text}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BottomMenu;

const s = StyleSheet.create({
  bottomMenu: {
    backgroundColor: "#E58480",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 57,
  },
  btn: {
    flex: 1,
    alignItems: "center",
  },
  text: {
    color: "#fff",
  },
});
