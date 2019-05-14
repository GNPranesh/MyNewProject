import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import Forms from './forms'
import { Actions } from "react-native-router-flux";


export default class Home extends React.Component {
  render() {
    return (
      <View>
        <Forms></Forms>
        
        {/*<Button style={styles.submitButton} title ="NEXT" onPress={() => this.props.navigation.navigate('FriendsScreen')}></Button>*/}
        <TouchableOpacity
          style={styles.submitButton}
          /*onPress={() => this.props.navigation.navigate('FriendsScreen')}*/
          onPress={() => Actions.FriendsScreen()}>
          <Text style={styles.submitButtonText}> NEXT </Text>
        </TouchableOpacity>
        <TouchableOpacity        
        /*onPress={() => this.props.navigation.navigate('SigninScreen')}>*/
        onPress={() => Actions.SigninScreen()}>
        <Text style={styles.submitButton2}>Not a Member? Sign up Now</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  submitButton: {
    backgroundColor: 'black',
    padding: 8,
    margin: 15,
    width: 325,
    height: 40,
    alignItems: 'center',
    borderRadius: 20,
    marginTop: 20,
  },
  submitButtonText: {
    color: 'white',
    alignItems: 'center',
    fontSize: 15,
  },
  submitButton2: {
    textAlign: 'center'
  }
})