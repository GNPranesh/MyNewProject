//import { createStackNavigator, createAppContainer } from 'react-navigation';
//import Home from './Home'
import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { Router, Scene } from "react-native-router-flux";
import Friends from './Friends'
import Signin from './Signin'
import Forms from './forms';
import Addtocart from "./AddtoCart";



{/*const AppNavigator = createStackNavigator(
  {

    HomeScreen: { screen: Forms, },
    FriendsScreen: { screen: Friends, },
    SigninScreen: { screen: Signin, },
    AddtocartScreen: {screen : Addtocart}
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer*/}
export default class AppContainer extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
        <Scene key="HomeScreen" component={Forms} title="Login" />
        <Scene key="FriendsScreen" component={Friends} title="Friends" />
        <Scene key="SigninScreen" component={Signin} title="Signin" />
        <Scene key="AddtocartScreen" component={Addtocart} title="Add To Cart" />
          
        </Scene>
      </Router>
    );
  }
};
