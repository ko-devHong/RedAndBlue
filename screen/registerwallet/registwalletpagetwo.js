import React, { Component } from "react";
import {
  TouchableOpacity,
  Text,
  View,
  Dimensions,
  Alert,
  NativeModules,
  Image,
  AsyncStorage
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import styles from "./styles";
import i18n from "i18n-js";
import cnlanguage from "../../cnlanguage.json";
import enlanguage from "../../enlanguage.json";
import { Localization } from "expo";

const { WalletManager } = NativeModules;

const { width, height } = Dimensions.get("window");
const zh = cnlanguage;
const en = enlanguage;
i18n.fallbacks = true;
i18n.translations = { en, zh };
i18n.locale = Localization.locale;

let clickstate = 0;
class RegistWalletPageTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      receviedpassword: this.props.navigation.state.params.keypassword
    };
    console.log("패스워드 들어오니?" + this.state.receviedpassword);
  }

  async componentWillMount() {
    try {
      await AsyncStorage.removeItem("keyname", err => {
        console.log("remove sucess" + err);
        console.log("publicaddress:" + AsyncStorage.getItem("keyname"));
      });
      return true;
    } catch (exception) {
      return false;
    }
  }

  //다운로드 받는 함수.
  downloadfile() {
    clickstate++;
    WalletManager.exportCurrentWallet(this.state.receviedpassword);
    alert(
      "/storage/emulated/0/GBRICK" + "\n" + i18n.t("이경로에저장되었습니다")
    );
  }

  //다운로드 받지 않았을떄.
  nextButtonQuestion() {
    if (clickstate === 0) {
      Alert.alert(
        i18n.t("스크린2다운안함알림"),
        i18n.t("스크린2다운안함알림2"),
        [
          {
            text: "No",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          {
            text: "Yes",
            onPress: () =>
              this.props.navigation.navigate("RegistPageThree", {
                keypassword: this.state.receviedpassword
              })
          }
        ],
        { cancelable: false }
      );
    } else {
      this.props.navigation.navigate("RegistPageThree", {
        keypassword: this.state.receviedpassword
      });
    }
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
              <Text style={styles.selectTwoTextPageTwo}>2</Text>
            </View>
            <Text style={{ color: "#fff" }}>
              {" "}
              {i18n.t("Keystore")} {"\n"}{" "}
            </Text>
          </View>
          <View style={{ flexDirection: "column" }}>
            <View style={styles.selectThree}>
              <Text style={styles.selectThreeText}>3</Text>
            </View>
            <Text style={{ color: "#fff", textAlign: "center" }}>
              {i18n.t("개인키")}
              {"\n"}{" "}
            </Text>
          </View>
        </View>
        <View style={styles.layoutTwoPageTwo}>
          <Text style={styles.layoutTwoTextOnePageTwo}>
            {i18n.t("스크린2첫줄")}
          </Text>
          <Text style={styles.layoutTwoTextOnePageTwo}>
            {i18n.t("스크린2두번째줄")}
          </Text>
          <Text style={styles.pageTwolayoutTwoTextThree}>
            {i18n.t("스크린2세번째줄")}
          </Text>
          <TouchableOpacity
            style={styles.keyStoreButtonLayout}
            onPress={() => this.downloadfile()}
          >
            <Image source={require("../../image/group_2.png")} />
          </TouchableOpacity>
          <Text style={{ padding: 20, fontSize: 16 }}>
            {i18n.t("스크린2지갑다운글")}
          </Text>
        </View>

        <View style={styles.pageTwoNextButtonLayout}>
          <TouchableOpacity
            style={styles.pageTwoNextButton}
            onPress={() => this.props.navigation.navigate("Regist")}
          >
            <Text style={styles.nextButtonText}>
              {i18n.t("스크린2이전버튼")}
            </Text>
          </TouchableOpacity>
          <Text>{"     "}</Text>
          <TouchableOpacity
            style={styles.pageTwoNextButton2}
            onPress={() => this.nextButtonQuestion()}
          >
            <Text style={styles.nextButtonText}>
              {i18n.t("스크린1다음버튼")}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default RegistWalletPageTwo;
