import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { KeyboardAvoidingView, ScrollView } from 'react-native';
import { AsyncStorage } from 'react-native';
import { Actions } from "react-native-router-flux";

export default class Signin extends React.Component {
  constructor() {
    super();
    this.state = {
      usrnm: '', pwd1: '', pwd2: '', visibility: true, hidePassword: true,
      visvalidusrnm: false,
      visvalidpwd1: false,
      visvalidpwd2: false
    }
  }

  // _storeData = async () => {
  //   try {
  //     await AsyncStorage.setItem(this.state.usrnm,this.state.pwd1);
  //   } catch (error) {
  //     // Error saving data
  //   }
  // };

  setUsername = (e) => {
    this.setState({ usrnm: e })
    if (e == '') {
      this.setState({ visvalidusrnm: true })
      this.setState({ visibility: true })
    }
    else {
      this.setState({ visvalidusrnm: false })
    }
  }

  setPassword1 = (e) => {
    this.setState({ pwd1: e })
    if (e == '') {
      this.setState({ visvalidpwd1: true })
      this.setState({ visibility: true })
    }
    else {
      if (this.state.pwd2 == e) {
        this.setState({ visvalidpwd1: false })
        this.setState({ visibility: false })
      }
    }
  }
  setPassword2 = (e) => {
    this.setState({ pwd2: e })
    if (e == '') {
      this.setState({ visvalidpwd2: true })
      this.setState({ visibility: true })
    }
    else {
      if (this.state.pwd1 == e) {
        this.setState({ visvalidpwd2: false })
        this.setState({ visibility: false })
      }
      else {
        this.setState({ visvalidpwd2: true })
        this.setState({ visibility: true })
      }
    }
  }

  managePassword = () => {
    this.setState({ hidePassword: !this.state.hidePassword });
  }

  navigatefunc = () => {
    alert("You have successfully registered")
    this.props.navigation.navigate('HomeScreen')
  }
  render() {
    return (
      <ScrollView>
        <KeyboardAvoidingView keyboardVerticalOffset={0} style={{ padding: 5 }} enabled>
          <View style={styles.container}>
            <Text style={styles.heading}>Please fill in the below Details!!</Text>

            <Text style={styles.label}>Enter your Username</Text>
            <TextInput style={styles.input} onChangeText={this.setUsername}></TextInput>
            <Text style={(this.state.visvalidusrnm) ? styles.emailerror : styles.emailerror1}>Please enter a valid Username</Text>

            <Text style={styles.label}>Enter your Password</Text>
            <TextInput style={styles.input} onChangeText={this.setPassword1}></TextInput>
            <Text style={(this.state.visvalidpwd1) ? styles.emailerror : styles.emailerror1}>Please enter a valid Password</Text>

            <Text style={styles.label}>Confirm Password</Text>
            <TextInput style={styles.input} secureTextEntry={this.state.hidePassword} onChangeText={this.setPassword2}></TextInput>

            <TouchableOpacity style={styles.visibilityBtn} onPress={this.managePassword}>
              <Image source={(this.state.hidePassword) ? require('./hide.png') : require('./show.png')}
                style={styles.btnImage} />
            </TouchableOpacity>

            <Text style={(this.state.visvalidpwd2) ? styles.emailerror : styles.emailerror1}>Your Password does not Match</Text>

            <TouchableOpacity style={styles.submitButton} disabled={this.state.visibility}
              /*onPress={this.navigatefunc}*/
              onPress={() => Actions.HomeScreen()}>

              <Text style={styles.submitButtontxt}>Sign up Now</Text>
            </TouchableOpacity>
            {/*<Button title = 'signin' onPress={() => this.props.navigation.navigate('HomeScreen')} />*/}
          </View>
        </KeyboardAvoidingView>
      </ScrollView >
    );
  }
}

const styles = StyleSheet.create({
  container: {

    paddingTop: 18,
    paddingRight: 18,
    paddingLeft: 25,
    paddingBottom: 2
  },
  input: {
    width: 270,
    marginBottom: 15,
    marginLeft: 15,
    fontSize: 23,
    height: 50,
    borderColor: 'black',
    borderWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
  },
  label: {
    marginLeft: 15,
    marginTop: 10,
    fontSize: 17
  },
  heading: {
    alignItems: 'center',
    marginBottom: 30,
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    marginTop: 15,
  },
  submitButtontxt: {
    color: 'white',
    alignItems: 'center',
    fontSize: 15,
  },
  submitButton: {
    backgroundColor: 'black',
    padding: 8,
    margin: 15,
    width: 270,
    height: 40,
    alignItems: 'center',
    borderRadius: 15,
    marginTop: 20,
  },
  emailerror:
  {
    color: 'red',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 13,
  },
  emailerror1:
  {
    display: 'none'
  },
  visibilityBtn:
  {
    position: 'absolute',
    right: 2,
    padding: 5,
    paddingRight: 40
  },
  btnImage:
  {
    resizeMode: 'contain',
    height: '120%',
    width: '120%',
    paddingTop: 570,
    paddingRight: 40,
  }
});