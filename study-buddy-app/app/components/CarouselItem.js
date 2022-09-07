import React from 'react'
import { View, StyleSheet, Text, Image, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

const CarouselItem = ({ item }) => {
  return (
    <View
      style={{
        borderWidth: 1,
        padding: 20,
        borderRadius: 20,
        alignItems: 'center',
        backgroundColor: 'white',
      }}>
      {/* <Image source={{uri: item.url}} style={{width: 100, height: 100}} /> */}
      <Text style={{marginVertical: 10, fontSize: 20, fontWeight: 'bold'}}>
        {item.name}
      </Text>
    </View>
  );
}

export default CarouselItem