import React from 'react';
import { AppRegistry } from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';

import HomeScreen from './screens/Home';
import MusicScreen from './screens/Music';

export default class GincanaLiberato extends React.Component {
  render() {
    return (
      <RootStack />
    );
  }
}

const RootStack = StackNavigator({
  Home: { screen: HomeScreen },
  Music: { screen: MusicScreen },
});

AppRegistry.registerComponent('GincanaLiberato', () => GincanaLiberato);