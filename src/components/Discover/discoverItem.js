import React from 'react';
import {View, Text, Image} from 'react-native';

import styles from './styles';

const CarouselItem = ({item}) => {
  return (
    <View style={styles.cardView}>
      <Image style={styles.image} source={{uri: item}} />
      <View style={styles.textView}>
        <Text style={styles.itemTitle}></Text>
        <Text style={styles.itemDescription}></Text>
      </View>
    </View>
  );
};

export default CarouselItem;
