import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ChangableText } from "../components/ChangableText";

export default function ChangableTextScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ChangableText testID="changableText" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: "#2e78b7",
  },
});
