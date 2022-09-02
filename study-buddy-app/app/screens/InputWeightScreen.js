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

const InputWeightScreen = (props) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>2/4</Text>
      <Text style={styles.title}>
        How much is this Assessment worth your overall grade? (In %)
      </Text>
      <TextInput
        style={styles.input}
        placeholder="useless placeholder"
        keyboardType="default"
      />
      <View style={styles.buttonContainer}>
        <Pressable
          style={styles.backNextButton}
          onPress={() => {
            navigation.navigate("AddCourses");
          }}
        >
          <Text style={styles.backNextButtonText}>back</Text>
        </Pressable>

        <Pressable
          style={styles.backNextButton}
          onPress={() => {
            navigation.navigate("SelectGrade");
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
    justifyContent: "center",
    backgroundColor: "white",
    padding: 40,
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
