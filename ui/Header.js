import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class Header extends React.Component {
  render() {
    return (
      <TouchableOpacity onPress={ this.props.onTouch }>
        <View style={{ ...styles.container, backgroundColor: this.props.color }}>
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
    // borderTopWidth: 2,
    // borderColor: 'rgba(0, 0, 0, 0.05)',
  },
  title: {
    color: '#fff',
    fontSize: 18,
  },
};
