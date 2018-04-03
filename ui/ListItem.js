import React from 'react';
import { Animated, StyleSheet, Text, TouchableOpacity } from 'react-native';

export default class ListItem extends React.Component {
  state = {
    height: new Animated.Value(0),
    opacity: new Animated.Value(0),
  }

  componentDidMount() {
    Animated.parallel([
      Animated.timing(
        this.state.height,
        {
          toValue: 44,
          duration: 250,
        }
      ),
      Animated.timing(
        this.state.opacity,
        {
          toValue: 1,
          duration: 250,
        }
    )]).start();
  }

  _onPressButton() {
    const { navigate } = this.props.navigation;
    navigate('Music', { music: this.props.item })
  }

  render() {
    return (
      <TouchableOpacity onPress={this._onPressButton.bind(this)}>
        <Animated.View style={{
          height: this.state.height,
          opacity: this.state.opacity,
        }}>
          <Text style={ styles.item }>{ this.props.item.title }</Text>
        </Animated.View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    padding: 10,
    fontSize: 18,
  },
});
