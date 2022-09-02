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
        {/* <Text style={styles.title}></Text> */}
        {/* Testing next sub-screen functionality. */}

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
            style={styles.buttonContainer1}
            onPress={() => {
              navigation.navigate("InputWeightScreen");
            }}
          >
            <Text style={styles.buttonText1}>Add Existing Course</Text>
          
        </Pressable>
        <Pressable
          style={styles.entryButton}
          onPress={() => {
            navigation.navigate("InputWeightScreen");
          }}
        >
          <Text style={styles.entryButtonText}>next</Text>
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
  buttonContainer1: {
    padding: 10,
    borderRadius: 5,
    elevation: 3,
    backgroundColor: "#8639d4",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
  },
  buttonText1: {
    fontSize: 12,
    lineHeight: 21,
    fontWeight: "bold",
    color: "white",
    textTransform: "uppercase",
    textAlign: "center",
  },

  entryButton: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    // paddingHorizontal: 32,
    //borderRadius: 5,
    //elevation: 3,
    backgroundColor: "#8639d4",
    marginTop: 50,
    // margin: 0,
    marginBottom: 30,
  },
  entryButtonText: {
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
    marginTop: 30,
    padding: 10,
  },
});

export default AddCoursesPageScreen;
