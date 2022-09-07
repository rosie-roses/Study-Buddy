import React from 'react'
import { View, StyleSheet, Text, Image, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

const CarouselItem = ({ item }) => {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>
        {item.name}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    height: 175,
    alignItems: 'center',
    backgroundColor: '#8639d4',
    justifyContent: "center",
    borderRadius: 20
  },
  itemText: {
    padding: 15,
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },

});

export default CarouselItem;