/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, Image, View } from "react-native";
import {
  createBottomTabNavigator,
  createAppContainer,
  createStackNavigator
} from "react-navigation";
import Icon from "react-native-vector-icons/Ionicons";

import Explore from "./screens/Explore"; // equivalent to welcome page
import Search from "./screens/Search"; // equivalent to bottom part of welcome page
import Restaurants from "./screens/Restaurants"; // equivalent to restaurants page
import OrderPage from "./screens/OrderPage"; // equivalent to order page
import Checkout from "./screens/Checkout";
import Menu from "./screens/Menu";

//type Props = {};
//const MainNavigator = createAppContainer(createBottomTabNavigator({

const homeSack = createStackNavigator({
  Home: {
    screen: Explore,
    navigationOptions: {
      title: "Welcome",
      headerBackTitle: null
    }
  },
  RestaurantList: {
    screen: Restaurants,
    navigationOptions: {
      title: "Restaurants",
      headerBackTitle: null
    }
  },
  MenuPage: {
    screen: Menu,
    navigationOptions: {
      headerTransparent: true,
      headerBackTitle: null
    }
  },
  Order: {
    screen: OrderPage,
    navigationOptions: {
      title: "Orders",
      headerBackTitle: null
    }
  },
  Checkout: {
    screen: Checkout,
    navigationOptions: {
      title: "Checkout",
      headerBackTitle: null
    }
  }
});

export default createAppContainer(
  createBottomTabNavigator(
    {
      Explore: {
        screen: homeSack,
        navigationOptions: {
          tabBarLabel: "HOME",
          tabBarIcon: ({ tintColor }) => (
            <Icon name="ios-apps" color={tintColor} size={24} />
          )
        }
      },

      Search:{
       screen:Search,
      navigationOptions:{
       tabBarLabel: 'SEARCH',
      tabBarIcon: ({ tintColor }) => (
       <Icon name="ios-search" color={tintColor} size={24} />
       )
      }
       }
    },
    {
      tabBarOptions: {
        activeTintColor: "red",
        inactiveTintColor: "grey",
        style: {
          backgroundColor: "white",

          elevation: 5
        }
      }
    }
  )
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
