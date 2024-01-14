import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  StatusBar as sb,
  Text,
  View,
  SafeAreaView,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        paddingTop: sb.currentHeight,
      }}
    >
      <View style={styles.container}>
        <Text>Pak Ago Vertical Form Plant {sb.currentHeight}</Text>
        <StatusBar hidden={false} style="auto" backgroundColor="#0F9F4A" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
});
