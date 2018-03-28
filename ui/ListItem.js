import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default class ListItem extends React.Component {
  _onPressButton() {
    const { navigate } = this.props.navigation;
    navigate('Music', { music: this.props.item })
  }

  render() {
    return (
      <TouchableOpacity onPress={this._onPressButton.bind(this)}>
        <Text style={ styles.item }>{ this.props.item.title }</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
