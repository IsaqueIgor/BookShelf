import React, {useState, useEffect} from 'react';
import {
  View,
  Dimensions,
  FlatList,
  Text,
  Animated,
  ScrollView,
} from 'react-native';
import {Chip} from 'react-native-paper';

const {width, heigth} = Dimensions.get('window');
//let flatlist;

import styles from './styles';
import DiscoverItem from './discoverItem';

import images from '../../mocks/images';

const categories = [
  {
    id: 1,
    name: 'Fiction',
  },
  {
    id: 2,
    name: 'Best-Sellers',
  },
  {
    id: 3,
    name: 'Academic',
  },
  {
    id: 4,
    name: 'Romance',
  },
  {
    id: 5,
    name: 'Thriller',
  },
];

// function infiniteScroll(imageList) {
//   const numberOfData = imageList.length;
//   let scrollValue = 0,
//     scrolled = 0;

//   setInterval(function () {
//     scrolled++;
//     if (scrolled < numberOfData) {
//       scrollValue = scrollValue + width;
//     } else {
//       scrollValue = 0;
//       scrolled = 0;
//     }

//     this.flatlist
//       .getNode()
//       .scrollToOffset({animated: true, offset: scrollValue});
//   }, 3000);
// }

const Carousel = () => {
  const scrollX = new Animated.Value(0);
  let position = Animated.divide(scrollX, width);
  const [imageList, setDataList] = useState(images);

  useEffect(() => {
    setDataList(images);
    // infiniteScroll(imageList);
  }, [imageList]);

  if (images && images.length) {
    return (
      <View>
        <Text style={styles.title}>Discover</Text>

        <View>
          <ScrollView showsHorizontalScrollIndicator={false} horizontal>
            <View style={{paddingTop: 11, flexDirection: 'row'}}>
              {categories.map((category) => (
                <Chip mode="outlined" icon="book" style={styles.categoryBox}>
                  {category.name}
                </Chip>
                // <View key={category.id} style={styles.categoryBox}>
                //   <Text style={{color: ''}}>{category.name}</Text>
                // </View>
              ))}
            </View>
          </ScrollView>
        </View>

        <FlatList
          data={images}
          // ref={(flatlist) => {
          //   this.flatList = flatlist;
          // }}
          keyExtractor={(item, index) => 'key' + index}
          horizontal
          pagingEnabled
          scrollEnabled
          snapToAlignment="center"
          scrollEventThrottle={16}
          decelerationRate={'fast'}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => {
            return <DiscoverItem item={item} />;
          }}
          onScroll={Animated.event([
            {nativeEvent: {contentOffset: {x: scrollX}}},
          ])}
        />

        <View style={styles.dotView}>
          {images.map((_, i) => {
            let opacity = position.interpolate({
              inputRange: [i - 1, i, i + 1],
              outputRange: [0.3, 1, 0.3],
              extrapolate: 'clamp',
            });
            return (
              <Animated.View
                key={i}
                style={{
                  opacity,
                  height: 10,
                  width: 10,
                  backgroundColor: '#595959',
                  margin: 2,
                  borderRadius: 5,
                }}
              />
            );
          })}
        </View>
      </View>
    );
  }
  return null;
};

export default Carousel;
