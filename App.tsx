import {
  ImageBackground,
  StyleSheet,
  Dimensions,
  Text,
  View,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, Colors, Fonts, Gaps, Paddings } from "./shared";

const windowWidth = Dimensions.get("window").width;

export default function App() {
  return (
    <SafeAreaView style={Styles.screen}>
      <ImageBackground
        source={require("./assets/StartScreen/backgroundImage.jpg")}
        imageStyle={Styles.backgroundImage}
        resizeMode="contain"
      >
        <StatusBar style="light" />
        <View style={Styles.container}>
          <View>
            <Text style={Styles.title}>
              Одно из самых вкусных кофе в городе!
            </Text>
            <Text style={Styles.text}>
              Свежие зёрна, настоящая арабика и бережная обжарка
            </Text>
          </View>
          <Button text="Начать" />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const Styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.black,
    alignItems: "center",
  },
  backgroundImage: {
    position: "absolute",
    bottom: 276,
    left: -windowWidth * 0.125,
    width: windowWidth * 1.25,
  },
  container: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: Paddings.p30,
    paddingBottom: Paddings.p42,
    gap: Gaps.g24,
  },
  title: {
    // fontFamily: 'Sora',
    fontSize: Fonts.f34,
    fontWeight: "600",
    lineHeight: 43,
    textAlign: "center",
    color: Colors.white,
  },
  text: {
    marginTop: 8,
    // fontFamily: 'Sora',
    fontSize: Fonts.f14,
    lineHeight: 22,
    textAlign: "center",
    color: Colors.lightGray,
  },
});
