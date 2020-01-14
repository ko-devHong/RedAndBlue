import React, { Component } from "react";
import {
  TouchableOpacity,
  Text,
  View,
  Dimensions,
  TextInput,
  Alert,
  StatusBar,
  NativeModules,
  ScrollView
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
class RegistWalletIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyname: "",
      keypassword: "",
      passwordconfirm: "",
      pwdcheck: true,
      iconame: "ios-eye",
      pwdcheck2: true,
      confirmicon: "ios-eye",
      hide: false
    };
  }

  componentDidMount() {
    walletmanager = WalletManager;
    let info = walletmanager.getWalletInfo();
    if (info !== "" && info !== null) {
      let walletinfo = JSON.parse(info);
      if (walletinfo !== null) {
        alert(i18n.t("스크린2다운안함알림"));
        this.props.navigation.navigate("Login");
      }
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
                  onPress: () => navigation.navigate("Login")
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

  changeItem() {
    if (this.state.pwdcheck) {
      this.setState({
        pwdcheck: false,
        iconame: "ios-eye-off"
      });
    } else {
      this.setState({
        pwdcheck: true,
        iconame: "ios-eye"
      });
    }
  }

  changeItem2() {
    if (this.state.pwdcheck2) {
      this.setState({
        pwdcheck2: false,
        confirmicon: "ios-eye-off"
      });
    } else {
      this.setState({
        pwdcheck2: true,
        confirmicon: "ios-eye"
      });
    }
  }

  checkFunction() {
    if (this.state.keyname.length < 8) {
      alert(i18n.t("스크린1문자체크"));
    } else if (this.state.keypassword < 8 || this.state.passwordconfirm < 8) {
      alert(i18n.t("스크린1문자체크2"));
    } else if (this.state.keypassword !== this.state.passwordconfirm) {
      alert(i18n.t("스크린1문자체크3"));
    } else {
      walletmanager.createGBXKeystore(
        this.state.keyname,
        this.state.keypassword
      );
      walletmanager.addWallet();
      this.props.navigation.navigate("RegistPageTwo", {
        keypassword: this.state.keypassword
      });
    }
  }

  eventlistener(event) {
    if (event) {
      this.setState({
        hide: true
      });
    }
  }
  endeventlistener(endevent) {
    if (endevent) {
      this.setState({
        hide: false
      });
    }
  }

  render() {
    return (
      <View style={{ flex: 1, width: width, height: height }}>
        <View style={styles.layoutone}>
          <View style={{ flexDirection: "column" }}>
            <View style={styles.selectOne}>
              <Text style={styles.selectOneText}>1</Text>
            </View>
            <Text style={{ color: "#fff" }}>
              {i18n.t("정보입력")}
              {"\n"}{" "}
            </Text>
          </View>
          <View style={styles.selectLayout}>
            <View style={styles.selectTwo}>
              <Text style={styles.selectTwoText}>2</Text>
            </View>
            <Text style={{ color: "#fff" }}>
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
        <ScrollView
          style={styles.layoutTwo}
          keyboardShouldPersistTaps="handled"
        >
          <Text style={styles.layoutTwoTextOne}>{i18n.t("스크린1첫줄")}</Text>
          <Text style={styles.layoutTwoTextTwo}>
            {i18n.t("스크린1두번째줄")}
          </Text>
          <Text style={styles.layoutTwoTextThree}>
            {i18n.t("스크린1세번째줄")}
          </Text>

          <TextInput
            style={styles.textinput}
            placeholder={i18n.t("지갑이름홀더")}
            returnKeyType={"next"}
            onSubmitEditing={() => {
              this.secondTextInput.focus();
            }}
            value={this.state.keyname}
            onChangeText={keyname => this.setState({ keyname })}
            onKeyPress={event => this.eventlistener(event)}
          />

          <View
            style={{
              flexDirection: "row",
              alignItems: "flex-end",
              paddingLeft: 20
            }}
          >
            <TextInput
              style={styles.passwordTextinput}
              placeholder={i18n.t("지갑비밀번호홀더1")}
              returnKeyType={"next"}
              ref={input => {
                this.secondTextInput = input;
              }}
              onSubmitEditing={() => {
                this.secondTextInput2.focus();
              }}
              secureTextEntry={this.state.pwdcheck}
              value={this.state.keypassword}
              onChangeText={keypassword => this.setState({ keypassword })}
              onKeyPress={event => this.eventlistener(event)}
              onEndEditing={endevent => this.endeventlistener(endevent)}
            />
            <TouchableOpacity onPress={() => this.changeItem()}>
              <Ionicons name={this.state.iconame} size={25} color={"gray"} />
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "flex-end",
              paddingLeft: 20
            }}
          >
            <TextInput
              style={styles.passwordTextinput}
              placeholder={i18n.t("지갑비밀번호홀더2")}
              returnKeyType={"done"}
              ref={input => {
                this.secondTextInput2 = input;
              }}
              secureTextEntry={this.state.pwdcheck2}
              value={this.state.passwordconfirm}
              onChangeText={passwordconfirm =>
                this.setState({ passwordconfirm })
              }
            />
            <TouchableOpacity onPress={() => this.changeItem2()}>
              <Ionicons
                style={{}}
                name={this.state.confirmicon}
                size={25}
                color={"gray"}
              />
            </TouchableOpacity>
          </View>
        </ScrollView>

        <View style={styles.pageTwoNextButtonLayout}>
          {this.state.hide == true ? (
            <Text />
          ) : (
            <TouchableOpacity
              style={styles.nextButton}
              onPress={() => this.checkFunction()}
            >
              <Text style={styles.nextButtonText}>
                {i18n.t("스크린1다음버튼")}
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  }
}

export default RegistWalletIndex;
