import { Pressable, StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaView style={Styles.screen}>
      <StatusBar style="light" />
      <View style={Styles.container}>
        <View style={Styles.info}>
          <Text style={Styles.title}>Одно из самых вкусных кофе в городе!</Text>
          <Text style={Styles.text}>
            Свежие зёрна, настоящая арабика и бережная обжарка
          </Text>
        </View>
        <Pressable style={Styles.button}>
          <Text style={Styles.buttonText}>Начать</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const Styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#000000",
  },
  container: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 30,
    paddingBottom: 42,
    gap: 24,
  },
  info: {
    gap: 8,
  },
  title: {
    // fontFamily: 'Sora',
    fontSize: 34,
    fontWeight: "600",
    lineHeight: 43,
    textAlign: "center",
    color: "#FFFFFF",
  },
  text: {
    // fontFamily: 'Sora',
    fontSize: 14,
    lineHeight: 22,
    textAlign: "center",
    color: "#A9A9A9",
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 21,
    borderRadius: 16,
    backgroundColor: "#C67C4E",
  },
  buttonText: {
    // fontFamily: "Sora",
    fontSize: 16,
    fontWeight: "600",
    lineHeight: 20,
    color: "#FFFFFF",
  },
});
