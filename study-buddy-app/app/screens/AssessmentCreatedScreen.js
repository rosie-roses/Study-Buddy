import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, Pressable, TextInput, ScrollView } from "react-native";

const InputWeightScreen = (props) => {
    return(
        <Text style={styles.title}>3/4</Text>
    );

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
        flexDirection: "column",
    },
    title:{
        fontSize: 30,
        textAlign: 'center',
        flex: 1,
        alignItems: "center",
        marginTop: 100,
         fontWeight: "bold"
         
      },
});