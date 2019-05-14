import React, { Component } from 'react'
import { Alert } from 'react-native'
import { View, TouchableOpacity, Text, TextInput, StyleSheet, Button, Icon, Image } from 'react-native'
import { KeyboardAvoidingView, ScrollView } from 'react-native';
import { Actions } from "react-native-router-flux";

//import PasswordInputText from 'react-native-hide-show-password-input';

class Forms extends Component {

    constructor() {
        super();
        this.state = { email: '', password: '', 
        hidePassword: true, 
        visvalidemail:false , 
        visvalidpass:false,
        hideBtn1:true,
        hideBtn2:true
      }
    }

    handleEmail = (t) => {
        this.setState({ email: t })
        if (t == "") 
        {
            this.setState({ visvalidemail: true })
            this.setState({hideBtn1:true})
        }
        else {
            this.setState({ visvalidemail: false })
            this.setState({hideBtn1:false})
        }
    }

    handlePassword = (t) => {
        this.setState({ password: t })
        if (t == "") {
            this.setState({ visvalidpass: true })
            this.setState({hideBtn2:true})
        }
        else {
            this.setState({ visvalidpass: false })
            this.setState({hideBtn2:false})
        }
    }

    handleSave = (t, u) => {
        Alert.alert('Email:' + t + '- Password:' + u)

    }
    managePassword = () => {
        this.setState({ hidePassword: !this.state.hidePassword });
    }
    render() {

        return (

            <ScrollView>
                <KeyboardAvoidingView keyboardVerticalOffset={0} style={{ padding: 5 }} enabled>
                    <View style={styles.container}>

                        <Text style={styles.head}>GO FOR IT!</Text>

                        <Text style={styles.label}>Username</Text>

                        <TextInput style={styles.input}
                            keyboardType='email-address'
                            onChangeText={this.handleEmail}></TextInput>

                        <Text style={(this.state.visvalidemail) ? styles.emailerror : styles.emailerror1}>Please enter a valid email</Text>

                        <Text style={styles.label}>Password</Text>

                        <TextInput style={styles.input}
                            secureTextEntry={this.state.hidePassword}
                            maxHeight={70}
                            onChangeText={this.handlePassword}>
                        </TextInput>


                        <TouchableOpacity style={styles.visibilityBtn} onPress={this.managePassword}>
                            <Image source={(this.state.hidePassword) ? require('./hide.png') : require('./show.png')}
                                style={styles.btnImage} />
                        </TouchableOpacity>

                        <Text style={(this.state.visvalidpass) ? styles.emailerror : styles.emailerror1}>Please enter a valid password</Text>

                        <TouchableOpacity
                            style={styles.submitButton}
                            disabled={this.state.hideBtn1 && this.state.hideBtn2}
                            /*onPress={() => this.props.navigation.navigate('FriendsScreen')}*/
                            onPress={() => Actions.FriendsScreen()}>
                            <Text style={styles.submitButtonText}> NEXT </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            /*onPress={() => this.props.navigation.navigate('SigninScreen')}*/
                            onPress={() => Actions.SigninScreen()}>
                            <Text style={styles.submitButton2}>Not a Member? Sign up Now</Text>
                        </TouchableOpacity>
                    </View>
                </KeyboardAvoidingView>
            </ScrollView>

        )
    }

}

export default Forms;

const styles = StyleSheet.create({
    container: {
        paddingTop: 18,
        paddingRight: 18,
        paddingLeft: 18,
        paddingBottom: 2
    },
    input: {
        textAlign: 'center',
        width: 290,
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
    head: {
        alignItems: 'center',
        marginBottom: 30,
        fontWeight: 'bold',
        fontSize: 30,
        textAlign: 'center',
        marginTop: 15,
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
        paddingTop: 428,
        paddingRight: 40,
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
    submitButton: {
        backgroundColor: 'black',
        padding: 8,
        margin: 15,
        width: 300,
        height: 40,
        alignItems: 'center',
        borderRadius: 15,
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