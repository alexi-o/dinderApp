import React, { Component } from 'react';
import { View, Image, Button } from 'react-native';
import firebase from 'firebase';

var Picture = require('../images/dinder.png');
//Logged out header component
class Header2 extends Component {
	render(){
		return (
		<View>
		<Image 
	        style={{resizeMode: 'contain', height: 100, marginLeft: -20, backgroundColor: 'skyblue'}}
	        source={Picture}
	      />
	  <Button onPress={() => firebase.auth().signOut()} title={'Log Out'} />
	  </View>
	     )
		}
	}

export default Header2;