import {
  createStackNavigator,
  createAppContainer,
  createDrawerNavigator
} from "react-navigation";
import NativeModules from "react-native";
import WebviewTest from "./screen/webviewtest";
import LoginScreen from "./screen/loginscreen";
import RegistWalletIndex from "./screen/registerwallet/registwalletindex";
import RegistWalletPageTwo from "./screen/registerwallet/registwalletpagetwo";
import RegistWalletPageThree from "./screen/registerwallet/registwalletpagethree";
import RegistWalletInfo from "./screen/registerwallet/registwalletinfo";

const defaultNavigationOptions = {
  headerTintColor: "white",
  headerStyle: {
    backgroundColor: "#09123d",
    height: 10
  },
  headerTitleStyle: {
    fontWeight: "bold",
    fontSize: 25
  }
};

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: WebviewTest
    },
    Login: {
      screen: LoginScreen
    },
    Regist: {
      screen: RegistWalletIndex
    },
    RegistPageTwo: {
      screen: RegistWalletPageTwo
    },
    RegistPageThree: {
      screen: RegistWalletPageThree
    },
    RegistWalletInfo: {
      screen: RegistWalletInfo
    }
  },
  {
    initialRouteName: "Login",
    defaultNavigationOptions,
    headerLayoutPreset: "center"
  }
);

export default createAppContainer(AppNavigator);
