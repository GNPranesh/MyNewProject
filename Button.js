import React, {Component} from 'react';
import {View,Button,Alert} from 'react-native';
//import { StackNavigator,AppRegistry } from 'react-navigation';
import Forms from './forms';

btnalert = () => {
    Alert.alert('My First Button');
    
    }


class Btn extends Component{

 
    render(){
    return(
        <View>
        <Button onPress= {btnalert} color= 'red' title= 'Click Me'></Button>
        <Forms></Forms>
        </View>
    )
 }
}

export default Btn