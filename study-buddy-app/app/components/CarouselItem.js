import React from 'react'
import { View, StyleSheet, Text, Image, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

const CarouselItem = ({ item }) => {
    return (
    <View style={styles.container}>
        <Image style={{width: 100, height: 100}}source={{ uri: item.url }} />
            <Text> {item.title} </Text>
            <Text> {item.description} </Text>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      backgroundColor: "white",
      padding: 40,
      justifyContent: "flex-start",
    //   width: 200,
  
    },
    title: {
      fontWeight: "bold",
      fontSize: 40,
      fontFamily: "sans-serif-condensed",
      lineHeight: 60,
      marginTop: 15,
      borderWidth: 5,
      padding: 20,
      borderRadius: 5,
      borderColor: "#8639d4",
      textAlign: "center",
    },
    welcomebox: {
     // fontWeight: "bold",
      fontSize: 25,
      fontFamily: "sans-serif-condensed",
      //lineHeight: 60,
      marginTop: 50,
      borderWidth: 5,
      padding: 20,
      borderRadius: 5,
      borderColor: "#8639d4",
      textAlign: "center",
    },
    bolded: {
      fontWeight: "bold",
      paddingBottom: 60,
    },
    
});

export default CarouselItem