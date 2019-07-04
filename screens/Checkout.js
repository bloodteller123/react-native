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
  onChanged = text => {
    this.setState({
        mobile: text.replace(/[^0-9]/g, ''),
    });
}
  render() {
    return (
      <View style={{ padding: 10 }}>
        <Text style={{fontSize:30,marginTop:10}}>Your Order Total: ${this.state.total}</Text>
        <View>
          <Text style={{fontSize:20,marginTop:30}}>Please Select Your Payment method</Text>
            <View style={{marginLeft:60,marginBottom:60}}>
            <Picker
              mode="dropdown"
              style={{ height: 50, width: 200}}
              selectedValue={this.state.CreditPicker}
              onValueChange={value => {
                this.setState({ CreditPicker: value });
              }}
            >
              <Picker.Item label="Credit" value="credit" key="0" />
              <Picker.Item label="Debit" value="debit" key="1" />
              <Picker.Item label="Cash" value="cash" key="2" />
            </Picker>
            </View>
        </View>
        <View style={{ marginTop: 150}}>
        {"credit" == this.state.CreditPicker ||
        "debit" == this.state.CreditPicker ? (
          [
            <Text>Credit/Debit Card Number:</Text>,
            <TextInput
              id="ccNumber"
              placeholder="############"
              keyboardType="numeric"
              maxLength={12}
            />,
            <Text>Expiry Date:</Text>,
            <TextInput
              id="expDate"
              placeholder="####"
              keyboardType="numeric"
              maxLength={4}
            />,
            <Text>CVV:</Text>,
            <TextInput
              id="CVV"
              placeholder="###"
              keyboardType="numeric"
              maxLength={3}
            />,
            <Text>Full Name:</Text>,
            <TextInput id="name" placeholder="John Smith" />
          ]
        ) : (
          <Text>Cash will be done in-store</Text>
        )}
        </View>
        <Button title="Submit" />
      </View>
    );
  }
}
