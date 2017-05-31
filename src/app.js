import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import firebase from 'firebase';
import { Button, CardSection, Spinner } from './components';
import Login from './views/LoginForm';
import Main from './views/Main';

var Picture = require('./images/dinder.png');

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
        this.setState({ loggedIn: false });
      } else {
        this.setState({ loggedIn: true });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case false:
        return <Main />
      case true:
        return <Login />;
    }
  }

  render() {
    return (
    <View>
      <Image 
      style={{resizeMode: 'contain', height: 100, marginTop: 20, marginLeft: -20, backgroundColor: 'skyblue'}}
      source={Picture}
      />
      <View style={{backgroundColor: 'skyblue'}}>
        {this.renderContent()}
      </View>
      </View>
    );
  }
}

export default App;
