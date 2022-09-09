/*
* Sets up the carousel (provided by React Native import) which is used to display the study tips.
*/

import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, FlatList, Animated } from 'react-native';
import CarouselItem from '../components/CarouselItem';
import { data } from "../assets/data";
import Carousel, {Pagination} from 'react-native-snap-carousel';

export const SLIDER_WIDTH = Dimensions.get('window').width + 30; // width of carousel
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8); // width of each item witin carousel

const CarouselFunctionality = () => {
    const [index, setIndex] = useState(0);
    const isCarousel = useRef(null);
    return (
      <View style={styles.container}>
        {/* Carousel */}
        <Carousel
          ref={isCarousel}
          data={data}
          renderItem={CarouselItem}
          sliderWidth={SLIDER_WIDTH}
          itemWidth={ITEM_WIDTH}
          onSnapToItem={index => setIndex(index)}
        />
        {/* Pagination i.e. the dots at the bottom of the carousel used to show how many items are there and to
        jump between items */}
        <Pagination
          dotsLength={data.length}
          activeDotIndex={index}
          containerStyle={{margin: 0}}
          carouselRef={isCarousel}
          dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 5,
            marginHorizontal: 8,
            backgroundColor: '#8639d4',
          }}
          tappableDots={true}
          inactiveDotStyle={{
            backgroundColor: 'black',
            // Styles for inactive dots here
          }}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
        />
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        alignItems: "center",
  
    }, 
});

export default CarouselFunctionality;

