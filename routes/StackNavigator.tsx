import { createStackNavigator } from "@react-navigation/stack";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setStatusOfNotification } from "../store/features/notification/notification.slice";
import ErrorModal from "../components/common/ErrorModal";
import LoadingModal from "../components/common/LoadingModal";
import { useAppSelector } from "../store/hooks";
import Home from "../pages/Home";


const Stack = createStackNavigator();

const AppNavigator = () => {
  const screenOptions = {
    headerShown: false,
  };

  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(setStatusOfNotification(false));
  };
  const { notification, isNotificationVisible } = useAppSelector((state) => state.notification);
  const { isModalVisible, loadingModalTxt, customComponent } = useAppSelector((state) => state.loadingModal);

  return (
    <>
      <ErrorModal closeModal={closeModal} isModalVisible={isNotificationVisible} notification={notification} />
      <LoadingModal isVisible={isModalVisible} customComponent={customComponent} loadingModalTxt={loadingModalTxt} />
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
      </Stack.Navigator>
    </>

  );
};

export default AppNavigator;
