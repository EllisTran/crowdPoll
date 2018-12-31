<<<<<<< HEAD
import React, {Component} from 'react';
import {Platform, Text, View} from 'react-native';
import { Provider } from 'react-redux';
import Router from './Router';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

class App extends Component {
  componentWillMount() {
    //set up firebase here
  }

  render() {
    return (
      <Router/>
=======
import React, { Component } from 'react';
import { Provider } from 'react-redux';
// import { YellowBox } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import Router from './Router';
import reducers from './Reducers';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyB2Gcbiv0jhBTB37lDkw2WBJUfV_Hjh3yo',
      authDomain: 'manager-260a6.firebaseapp.com',
      databaseURL: 'https://manager-260a6.firebaseio.com',
      projectId: 'manager-260a6',
      storageBucket: 'manager-260a6.appspot.com',
      messagingSenderId: '620398697611'
    };
    firebase.initializeApp(config);
  }
  /* <Provider store ={store} > Makes store available through all components*/
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}> 
        <Router />
      </Provider>
>>>>>>> initial commit
    );
  }
}

<<<<<<< HEAD
export default App;
=======
export default App;
>>>>>>> initial commit
