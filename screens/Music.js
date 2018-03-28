import React from 'react';
import { StyleSheet, View } from 'react-native';
import MusicDisplay from '../ui/MusicDisplay';

export default class MusicScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;
    
    return {
      title: params ? params.music.title : 'Alguma música',
    }
  };

  render() {
    const music = this.props.navigation.state.params.music;
    return (
      <View style={styles.container}>
        <MusicDisplay music={ music } />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
