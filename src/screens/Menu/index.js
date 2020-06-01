import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

import styles from './styles';

export default class Menu extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Preferences</Text>
        </View>
        <View style={styles.optionsContainer}>
          <TouchableOpacity style={styles.optionRow} onPress={() => {}}>
            <Text style={styles.optionName}>Account</Text>
            <Entypo name="chevron-right" size={22} />
          </TouchableOpacity>

          <View style={styles.line} />
          <TouchableOpacity style={styles.optionRow} onPress={() => {}}>
            <Text style={styles.optionName}>Settings</Text>
            <Entypo name="chevron-right" size={22} />
          </TouchableOpacity>

          <View style={styles.line} />
          <TouchableOpacity style={styles.optionRow} onPress={() => {}}>
            <Text style={styles.optionName}>Genres Preferences</Text>
            <Entypo name="chevron-right" size={22} />
          </TouchableOpacity>

          <View style={styles.line} />
          <TouchableOpacity style={styles.optionRow} onPress={() => {}}>
            <Text style={styles.optionName}>Logout</Text>
            <Entypo name="chevron-right" size={22} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
