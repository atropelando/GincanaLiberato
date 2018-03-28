import React from 'react';
import { StyleSheet, Text, View, SectionList } from 'react-native';
import Songs from '../data/Songs';
import Header from '../ui/Header';
import ListItem from '../ui/ListItem';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Músicas Gincana Liberato',
  }
  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.1)',
        }}
      />
    );
  };

  render() {
    const sample = ["ABC", "DEF", "GHI", "JKL"];

    return (
      <View style={styles.container}>
        <SectionList
          sections={ Songs }
          keyExtractor={ (p, i) => i }
          renderItem={({item}) => <ListItem item={ item } navigation={ this.props.navigation } /> }
          renderSectionHeader={({section}) => <Header name={section.meta.displayName} color={section.meta.color} />}
          ItemSeparatorComponent={ this.renderSeparator }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
