import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class MusicDisplay extends React.Component {
  render() {

    return (
      <View style={styles.container}>
        <Text style={styles.lyrics}> { this.props.music.lyrics }</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  lyrics: {
    fontSize: 20,
    lineHeight: 30,
  },
});
