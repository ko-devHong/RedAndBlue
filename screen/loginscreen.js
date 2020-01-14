import React, { Component } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Image,
  Text,
  Alert,
  TouchableOpacity,
  AsyncStorage,
  Dimensions,
  NativeModules,
  StatusBar,
  KeyboardAvoidingView
} from "react-native";
import { LinearGradient, Constants, Localization } from "expo";
import { Buffer } from "buffer";
import RoundButton from "../components/RoundButton";
import i18n from "i18n-js";
import cnlanguage from "../cnlanguage.json";
import enlanguage from "../enlanguage.json";

const { WalletManager } = NativeModules;
const { width, height } = Dimensions.get("window");

let index = 0;

const zh = cnlanguage;
const en = enlanguage;
i18n.fallbacks = true;
i18n.translations = { en, zh };
i18n.locale = Localization.locale;

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "", privkey: "" };
  }

  static navigationOptions = {
    header: null
  };

  async componentDidMount() {
    console.log(Localization.locale);
    if (WalletManager.existWallet() === false) {
      this.props.navigation.navigate("Regist");
    } else {
      let info = WalletManager.getWalletInfo();
      let walletinfo = JSON.parse(info);
      console.log(JSON.stringify(walletinfo));
      console.log("월렛 퍼블릭키:" + walletinfo.address);
      let str = walletinfo.alias;
      this.setState({
        username: str
      });
      WalletManager.removeWallet(walletinfo.address);
    }
  }

  async componentDidUpdate() {
    if (index > 1) {
      publices = await AsyncStorage.getItem("keyname");
      this.setState({
        username: publices
      });
    }
    index = 0;
  }

  async testmassage() {
    let locale = Localization.locale;
    await AsyncStorage.setItem("locale", locale);
    await AsyncStorage.setItem("username", this.state.username);
    if (WalletManager.getPrivKey(this.state.password) == "") {
      alert(i18n.t("패스워드확인"));
    } else {
      this.props.navigation.navigate("Home", { password: this.state.password });
    }
  }

  render() {
    index++;
    console.log("인덱스임" + index);
    return (
      <LinearGradient style={styles.container} colors={["#162469", "#09123d"]}>
        <StatusBar hidden={true} />
        <View
          style={{
            flex: 0.6,
            width: "100%",
            height: "100%",
            alignItems: "center",
            justifyContent: "flex-end",
            paddingTop: 200,
            paddingBottom: 5
          }}
        >
          <Image
            style={{
              resizeMode: "stretch"
            }}
            source={require("../image/splash_img.png")}
          />
        </View>
        <KeyboardAvoidingView
          style={styles.reaserch}
          behavior="padding"
          enabled
        >
          <View
            style={{ flexDirection: "row", alignItems: "center", padding: 2 }}
          >
            <TextInput
              style={{
                backgroundColor: "#b2bec3",
                height: 40,
                width: "70%",
                paddingHorizontal: 10,
                fontSize: 15
              }}
              editable={false}
              returnKeyType="next"
              onSubmitEditing={() => this.email.focus()}
              placeholder={i18n.t("지갑이름")}
              keyboardType="email-address"
              onChangeText={username => this.setState({ username })}
              value={this.state.username}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 8,
              padding: 2
            }}
          >
            <TextInput
              secureTextEntry={true}
              style={{
                backgroundColor: "rgb(243, 240, 255)",

                height: 40,
                width: "70%",
                paddingHorizontal: 10,
                fontSize: 15
              }}
              returnKeyType="go"
              ref={input => (this.email = input)}
              placeholder={i18n.t("패스워드")}
              onChangeText={password => this.setState({ password })}
              value={this.state.password}
            />
          </View>

          <View
            style={{
              paddingTop: 34,
              alignItems: "center",
              width: "100%"
            }}
          >
            <RoundButton
              name={i18n.t("login")}
              style={{ width: "70%" }}
              onPress={this.testmassage.bind(this)}
            />
          </View>

          <View style={{ alignItems: "center", marginTop: 16 }}>
            <Text style={{ fontSize: 14, color: "#fff" }}>
              {i18n.t("loginQuestion")}
            </Text>
            <TouchableOpacity
              style={{
                marginTop: 12
              }}
              onPress={() => this.props.navigation.navigate("Regist")}
            >
              <Text style={{ fontSize: 14, color: "#fff" }}>
                {i18n.t("createbutton")}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                marginTop: 12
              }}
              onPress={() => this.props.navigation.navigate("RegistWalletInfo")}
            >
              <Text style={{ fontSize: 14, color: "#fff" }}>
                {i18n.t("퍼블릭키정보")}
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#74b9ff",
    width: width,
    height: height
  },
  image: {
    width: 100,
    height: 100
  },
  reaserch: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%"
  }
});

export default LoginScreen;
