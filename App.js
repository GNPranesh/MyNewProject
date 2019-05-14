/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
//import { createStackNavigator,createAppContainer } from 'react-navigation';
//import Btn from './Button';
//import Forms from './forms';
//import AppNavigator from './AppNavigator';
import AppContainer from './AppNavigator';
//import MapViewExample from './Geolocation';
//import Home from './Home';
//import Friends from './Friends'

//type Props = {};
export default class App extends React.Component {
  render() {
    return <AppContainer ></AppContainer>
        {/*<View style={styles.container}>
        {/*<Text style={styles.welcome}>Orphanageeee Donation</Text>
        <Text style={styles.instructions}>Help</Text>
        <Text style={styles.instructions}>{instructions}</Text>
    <Btn></Btn>
        <Home></Home>
    <Friends></Friends>
    <Text>Hi melo</Text>
        <Text>Helllloooo</Text>          
  </View>*/}
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
     },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#FFFFFF',
  },
  instructions: {
    textAlign: 'center',
    color: '#FFFFFF',
    marginBottom: 5,
  },
});
