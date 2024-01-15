import { View, Text } from "react-native";
import React from "react";

const Button = ({ children }) => {
  return <View style={buttonStyles.button}>{children}</View>;
};
export const ActionButton = ({
  text,
  color = buttonStyles.formbt.color,
  fw = buttonStyles.formbt.fontWeight,
  size = buttonStyles.formbt.size,
  hp = 0,
  vp = 0,
}) => {
  return (
    <Button>
      <Text
        style={{
          color: color,
          fontWeight: fw,
          fontSize: size,
          paddingHorizontal: hp,
          paddingVertical: vp,
        }}
      >
        {text}
      </Text>
    </Button>
  );
};

const buttonStyles = {
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 50,
    backgroundColor: "#0F9F4A",
  },
  formbt: {
    color: "#fff",
    fontWeight: 700,
    size: 24,
  },
};
