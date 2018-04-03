import React from 'react';
import { StyleSheet, Text, View, SectionList } from 'react-native';
import Songs from '../data/Songs';
import Header from '../ui/Header';
import ListItem from '../ui/ListItem';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Músicas Gincana Liberato',
  }

  constructor() {
    super();
    this.state = { currentSection: {} };
  }

  handleCollapse(section) {
    if(section === this.state.currentSection)
      return _ => this.setState({ currentSection: {} })
    else
      return _ => this.setState({ currentSection: section })
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
    return (
      <View style={styles.container}>
        <SectionList
          style={ styles.sectionList }
          sections={ Songs }
          keyExtractor={ (p, i) => i }
          renderItem={({item, section}) => {
            if(section === this.state.currentSection)
              return <ListItem item={ item } navigation={ this.props.navigation } />
            else
              return null
          }}
          renderSectionHeader={({section}) =>
            <Header name={section.meta.displayName}
              color={section.meta.color}
              onTouch={ this.handleCollapse(section) } 
            />}
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
  sectionList: {
    //backgroundColor: "#FFFFFF",
  }
});
