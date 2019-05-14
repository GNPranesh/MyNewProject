import React, { Component } from 'react'
import { SearchBar, Header, Divider } from 'react-native-elements';
import { View, TouchableOpacity, Text, TextInput, StyleSheet, Button, Icon, Image } from 'react-native'
import { KeyboardAvoidingView, ScrollView } from 'react-native';
import { Actions } from "react-native-router-flux";
import Retail from './Friends'

export default class Addtocart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            val: 0,
        }
    }

    addval = () => { this.setState({ val: this.state.val + 1 }) }
    minusval = () => { this.setState({ val: this.state.val - 1 }) }
    remove = () => 
    {
     this.setState  ({val:0,selectvalue:''})
     Actions.AddtocartScreen();
    }

    // navigatefunc = () => {
    // alert("You have successfully added to Cart")
    // /*this.props.navigation.navigate('FriendsScreen')*/
    // Actions.FriendsScreen({ })
    // }

    render() {
        return (
            <View >
                <Text style={styles.textstyle}>{(this.props.selectvalue)}</Text>
                <View style={styles.visibilityBtn}>
                    <TouchableOpacity onPress={this.minusval} hitSlop={{top: 0, bottom: 0, left: 0, right: 0}}>
                        <Image source={require('./minus.jpg')} style={styles.btnImage} />
                    </TouchableOpacity>
                    
                    
                    <TouchableOpacity onPress={this.addval}>
                        <Image source={require('./plus.jpg')} style={styles.btnImage} />
                    </TouchableOpacity>
                </View>
                <Text style={styles.textstyle2}>{this.state.val}</Text>
                <View>
                <TouchableOpacity
                    onPress={this.remove}>
                    <Text style={styles.submitButton2}>Remove Selected Item</Text>
                </TouchableOpacity>
                </View>
                <TouchableOpacity
                    style={styles.submitButton}
                    onPress={() => Actions.FriendsScreen()}>
                    <Text style={styles.submitButtonText}> Click Here to Add to Cart! </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    visibilityBtn:
    {
        flexDirection: "row",
        position: 'absolute',
        alignItems: 'center',
        marginTop:-10
    },

    btnImage:
    {

        height: '25%',
        width: '30%',
        paddingTop: 50,
        paddingLeft: 40,
        marginTop: 120,
        marginLeft: 90,

    },
    submitButton: {
        backgroundColor: 'black',
        padding: 8,
        marginLeft: 30,
        width: 300,
        height: 40,
        alignItems: 'center',
        borderRadius: 15,
        marginTop: 50,

    },
    submitButtonText: {
        color: 'white',
        alignItems: 'center',
        fontSize: 15,
    },
    textstyle: {
        textAlign: 'center',
        fontSize: 30,
        marginTop: 35
    },
    textstyle2: {
        textAlign: 'center',
        fontSize: 30,
        marginTop: 40
    },
    submitButton2:{
        alignItems: 'center',
        fontSize: 17,
        marginTop:40,
        marginLeft:100,
        color: 'red'
    }
});


