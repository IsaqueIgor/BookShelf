import React, {Component} from 'react';
import {View, Text, TextInput, SafeAreaView, StatusBar} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {FlatList} from 'react-native-gesture-handler';

import styles from './styles';

export default class Explore extends Component {
  constructor() {
    super();
    this.state = {
      query: null,
      dataSource: [],
    };
  }

  filterBook = (event) => {
    let query = event.nativeEvent.text;
    this.setState({
      query: query,
    });
  };

  render() {
    return (
      <>
        <StatusBar backgroundColor={'#FFF'} />
        <SafeAreaView style={styles.container}>
          <View style={styles.header}>
            <View style={styles.searchSection}>
              <FontAwesome
                style={styles.searchIcon}
                name="rocket"
                size={20}
                color="#000"
              />
              <TextInput
                placeholder="Search here"
                placeholderTextColor="#9F9F9F"
                value={this.state.query}
                onChangeText={this.filterBook.bind(this)}
                style={styles.searchInput}
              />
            </View>
          </View>
        </SafeAreaView>
      </>
    );
  }
}
