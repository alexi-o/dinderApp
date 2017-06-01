import React, { Component } from 'react';
import { View, Image } from 'react-native';

var Picture = require('../images/dinder.png');
//Logged in header component
class Header1 extends Component {
	render(){
		return (
		<Image 
	        style={{resizeMode: 'contain', height: 100,  marginLeft: -20, backgroundColor: 'skyblue'}}
	        source={Picture}
	      />
	    )
		}
	}

export default Header1;