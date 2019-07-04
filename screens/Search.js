import React, { Component } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Platform,
  StatusBar,
  ScrollView,
  StyleSheet
} from "react-native";
import { SearchBar } from "react-native-elements";
import MenuItem from "../component/MenuItem";
import CollectionType from "../component/CollectionType"

// temp

export default class Search extends Component {
  componentWillMount() {
    this.startHeaderHeight = 80;
    if (Platform.OS == "android") {
      this.startHeaderHeight = 100 + StatusBar.currentHeight;
    }
  }
  state = {
    text: ""
  };
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <SearchBar
            placeholder="Find Your Food"
            onChangeText={newText => {
              this.setState({ text: newText });
            }}
            value={this.state.text}
          />
          <View style={{ flex: 1 }}>
            <ScrollView scrollEventThrottle={16}>
            <View style={{ marginTop: 30 }}>
                <Text style={{ fontSize: 25, fontWeight: "600" }}>
                  Collections
                </Text>
                <Text
                  style={{ fontSize: 10, fontWeight: "300", paddingLeft: 10 }}
                >
                  Explore curated lists of top restaurants, cafes, pubs, and bars
                  in Ottawa, based on trends
                </Text>

                <CollectionType
                  imageUrl={require("../assets/collection1.jpg")}
                  description="Classic maki-style rolls, sashimi or nigiri sushi, hit up these spots for your favourite Japanese snack"
                  onPress={this.navigateToRestaurant}
                />
                <CollectionType
                  imageUrl={require("../assets/collection2.jpg")}
                  description="From cookies and doughnuts to ice cream and cakes, knock yourself out with these classic and creative desserts"
                  onPress={this.navigateToRestaurant}
                />
                <CollectionType
                  imageUrl={require("../assets/collection3.jpg")}
                  description="The best restaurants in town for a complete fine-dining experience"
                  onPress={this.navigateToRestaurant}
                />
              </View>
              </ScrollView>
            </View>
        </View>
      </SafeAreaView>
    );
  }
}
