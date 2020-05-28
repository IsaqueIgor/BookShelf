import React, {Component} from 'react';
import {View, Text, SafeAreaView} from 'react-native';

import styles from './styles';

export default class Favourite extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Favourite</Text>
        </View>
      </SafeAreaView>
    );
  }
}
