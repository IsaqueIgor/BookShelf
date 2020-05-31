import React, {Component} from 'react';
import {
  View,
  ScrollView,
  TextInput,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import Discover from '../../components/Discover';
import Popular from '../../components/PopularScroll';

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
            <View style={styles.inputSearchContainer}>
              <TextInput
                style={styles.inputSearch}
                placeholder="Search here"
                placeholderTextColor="#9F9F9F"
                value={this.state.query}
              />
              <TouchableOpacity style={styles.buttonSearch} onPress={() => {}}>
                <FontAwesome name="search" color="gray" size={16} />
              </TouchableOpacity>
            </View>
          </View>

          <ScrollView alwaysBounceVertical={true} scrollEventThrottle={16}>
            <Discover />
            <Popular />
            <Popular />
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
}
