import { StyleSheet, TextInput } from "react-native";
import React from "react";
import FieldContainer from "./FieldContainer";

const PasswordField = () => {
  return (
    <FieldContainer>
      <TextInput style={styles} />
    </FieldContainer>
  );
};

export default PasswordField;

const styles = StyleSheet.create({
  color: "black",
  fontWeight: "400", // React Native uses string values for fontWeight
});
