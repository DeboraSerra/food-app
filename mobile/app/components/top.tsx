import { Search, SlidersHorizontal } from "lucide-react-native";
import { ReactNode } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

const Top = ({
  page,
  setPage,
  showSearch,
  action,
}: {
  page: string | ReactNode;
  setPage: (page: string | ReactNode) => void;
  showSearch: boolean;
  action: () => void;
}) => {
  return (
    <View style={s.topSection}>
      <Text>{page}</Text>
      {showSearch && (
        <View style={s.textInput}>
          <Search />
          <TextInput
            placeholder='Search menu, restaurant or etc'
            placeholderTextColor={"#666"}
            style={s.input}
          />
          <SlidersHorizontal />
        </View>
      )}
    </View>
  );
};

export default Top;

const s = StyleSheet.create({
  topSection: {
    backgroundColor: "#F8EDD1",
  },
  textInput: {
    backgroundColor: "#fff",
    borderRadius: 20,
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "#D6D6D6",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  input: {
    flexGrow: 1,
    marginLeft: 10,
    marginRight: 10,
  }
});
