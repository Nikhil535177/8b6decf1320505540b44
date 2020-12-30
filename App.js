/**
 * Asteroid Test React Native App
 *
 */

import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';
import {
  NavigationContainer,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import RootStackScreen from './app/screens/RootStackNavigator/RootStackScreen';
import AsyncStorage from '@react-native-community/async-storage';
import * as Animatable from 'react-native-animatable';
import { Provider } from 'react-redux';
import configureStore from './app/redux/config/store/index';
import * as IMG_CONST from './app/theme/ImageConstants';
import { CommonStyles } from './app/theme/ApplicationStyles';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      store: configureStore(() => {
      }).store
    };
  }

  render() {
    return (
      <Provider store={this.state.store}>
        <NavigationContainer>
          <RootStackScreen isLoggedIn={this.state.isLoggedIn} isOnBoardingCompleted={this.state.isOnBoardingCompleted} toggleTheme={this.toggleTheme} />
        </NavigationContainer>
      </Provider>
    );
  }
}

export default App;
