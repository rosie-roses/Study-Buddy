import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
} from "react-native";
import CarouselFunctionality from "../components/CarouselFunctionality";
import { data } from "../assets/data";

const HomePageScreen = ({ props }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Study Buddy</Text>  
      <Text style={styles.welcomebox}><Text style={styles.bolded}>Welcome back!{'\n'}</Text>
      See the 'Overview' section to view all your logged assessments.</Text>
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

export default HomePageScreen;