import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';

export default function CardBook(props) {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback>
        <View key={props.key} style={styles.card}>
          <Image style={styles.img} source={props.img} />
          <Text style={styles.bookTitle}>{props.title}</Text>
          <Text style={styles.bookAuthor}>{props.author}</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  img: {
    width: 115,
    height: 152,
  },
  card: {
    width: 124,
    height: 192,
    marginLeft: 31,
  },
  bookTitle: {
    fontFamily: 'montserrat-regular',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#121212',
    marginLeft: 10,
  },
  bookAuthor: {
    fontFamily: 'roboto-regular',
    color: 'rgba(155,155,155,1)',
    marginLeft: 10,
  },
});
