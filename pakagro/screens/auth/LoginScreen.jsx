import {
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import backImg from "../../assets/imgs/back1.png";
const LoginScreen = () => {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <ImageBackground
        source={backImg}
        resizeMode="cover"
        style={{
          flex: 1,
        }}
      >
        <Text>Hello</Text>
      </ImageBackground>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
