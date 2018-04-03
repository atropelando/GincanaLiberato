import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class Header extends React.Component {
  render() {
    return (
      <TouchableOpacity style={{ backgroundColor: this.props.color }} onPress={ this.props.onTouch }>
        <View style={ styles.container }>
            <Text style={styles.title}>{ this.props.name }</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = {
  container: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 18,
  },
};
