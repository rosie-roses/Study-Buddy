import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, Pressable, TextInput, ScrollView } from "react-native";

const InputWeightScreen = (props) => {
    const navigation = useNavigation();
  
  return (
    <View style={styles.container}>
      <ScrollView>
      <Text style={styles.title}>3/4</Text>
      <Text style={styles.title2}>How much is this Assessment worth your overall grade? (In %)</Text>

      <TextInput
        style={styles.input}
        placeholder="useless placeholder"
        keyboardType="default"
      />
      <Pressable
      style={styles.entryButton}
        onPress={() => {
          navigation.navigate("ChooseColourCode");
        }}
      >
       
        <Text style={styles.entryButtonText }>Next</Text>
       
        </Pressable>
        <Pressable
      style={styles.entryButton}
        onPress={() => {
          navigation.navigate("ChooseColourCode");
        }}
      >
       
        <Text style={styles.entryButtonText }>Back</Text>
        </Pressable>
         
      </ScrollView>
    </View>
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
    entryButton: {
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 12, 
        backgroundColor: "#8639d4",
        marginTop: 20,
        marginBottom: 10,
        flexDirection: "column",
       
    },
    entryButtonText: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: "bold",
        letterSpacing: 1,
        color: 'white',
        textTransform: "uppercase",
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
      title2:{
        fontSize: 30,
        textAlign: 'center',
        alignItems: "center",
        flex: 1,
        margin: 0,
        marginTop: 70,
         fontWeight: "bold"
      },
      input: {
        height: 55,
        margin: 12,
        borderWidth: 1,
        margin: 0,
        marginTop: 30,
        padding: 10,
        marginRight: 90,
        marginLeft: 90,
      },


});

export default InputWeightScreen;