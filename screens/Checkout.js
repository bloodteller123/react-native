import React, { Component } from "react";
import {
  View,
  Text,
  Button,
  ScrollView,
  StyleSheet,
  Picker,
  Modal
} from "react-native";

import Icon from "react-native-vector-icons/Ionicons";
import { tsConstructorType } from "@babel/types";
import { TextInput } from "react-native-gesture-handler";

const styles = StyleSheet.create({
  restaurant: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,

    //backgroundColor: "#ffffff",
    borderRadius: 10,
    marginTop: 15
  },
  horizontalLine: {
    borderBottomColor: "black",
    borderBottomWidth: 1
  },
  box: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,

    backgroundColor: "#ffffff",
    borderRadius: 0,
    flexDirection: "row",
    marginLeft: 30,
    marginTop: 5
  }
});

export default class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: this.props.navigation.getParam("total"),
      CreditPicker: "credit",
      showCredit: true
    };
  }

  render() {
    return (
      <View style={{ padding: 10 }}>
        <Text>
          Your Order Total: ${this.state.total} {this.state.CreditPicker + ""}{" "}
          {this.state.showCredit}{" "}
        </Text>

        <Picker
          mode="dropdown"
          style={{ height: 50, width: 200 }}
          selectedValue={this.state.CreditPicker}
          onValueChange={value => {
            this.setState({ CreditPicker: value });
          }}
        >
          <Picker.Item label="Credit" value="credit" key="0" />
          <Picker.Item label="Debit" value="debit" key="1" />
          <Picker.Item label="Cash" value="cash" key="2" />
        </Picker>
        {"credit" == this.state.CreditPicker ||
        "debit" == this.state.CreditPicker ? (
          [
            <Text>Credit/Debit Card Number:</Text>,
            <TextInput id="ccNumber" placeholder="############" />,
            <Text>Expiry Date:</Text>,
            <TextInput id="expDate" placeholder="##/##" />,
            <Text>CVV:</Text>,
            <TextInput id="CVV" placeholder="###" />,
            <Text>Full Name:</Text>,
            <TextInput id="name" placeholder="John Smith" />
          ]
        ) : (
          <Text>Cash will be done in-store</Text>
        )}
        <Button title="Submit" />
      </View>
    );
  }
}
