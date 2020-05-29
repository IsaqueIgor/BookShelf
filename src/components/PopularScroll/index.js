import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  FlatList,
  TouchableWithoutFeedback,
} from 'react-native';
import {Surface} from 'react-native-paper';

import styles from './styles';

import books from '../../mocks/books';

const PopularScroll = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Popular</Text>
        <Text style={styles.moreText}>More</Text>
      </View>

      <FlatList
        data={books}
        horizontal={true}
        alwaysBounceHorizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index}) => {
          return (
            <View style={styles.card}>
              <TouchableWithoutFeedback>
                <Surface style={styles.surface}>
                  <ImageBackground source={item.img} style={styles.bookImg} />
                </Surface>
              </TouchableWithoutFeedback>
              <Text style={styles.bookTitle}>{item.title}</Text>
              <Text style={styles.bookAuthor}>{item.author}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default PopularScroll;
