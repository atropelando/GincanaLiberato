import React from 'react';
import { StyleSheet, Text, View, ScrollView, Linking, TouchableOpacity } from 'react-native';

export default class MusicDisplay extends React.Component {
  handleOpenVideo() {
    Linking.openURL(this.props.music.video).catch(err => console.error('An error occurred', err));
  }
  render() {

    return (
      <ScrollView style={styles.container}>
        { this.props.music.original ? <Text style={styles.original}>{ this.props.music.original }</Text> : null}
          <Text style={styles.lyrics}> { this.props.music.lyrics }</Text>
          { this.props.music.video ? 
            <TouchableOpacity onPress={this.handleOpenVideo.bind(this)}>
              <Text style={ styles.video }>Ver no YouTube</Text>
            </TouchableOpacity>
            : null
          }
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  lyrics: {
    fontSize: 20,
    lineHeight: 30,
    textAlign: 'center',
    marginTop: 30,
  },
  original: {
    textAlign: 'center',
    color: "rgba(0, 0, 0, 0.5)",
    marginTop: 10,
  },
  video: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: "#F5F5F5",
    backgroundColor: "rgba(255, 0, 0, 0.75)",
    marginLeft: 40,
    marginRight: 40,
    marginTop: 20,
    marginBottom: 20,
    padding: 10,
  }
});
