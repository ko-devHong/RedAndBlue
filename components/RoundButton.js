import React, { Component } from "react";
import { TouchableOpacity, Text } from "react-native";

class RoundButton extends Component {
  render() {
    return (
      <TouchableOpacity
        style={[
          {
            width: "70%",
            height: 40,
            borderRadius: 20,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#213aaf"
          },
          this.props.style
        ]}
        onPress={this.props.onPress}
      >
        <Text style={{ fontSize: 17, color: "#fff" }}> {this.props.name}</Text>
      </TouchableOpacity>
    );
  }
}

export default RoundButton;
