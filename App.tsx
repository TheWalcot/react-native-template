import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import AppNavigator from "./routes/StackNavigator";
import { store } from "./store/store";
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider, VStack } from "native-base";
import { useFonts, Poppins_400Regular } from "@expo-google-fonts/poppins";
import 'react-native-reanimated'

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
  });

  if (!fontsLoaded) {
    <VStack>yükleniyor</VStack>;
  } else {
    return (
      <Provider store={store}>
        <NativeBaseProvider>
          <NavigationContainer>
            <AppNavigator />
          </NavigationContainer>
        </NativeBaseProvider>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
