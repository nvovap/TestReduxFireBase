/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Text} from 'react-native';


import { Provider } from 'react-redux'
import { store } from './redux/app-redux';


export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Text>My Sample Project</Text>
        </View>
      </Provider>
    );
  }
}


