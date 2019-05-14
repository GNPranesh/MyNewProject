import React, { Component } from 'react'
import { SearchBar, Header, Divider } from 'react-native-elements';
import { View, TouchableOpacity, Text, TextInput, StyleSheet, Button, Icon, Image } from 'react-native'
import { KeyboardAvoidingView, ScrollView } from 'react-native';
import { Actions } from "react-native-router-flux";


class Retail extends Component {
  constructor()
  {
    super();
    this.state = {
      value1:"Milk",
      value2:"RCB",
      value3:"Corn",
      value4:"Condom",
      value5:"Dairy Milk",
      value6:"Colgate",
      value7:"Water Can",
      value8:"Man United",
    }
  }


  state = { search: '', };

  updateSearch = search => {
    this.setState({ search });
  };
  navigate = () =>
  {
    Actions.HomeScreen();
  }

  render() {
    const { search } = this.state;

    return (
      <ScrollView>

        <Header containerStyle={{ backgroundColor: 'black', height: 75 }}

          leftComponent={{ icon: 'home', color: '#fff', size: 45, onPress:this.navigate}}
          centerComponent={{ text: 'Freshiterian', style: { color: '#fff', fontSize: 30 } }}
          rightComponent={{ icon: 'shopping-cart', color: '#fff', size: 45, } }
          barStyle='light-content' />

        <SearchBar placeholder="Type Here..." onChangeText={this.updateSearch}  value={search}
          round={true}
          containerStyle={{
            backgroundColor: '#fff',
            borderWidth: 0, borderTopWidth: 0, borderBottomWidth: 0,
            width: '95%', marginLeft: 10, marginRight: -5
          }}
          lightTheme={false} />
        <Divider style={{ backgroundColor: 'black', borderWidth: 1 }}></Divider>


        <TouchableOpacity style={{ flexDirection: "row", }} 
         
          /*onPress={() => this.props.navigation.navigate('AddtocartScreen')}*/
          onPress={() => Actions.AddtocartScreen({ selectvalue: this.state.value1 })}>
          <Image source={require('./aavinmilk.jpg')} style={styles.btnImage} ></Image>
          <Text style={styles.txtformat}>Click Here to Buy Now {"\n"}Just at Rs.25 Only/-</Text>
        </TouchableOpacity>

        <Divider style={{ backgroundColor: 'black', borderWidth: 1 }}></Divider>



        <TouchableOpacity style={{ flexDirection: "row", }}
        onPress={() => Actions.AddtocartScreen({ selectvalue: this.state.value2 })}>
          <Image source={require('./rcb.jpg')} style={styles.btnImage} ></Image>
          <Text style={styles.txtformat}>Click Here to Buy Now {"\n"}Sorry you cannot buy like CSK</Text>
        </TouchableOpacity>

        <Divider style={{ backgroundColor: 'black', borderWidth: 1 }}></Divider>

        <TouchableOpacity style={{ flexDirection: "row", }}
        onPress={() => Actions.AddtocartScreen({ selectvalue: this.state.value3 })}>
          <Image source={require('./cornflakes.jpg')} style={styles.btnImage} ></Image>
          <Text style={styles.txtformat}>Click Here to Buy Now {"\n"} Just at Rs.99 only/-</Text>

        </TouchableOpacity>

        <Divider style={{ backgroundColor: 'black', borderWidth: 1 }}></Divider>


        <TouchableOpacity style={{ flexDirection: "row", }}
        onPress={() => Actions.AddtocartScreen({ selectvalue: this.state.value4 })}>
          <Image source={require('./condom.jpg')} style={styles.btnImage} ></Image>
          <Text style={styles.txtformat}>Click Here to Buy Now {"\n"}Just at Rs.2 Only/-{"\n"}(One time Used)</Text>
        </TouchableOpacity>

        <Divider style={{ backgroundColor: 'black', borderWidth: 1 }}></Divider>


        <TouchableOpacity style={{ flexDirection: "row", }}
        onPress={() => Actions.AddtocartScreen({ selectvalue: this.state.value5 })}>
          <Image source={require('./dairymilk.jpg')} style={styles.btnImage} ></Image>
          <Text style={styles.txtformat}>Click Here to Buy Now {"\n"}Just at Rs.250 Only/-</Text>
        </TouchableOpacity>

        <Divider style={{ backgroundColor: 'black', borderWidth: 1 }}></Divider>


        <TouchableOpacity style={{ flexDirection: "row", }}
        onPress={() => Actions.AddtocartScreen({ selectvalue: this.state.value6 })}>
          <Image source={require('./toothpaste.jpg')} style={styles.btnImage} ></Image>
          <Text style={styles.txtformat}>Click Here to Buy Now{"\n"}Just at Rs.20 Only/-</Text>
        </TouchableOpacity>

        <Divider style={{ backgroundColor: 'black', borderWidth: 1 }}></Divider>


        <TouchableOpacity style={{ flexDirection: "row", }}
        onPress={() => Actions.AddtocartScreen({ selectvalue: this.state.value7 })}>
          <Image source={require('./watercan.jpg')} style={styles.btnImage} ></Image>
          <Text style={styles.txtformat}>Click Here to Buy Now{"\n"}We dont charge for Water</Text>
        </TouchableOpacity>

        <Divider style={{ backgroundColor: 'black', borderWidth: 1 }}></Divider>


        <TouchableOpacity style={{ flexDirection: "row", }}
        onPress={() => Actions.AddtocartScreen({ selectvalue: this.state.value8 })}>
          <Image source={require('./manutd.jpg')} style={styles.btnImage} ></Image>
          <Text style={styles.txtformat}>Click Here to Buy Now{"\n"}U cant buy United {"\n"}We are unbuyables</Text>
        </TouchableOpacity>

        <Divider style={{ backgroundColor: 'black', borderWidth: 1 }}></Divider>

      </ScrollView>
    );
  }
}

export default Retail;

const styles = StyleSheet.create({
  btnImage:
  {

    resizeMode: 'center',
    height: 120,
    width: 120,
    padding: 40,
    // paddingTop: 40,
    // paddingRight: 40,

  },
  txtformat:
  {
    flex: 1,
    paddingTop: 40,
    paddingLeft: 40,
    fontWeight: 'bold',
    fontSize: 18
  }
})