import React from "react";
import {
  View,
  Text,
  StyleSheet,
} from "react-native";
import CarouselFunctionality from "../components/CarouselFunctionality";
import { data } from "../assets/data";

const StudyTipsPageScreen = ({ props }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Study Tips</Text>  
      <CarouselFunctionality data={data}/>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      padding: 40,
      backgroundColor: "white",
      justifyContent: "flex-start",
      flex: 1,
    },

    title: {
      fontWeight: "bold",
      fontSize: 32,
      fontFamily: "sans-serif-condensed",
      letterSpacing: 1,
      textAlign: "center",
      marginTop: 175,
      marginBottom: 30,
      lineHeight: 40,
    },
    welcomebox: {
      fontSize: 25,
      fontFamily: "sans-serif-condensed",
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

export default StudyTipsPageScreen;