import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import firebase from 'firebase';
import { Button, CardSection, Spinner } from './components';
import Login from './views/LoginForm';
import Main from './views/Main';
import Tinder from './views/Tinder';
import Header1 from './components/Header1';
import Header2 from './components/Header2';

var Picture = require('./images/dinder.png');
var Picture2 = require('./images/title.jpg');

class App extends Component {
  state = { loggedIn: null }

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyBhBKFRgwCjq93eG84eXluleXkmc5nFcdY",
      authDomain: "dindr-96375.firebaseapp.com",
      databaseURL: "https://dindr-96375.firebaseio.com",
      storageBucket: "dindr-96375.appspot.com",
      messagingSenderId: "304556164835"
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return <Tinder />
      case false:
        return <Login />;
    }
  }

  renderHeader() {
    switch (this.state.loggedIn) {
      case true:
        return <Header2 />
      case false:
        return <Header1 />
    }
  }

  render() {
    return (
    <View>
        {this.renderHeader()}
      <View style={{backgroundColor: 'skyblue'}}>
        {this.renderContent()}
      </View>
    </View>
    );
  }
}

export default App;
