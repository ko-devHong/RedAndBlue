import { Platform } from "react-native";

export default {
  container: {
    backgroundColor: "#FFF"
  },
  textinput: {
    alignSelf: "flex-start",
    borderBottomColor: "rgb(216, 216, 216)",
    borderBottomWidth: 2,
    marginLeft: 10,
    height: 40,
    width: Platform.OS === "ios" ? "80%" : "80%",
    paddingHorizontal: 10,
    marginTop: 10,
    marginLeft: 28
  },
  layoutone: {
    flex: 0.2,
    backgroundColor: "#09123d",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    paddingTop: 10
  },
  selectOne: {
    width: 38,
    height: 38,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    backgroundColor: "#25347b",
    marginBottom: 10
  },
  selectOneText: {
    fontWeight: "bold",
    fontSize: 17,
    color: "#fff"
  },
  selectLayout: {
    flexDirection: "column",
    paddingLeft: 30,
    paddingRight: 30,
    alignItems: "center"
  },
  selectTwo: {
    width: 38,
    height: 38,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    backgroundColor: "#fff",
    marginBottom: 10
  },
  selectTwoText: {
    fontWeight: "bold",
    fontSize: 17
  },
  selectTwoTextPageTwo: {
    fontWeight: "bold",
    fontSize: 17,
    color: "#fff"
  },
  selectThree: {
    width: 38,
    height: 38,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    backgroundColor: "#fff",
    marginBottom: 10
  },
  selectThreeText: {
    fontWeight: "bold",
    fontSize: 17
  },
  selectThreeTextPageThree: {
    fontWeight: "bold",
    fontSize: 17,
    color: "#fff"
  },
  layoutTwo: {
    padding: 10,
    flex: 0.8
  },
  layoutTwoPageTwo: {
    padding: 10,
    flex: 0.8,
    alignItems: "center"
  },
  layoutTwoTextOne: {
    fontWeight: "bold",
    fontSize: 18,
    paddingLeft: 20,
    paddingRight: 20
  },
  layoutTwoTextTwo: {
    color: "gray",
    fontSize: 16,
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 10
  },
  layoutTwoTextThree: {
    fontWeight: "bold",
    marginTop: 30,
    alignSelf: "flex-start",
    fontSize: 16,
    paddingLeft: 20,
    paddingRight: 20
  },
  nextButton: {
    width: "80%",
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#213aaf"
  },
  nextButtonText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold"
  },
  pageTwoslectOneIcon: {
    fontSize: 40,
    color: "#fff"
  },
  pageTwoselectTwo: {
    width: 38,
    height: 38,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    backgroundColor: "#25347b",
    marginBottom: 10
  },
  pageTwolayoutTwoTextThree: {
    color: "gray",
    marginTop: 10,
    alignSelf: "flex-start",
    paddingLeft: 15,
    paddingRight: 15,
    fontSize: 16
  },
  keyStoreButtonLayout: {
    marginTop: 20,
    width: "27%",
    height: "20%",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "rgb(126, 119, 255)",
    borderRadius: 120
  },
  keyStoreButtonImage: {
    fontSize: 50,
    color: "rgb(126, 119, 255)"
  },
  nextButtonLayout: {
    alignItems: "center",
    justifyContent: "center",
    flex: 0.2
  },
  pageTwoNextButtonLayout: {
    alignItems: "center",
    justifyContent: "center",
    flex: 0.2,
    flexDirection: "row"
  },
  pageTwoNextButton: {
    width: "40%",
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#5d667f"
  },
  pageThreeSelectThree: {
    width: 38,
    height: 38,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    backgroundColor: "#25347b",
    marginBottom: 10
  },
  pageThreeLayoutTwoTextOne: {
    fontWeight: "bold",
    alignSelf: "flex-start",
    paddingLeft: 20,
    paddingRight: 20,
    fontSize: 18
  },
  pageThreeLayoutTwoTextFour: {
    fontWeight: "bold",
    alignSelf: "flex-start",
    marginLeft: 20,
    marginTop: 40,
    fontSize: 18
  },
  pageThreeTextinput: {
    alignSelf: "flex-start",
    backgroundColor: "rgb(216, 216, 216)",
    borderBottomWidth: 2,
    marginLeft: 20,
    height: 40,
    width: Platform.OS === "ios" ? "83%" : "83%",
    paddingHorizontal: 10,
    marginTop: 10
  },
  pageThreeKeypaste: {
    width: "40%",
    height: 30,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#636e72"
  },
  pageThreeKeyText: {
    fontWeight: "bold",
    color: "#fff",
    fontSize: 16
  },
  walletInfoLayout: {
    flex: 0.07,
    justifyContent: "center",
    borderColor: "#2f3542",
    borderBottomWidth: Platform.OS === "ios" ? 2 : 0,
    borderTopWidth: Platform.OS === "ios" ? 0 : 2
  },
  walletInfoLayoutText: {
    fontWeight: "bold",
    fontSize: 17,
    marginLeft: 30
  },
  walletInfoLayoutTextTwo: {
    marginLeft: 200,
    fontSize: 17,
    color: "gray"
  },
  walletInfoMainText: {
    fontWeight: "bold",
    fontSize: 22,
    marginBottom: Platform.OS === "ios" ? 40 : 0,
    marginTop: Platform.OS === "ios" ? 0 : 20
  },
  passwordTextinput: {
    alignItems: "flex-start",
    marginLeft: 10,
    width: Platform.OS === "ios" ? "80%" : "80%",
    paddingHorizontal: 10,
    marginTop: 30,
    borderBottomColor: "rgb(216, 216, 216)",
    borderBottomWidth: 2
  },
  pageThreeLayoutTwoTextTwo: {
    color: "gray",
    marginTop: 10,
    alignSelf: "flex-start",
    paddingLeft: 20,
    paddingRight: 20,
    fontSize: 18
  },
  layoutTwoTextOnePageTwo: {
    fontWeight: "bold",
    alignSelf: "flex-start",
    paddingLeft: 17,
    paddingRight: 17,
    marginTop: 10,
    fontSize: 18
  },
  pageTwoNextButton2: {
    width: "40%",
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#213aaf"
  }
};
