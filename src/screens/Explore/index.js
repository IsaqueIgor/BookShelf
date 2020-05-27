import React, {Component} from 'react';
import {View, Text} from 'react-native';

import styles from './styles';

export default class Explore extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Explore</Text>
        </View>
      </View>
    );
  }
}
