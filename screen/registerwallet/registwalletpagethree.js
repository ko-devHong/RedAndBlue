import React, { Component } from "react";
import {
  TouchableOpacity,
  Text,
  View,
  Dimensions,
  TextInput,
  Alert,
  Clipboard,
  NativeModules,
  AsyncStorage
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import styles from "./styles";
import i18n from "i18n-js";
import cnlanguage from "../../cnlanguage.json";
import enlanguage from "../../enlanguage.json";
import { Localization } from "expo";

const zh = cnlanguage;
const en = enlanguage;
i18n.fallbacks = true;
i18n.translations = { en, zh };
i18n.locale = Localization.locale;

const { width, height } = Dimensions.get("window");
const { WalletManager } = NativeModules;
class RegistWalletPageThree extends Component {
  constructor(props) {
    super(props);
    this.state = {
      receivepass: this.props.navigation.state.params.keypassword,
      privatekey: "",
      clipboardContent: null
    };
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: i18n.t("지갑 만들기"),
      headerLeft: (
        <TouchableOpacity
          style={{ paddingLeft: 15 }}
          onPress={() =>
            Alert.alert(
              i18n.t("스크린2다운안함알림"),
              i18n.t("스크린2다운안함알림2"),
              [
                {
                  text: "Cancel",
                  onPress: () => console.log("Cancel Pressed"),
                  style: "cancel"
                },
                {
                  text: "OK",
                  onPress: () => {
                    let info = WalletManager.getWalletInfo();
                    let walletinfo = JSON.parse(info);
                    WalletManager.removeWallet(walletinfo.address);
                    navigation.navigate("Login");
                  }
                }
              ],
              { cancelable: false }
            )
          }
        >
          <Ionicons name={"ios-close"} size={45} color={"#fff"} />
        </TouchableOpacity>
      )
    };
  };

  componentDidMount() {
    let info = WalletManager.getWalletInfo();
    let walletinfo = JSON.parse(info);
    AsyncStorage.setItem("keyname", walletinfo.alias);
    console.log("여기도 패스워드 들어오니?" + this.state.receivepass);
    privatekey = WalletManager.getPrivKey(this.state.receivepass);
    console.log("프라이빗키:" + privatekey);
    this.setState({
      privatekey: privatekey
    });
    AsyncStorage.setItem("publicaddress", walletinfo.address);
  }

  writeToClipboard = async () => {
    await Clipboard.setString(this.state.privatekey);
    Alert.alert(i18n.t("안내"), i18n.t("성공적으로복사"));
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.layoutone}>
          <View style={{ flexDirection: "column" }}>
            <View style={styles.selectOne}>
              <Ionicons
                name={"ios-checkmark"}
                style={styles.pageTwoslectOneIcon}
              />
            </View>
            <Text style={{ color: "#fff" }}>
              {i18n.t("정보입력")}
              {"\n"}{" "}
            </Text>
          </View>
          <View style={styles.selectLayout}>
            <View style={styles.pageTwoselectTwo}>
              <Ionicons
                name={"ios-checkmark"}
                style={styles.pageTwoslectOneIcon}
              />
            </View>
            <Text style={{ color: "#fff" }}>
              {" "}
              {i18n.t("Keystore")} {"\n"}{" "}
            </Text>
          </View>
          <View style={{ flexDirection: "column" }}>
            <View style={styles.pageThreeSelectThree}>
              <Text style={styles.selectThreeTextPageThree}>3</Text>
            </View>
            <Text style={{ color: "#fff", textAlign: "center" }}>
              {i18n.t("개인키")}
              {"\n"}{" "}
            </Text>
          </View>
        </View>
        <View style={styles.layoutTwo}>
          <Text style={styles.pageThreeLayoutTwoTextOne}>
            {i18n.t("스크린3첫줄")}
          </Text>
          <Text style={styles.pageThreeLayoutTwoTextTwo}>
            {i18n.t("스크린3두번째줄")}
          </Text>
          <Text style={styles.pageThreeLayoutTwoTextTwo}>
            {i18n.t("스크린3세번째줄")}
          </Text>

          <Text style={styles.pageThreeLayoutTwoTextFour}>
            {i18n.t("개인키")}
          </Text>
          <TextInput
            style={styles.pageThreeTextinput}
            value={this.state.privatekey}
            secureTextEntry={true}
          />
          <View
            style={{
              flexDirection: "row",
              marginTop: 5,
              alignSelf: "flex-start",
              marginLeft: 20
            }}
          >
            <TouchableOpacity
              style={styles.pageThreeKeypaste}
              onPress={this.writeToClipboard}
            >
              <Text style={styles.pageThreeKeyText}>
                {i18n.t("스크린3복사버튼")}
              </Text>
            </TouchableOpacity>
            <Text>{"        "} </Text>
            <TouchableOpacity
              style={styles.pageThreeKeypaste}
              onPress={() => this.props.navigation.navigate("RegistWalletInfo")}
            >
              <Text style={styles.pageThreeKeyText}>
                {i18n.t("스크린3지갑정보")}
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.pageTwoNextButtonLayout}>
          <TouchableOpacity
            style={styles.nextButton}
            onPress={() => {
              info = WalletManager.getWalletInfo();
              walletinfo = JSON.parse(info);

              this.props.navigation.navigate("Login", {
                publicaddress: walletinfo.address
              });
            }}
          >
            <Text style={styles.nextButtonText}>
              {i18n.t("스크린3완료버튼")}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default RegistWalletPageThree;
