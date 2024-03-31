import { FC } from "react";
import {
  Pressable,
  PressableProps,
  Text,
  StyleSheet,
  Animated,
  GestureResponderEvent,
} from "react-native";
import { Colors, Fonts, Radius } from "../tokens";

interface ButtonProps extends PressableProps {
  text: string;
}

export const Button: FC<ButtonProps> = ({ text, ...props }) => {
  const animatedValue = new Animated.Value(100);
  const backgroundColor = animatedValue.interpolate({
    inputRange: [0, 100],
    outputRange: [Colors.primaryHover, Colors.primary],
  });

  const fadeIn = (e: GestureResponderEvent) => {
    Animated.timing(animatedValue, {
      toValue: 0,
      duration: 100,
      useNativeDriver: true,
    }).start();
    props.onPressIn && props.onPressIn(e);
  };

  const fadeOut = (e: GestureResponderEvent) => {
    Animated.timing(animatedValue, {
      toValue: 100,
      duration: 100,
      useNativeDriver: true,
    }).start();
    props.onPressOut && props.onPressOut(e);
  };

  return (
    <Pressable
      style={Styles.buttonWrap}
      onPressIn={fadeIn}
      onPressOut={fadeOut}
      {...props}
    >
      <Animated.View style={[Styles.button, { backgroundColor }]}>
        <Text style={Styles.buttonText}>{text}</Text>
      </Animated.View>
    </Pressable>
  );
};

const Styles = StyleSheet.create({
  buttonWrap: {
    backgroundColor: Colors.primary,
    borderRadius: Radius.r16,
    overflow: "hidden",
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 21,
  },
  buttonText: {
    // fontFamily: "Sora",
    //TODO: add fonts
    fontSize: Fonts.f16,
    fontWeight: "600",
    lineHeight: 20,
    color: Colors.white,
  },
});
