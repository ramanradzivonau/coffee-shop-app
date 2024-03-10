import { FC } from "react";
import { Pressable, PressableProps, Text, StyleSheet } from "react-native";
import { Colors, Fonts, Radius } from "../tokens";

interface ButtonProps extends PressableProps {
  text: string;
}

export const Button: FC<ButtonProps> = ({ text, ...props }) => {
  return (
    <Pressable style={Styles.button} {...props}>
      <Text style={Styles.buttonText}>{text}</Text>
    </Pressable>
  );
};

const Styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 21,
    borderRadius: Radius.r16,
    backgroundColor: Colors.primary,
  },
  buttonText: {
    // fontFamily: "Sora",
    fontSize: Fonts.f16,
    fontWeight: "600",
    lineHeight: 20,
    color: Colors.white,
  },
});
