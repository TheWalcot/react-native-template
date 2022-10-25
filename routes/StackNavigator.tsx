import Login from "../pages/Login";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const AppNavigator = () => {
  const screenOptions = {
    headerShown: false,
  };

  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
