import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
} from "react-native";
// import { NavItem } from "react-bootstrap";
import CarouselFunctionality from "../components/CarouselFunctionality";
import { data } from "../assets/data";
import CarouselItem from "../components/CarouselItem";

const { width, height } = Dimensions.get('window');

const HomePageScreen = ({ props }) => {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Study Buddy</Text>  */}
      {/* <Text style={styles.welcomebox}><Text style={styles.bolded}>Welcome back, Joe!</Text>              Your engineering project is due in 6 days. Complete 3 more hours of study to meet your goal.</Text> */}
    
      <CarouselFunctionality data={data}/>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      backgroundColor: "white",
      padding: 40,
      justifyContent: "flex-start",
  
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

export default HomePageScreen