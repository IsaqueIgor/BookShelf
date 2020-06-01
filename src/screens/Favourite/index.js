import React, {Component} from 'react';
import {View, Text, Image, SafeAreaView, FlatList} from 'react-native';

import CardBook from '../../components/CardBook';
import styles from './styles';
import books from '../../mocks/books';

export default class Favourite extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>My Favourites</Text>
        </View>

        <FlatList
          data={books}
          style={styles.favList}
          numColumns={2}
          renderItem={({item}) => <CardBook {...item} />}
          keyExtractor={(item, index) => index.toString()}
        />
      </SafeAreaView>
    );
  }
}
