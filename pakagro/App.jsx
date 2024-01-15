import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar as sb, SafeAreaView } from "react-native";
import { LoginScreen, RegisterScreen, SplashScreen } from "./screens";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        paddingTop: sb.currentHeight,
      }}
    >
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Default"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Default" component={SplashScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}
