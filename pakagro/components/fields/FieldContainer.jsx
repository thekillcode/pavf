import { StyleSheet, Text, View } from "react-native";
import React from "react";

const FieldContainer = ({ children }) => {
  return <View style={styles}>{children}</View>;
};

export default FieldContainer;

const styles = StyleSheet.create({
  width: "100%",

  paddingHorizontal: 18,
  paddingVertical: 15,
  borderRadius: 20,
  backgroundColor: "white",
  borderWidth: 1,
  borderColor: "black",
  marginTop: 14,
  marginBottom: 14,
});
