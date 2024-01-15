import { StyleSheet, TextInput, View } from "react-native";
import React, { useState } from "react";

const TextField = ({
  type = "text",
  size = styles.fontSize,
  fw = styles.fontWeight,
  bgcolor = styles.borderColor,
  color = styles.color,
  placeholder = "text Here",
}) => {
  const [text, setText] = useState("");
  const secure = type === "password" ? true : false;
  return (
    <TextInput
      secureTextEntry={secure}
      style={styles}
      value={text}
      onChange={(e) => {
        return setText(e.target.value);
      }}
    />
  );
};

export default TextField;

const styles = StyleSheet.create({
  color: "black",
  fontWeight: "400",
  fontSize: 18,
  paddingHorizontal: 18,
  paddingVertical: 15,
  borderRadius: 20,
  backgroundColor: "white",
  borderWidth: 1,
  borderColor: "black",
  marginTop: 14,
  marginBottom: 14,
});
