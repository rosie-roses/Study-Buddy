import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TextInput,
  ScrollView,
} from "react-native";

const AddCoursesPageScreen = (props) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>1/4</Text>
        <Text style={styles.title2}>Give Your Assessment a name....</Text>

        <TextInput
          style={styles.input}
          placeholder="useless placeholder"
          keyboardType="default"
        />

        <Pressable
          style={styles.buttonContainer1}
          onPress={() => {
            navigation.navigate("ChooseColourCode");
          }}
        >
          <Text style={styles.buttonText1}>Add New Course</Text>
        </Pressable>
        <Pressable
          style={styles.buttonContainer2}
          onPress={() => {
            navigation.navigate("InputWeightScreen");
          }}
        >
          <Text style={styles.buttonText1}>Add Existing Course</Text>
        </Pressable>
        <Pressable
          style={styles.nextButton}
          onPress={() => {
            navigation.navigate("InputWeightScreen");
          }}
        >
          <Text style={styles.nextButtonText}>next</Text>
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
  },
  buttonContainer1: {
    padding: 10,
    borderRadius: 5,
    elevation: 3,
    backgroundColor: "#8639d4",
    marginTop: 50,
  },
  buttonContainer2: {
    padding: 10,
    borderRadius: 5,
    elevation: 3,
    backgroundColor: "#8639d4",
    marginTop: 20,
  },
  buttonText1: {
    fontSize: 16,
    lineHeight: 21,
    letterSpacing: 1,
    fontWeight: "bold",
    color: "white",
    textTransform: "uppercase",
    textAlign: "center",
  },

  nextButton: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    backgroundColor: "#8639d4",
    marginTop: 20,
    marginBottom: 30,
    borderRadius: 5,
  },
  nextButtonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 1,
    color: "white",
    textTransform: "uppercase",
  },
  title: {
    fontSize: 30,
    textAlign: "center",
    flex: 1,
    alignItems: "center",
    marginTop: 150,
    fontWeight: "bold",
  },
  title2: {
    fontSize: 30,
    textAlign: "center",
    alignItems: "center",
    flex: 1,
    margin: 0,
    marginTop: 30,
    fontWeight: "bold",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    margin: 0,
    marginTop: 50,
    padding: 10,
  },
});

export default AddCoursesPageScreen;
