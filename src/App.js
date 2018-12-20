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
    );
  }
}

export default App;