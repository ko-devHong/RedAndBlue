import React from "react";
import {
  View,
  WebView,
  ActivityIndicator,
  AsyncStorage,
  NativeModules,
  KeyboardAvoidingView
} from "react-native";
import { Buffer } from "buffer";
import i18n from "i18n-js";
import cnlanguage from "../cnlanguage.json";
import enlanguage from "../enlanguage.json";
import { Localization } from "expo";

const { WalletManager } = NativeModules;

const zh = cnlanguage;
const en = enlanguage;
i18n.fallbacks = true;
i18n.translations = { en, zh };
i18n.locale = Localization.locale;
class WebviewTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
      messageusername: "",
      messagepassword: this.props.navigation.state.params.password,
      publicaddress: "",
      locale: "",
      refreshing: false
    };
    this.webview = null;
  }

  static navigationOptions = {
    header: null
  };

  hideSpinner() {
    this.setState({ visible: false });
  }

  yourAlert() {
    let message = "Hello";

    let jsCode = `
      setTimeout(() => {
        alert('${message}');
      }, 1500)`;

    return jsCode;
  }

  reload() {
    this.webview.reload();
  }

  async componentWillMount() {
    this.state.locale = Localization.locale;
    this.state.publicaddress = await AsyncStorage.getItem("publicaddress");
    console.log("퍼블릭키 보내기:" + this.state.publicaddress);
  }

  _onRefresh = () => {
    this.setState({ refreshing: true });
    fetchData().then(() => {
      this.setState({ refreshing: false });
    });
  };

  onLoadEnd() {
    let publics = this.state.publicaddress;
    let langs = this.state.locale.substring(8, this.state.locale.length);
    const data = { messageType: "login", data: publics, lang: langs };
    //alert(JSON.stringify(data));
    this.webview.postMessage(JSON.stringify(data));
  }

  handleMessage(e) {
    console.log(e.nativeEvent.data);
    const data = e.nativeEvent.data;
    pasedata = JSON.parse(data);
    if (pasedata.apiType == "end") {
      console.log("end클릭했네:" + pasedata.apiType);
      this.state.messagepassword = "";
    } else if (pasedata.apiType == "start") {
      this.props.navigation.navigate("Login");
    } else {
      version = pasedata.version;
      type = pasedata.txType;
      toAddr = pasedata.txTo;
      value = pasedata.txValue;
      fee = pasedata.txFee;
      message = pasedata.txMessage;
      txString = WalletManager.requestTxString(
        version,
        type,
        toAddr,
        value,
        fee,
        message,
        this.state.messagepassword
      );
      testdata = new Buffer(txString).toString("base64");
      txdata = testdata;
      let jsstringdata = { messageType: "transfer", txdata };
      this.webview.postMessage(JSON.stringify(jsstringdata));
    }
  }

  render() {
    return (
      <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" enabled>
        <WebView
          ref={webview => (this.webview = webview)}
          onLoad={() => this.hideSpinner()}
          source={{ uri: "http://gbxrnb.com/" }}
          // source={{ uri: "http://192.168.0.6:8080" }}
          allowFileAccess={true}
          javaScriptEnabled={true}
          onLoadEnd={() => this.onLoadEnd()}
          onMessage={mssage => this.handleMessage(mssage)}
        />
        {this.state.visible && (
          <ActivityIndicator
            style={{ position: "absolute", top: 200, left: 200 }}
            size="large"
          />
        )}
      </KeyboardAvoidingView>
    );
  }
}

export default WebviewTest;
