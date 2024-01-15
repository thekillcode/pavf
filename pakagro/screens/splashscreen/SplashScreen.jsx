import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";

const SplashScreen = ({ navigation }) => {
  return (
    <View>
      <Button
        title="Login Screen"
        onPress={() => {
          navigation.navigate("Login");
        }}
      />
      <Button
        title="Register Screen"
        onPress={() => {
          navigation.navigate("Register");
        }}
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({});
