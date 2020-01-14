import React, { Component } from "react";
import {
  TouchableOpacity,
  Text,
  View,
  Dimensions,
  Clipboard,
  Alert,
  AsyncStorage,
  Platform,
  NativeModules
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import styles from "./styles";
import QRCode from "react-native-qrcode";
import moment from "moment";
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

class RegistWalletInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clipboardContent: null,
      publickey: ""
    };
  }

  async componentDidMount() {
    try {
      const Keyname = await AsyncStorage.getItem("publicaddress");
      this.setState({
        publickey: Keyname
      });
      return true;
    } catch (exception) {
      console.log(exception);
      return true;
    }
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: i18n.t("지갑정보스크린제목"),
      headerLeft: (
        <TouchableOpacity
          style={{ paddingLeft: 15 }}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name={"ios-arrow-round-back"} size={45} color={"#fff"} />
        </TouchableOpacity>
      )
    };
  };

  writeToClipboard = async () => {
    await Clipboard.setString(this.state.publickey);
    Alert.alert(i18n.t("안내"), i18n.t("성공적으로복사"));
  };

  render() {
    let date = moment(new Date()).format("YYYY-MM-D");
    return Platform.OS == "ios" ? (
      <View style={{ flex: 1 }}>
        <View style={styles.walletInfoLayout}>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.walletInfoLayoutText}>GBRICK</Text>
            <Text style={styles.walletInfoLayoutTextTwo}>{date}</Text>
          </View>
        </View>
        <View
          style={{
            flex: 0.9,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Text style={styles.walletInfoMainText}>{this.state.key}</Text>
          <Text style={styles.walletInfoMainText}>
            {i18n.t("지갑정보스크린지갑주소")}
          </Text>
          <QRCode
            value={this.state.publickey}
            size={200}
            bgColor="black"
            fgColor="white"
          />
          <Text style={{ fontSize: 17, padding: 30 }}>
            {this.state.publickey}
          </Text>
          <TouchableOpacity
            style={styles.pageThreeKeypaste}
            onPress={this.writeToClipboard}
          >
            <Text style={styles.pageThreeKeyText}>
              {i18n.t("지갑정보스크린주소복사")}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    ) : (
      <View style={{ flex: 1 }}>
        <View
          style={{
            flex: 0.9,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <QRCode
            value={this.state.publickey}
            size={200}
            bgColor="black"
            fgColor="white"
          />
          <Text style={{ fontSize: 17, padding: 30 }}>
            {this.state.publickey}
          </Text>
          <TouchableOpacity
            style={styles.pageThreeKeypaste}
            onPress={this.writeToClipboard}
          >
            <Text style={styles.pageThreeKeyText}>
              {i18n.t("지갑정보스크린주소복사")}
            </Text>
          </TouchableOpacity>
          <Text style={styles.walletInfoMainText}>{this.state.key}</Text>
          <Text style={styles.walletInfoMainText}>
            {i18n.t("지갑정보스크린지갑주소")}
          </Text>
        </View>
        <View style={styles.walletInfoLayout}>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.walletInfoLayoutText}>GBRICK</Text>
            <Text style={styles.walletInfoLayoutTextTwo}>{date}</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default RegistWalletInfo;
