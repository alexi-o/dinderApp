import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Button, CardSection, Spinner } from './components';
import Login from './views/LoginForm';
import Main from './views/Main';

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
        return <Main />
        // return (
        //   <CardSection>
        //     <Button onPress={() => firebase.auth().signOut()}>
        //       Log Out
        //     </Button>
        //   </CardSection>
      // );
      case false:
        return <Login />;
    }
  }

  render() {
    return (
      <View>
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
