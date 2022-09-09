/**
 * When adding a new assessment, users have the option to input the weight of the assessment
 */

import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TextInput,
} from "react-native";
import { assignmentObj } from "../../../App";

const InputWeightScreen = (props) => {
  const navigation = useNavigation();
  const [text, onChangeText] = React.useState("");
  return (
    <View style={styles.container}>
      <Text style={styles.title}>2/4</Text>
      <Text style={styles.title}>
        How much is this assessment worth your overall grade? (In %)
      </Text>
      {/* Text input field for user to enter the weight of the assessment */}
      <TextInput
        style={styles.input}
        placeholder="15%"
        placeholderTextColor="#4f4f4f"
        keyboardType="numeric"
        onChangeText={onChangeText}
        value={text}
        
      />
      <View style={styles.buttonContainer}>
        {/* If user presses 'Back' button, they are taken to the previous step for adding a new assessment */}
        <Pressable
          style={styles.backNextButton}
          onPress={() => {
            //  take user to Add Courses screen
            navigation.navigate("Add Courses");
          }}
        >
          <Text style={styles.backNextButtonText}>back</Text>
        </Pressable>
        {/* When user presses 'Next' button, they are taken to the next step for adding a new assessment */}
        <Pressable
          style={styles.backNextButton}
          onPress={() => {
            assignmentObj.weight = parseInt(text); // Grade will be NaN if user didn't input anything.
            navigation.navigate("SelectGrade"); //take user to grade input screen
          }}
        >
          <Text style={styles.backNextButtonText}>next</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
    padding: 40,
    justifyContent: "flex-start",
  },
  backNextButton: {
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 5,
    elevation: 3,
    backgroundColor: "#8639d4",
    marginTop: 40,
  },
  backNextButtonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 1,
    color: "white",
    textTransform: "uppercase",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
    marginTop: 30,
  },
  title: {
    fontWeight: "bold",
    fontSize: 32,
    fontFamily: "sans-serif-condensed",
    letterSpacing: 1,
    textAlign: "center",
    marginTop: 40,
    lineHeight: 40,
  },
  input: {
    height: 40,
    width: 200,
    margin: 12,
    marginTop: 30,
    padding: 10,
    marginRight: 90,
    marginLeft: 90,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: "#666666",
    textAlign: "center",
    fontFamily: "notoserif",
  },
});

export default InputWeightScreen;
