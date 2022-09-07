import React from 'react'
import { View, StyleSheet, Text, Image, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

const CarouselItem = ({ item }) => {
  return (
    <View
      style={{
        borderWidth: 3,
        height: 175,
        borderRadius: 20,
        alignItems: 'center',
        backgroundColor: 'white',
        justifyContent: "center",
        
      }}>
      {/* <Image source={{uri: item.url}} style={{width: 100, height: 100}} /> */}
      <Text style={{fontSize: 20, fontWeight: 'bold', textAlign: 'center'}}>
        {item.name}
      </Text>
    </View>
  );
}

export default CarouselItem;