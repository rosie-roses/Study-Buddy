/**
 * When adding a new assessment, users have the option to input the grade they received for the assessment
 */

import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  TextInput,
  Pressable,
  Platform,
} from "react-native";

/* Received help for dropdown selection and styling from reference: 
 https://bestofreactjs.com/repo/AdelRedaa97-react-native-select-dropdown-react-react-native-awesome-components 
 */
import SelectDropdown from "react-native-select-dropdown";
import * as Icon from "react-native-feather";
import { addToFirebase, assignmentObj } from "../../../App";

// List for letter grade drop-down menu
const gradesList = [
  { "A+ (90% - 100%)": "A+" },
  { "A (85% - 89%)": "A" },
  { "A- (80% - 84%)": "A-" },
  { "B+ (75% - 79%)": "B+" },
  { "B (70% - 74%)": "B" },
  { "B- (65% - 69%)": "B-" },
  { "C+ (60% - 64%)": "C+" },
  { "C (55% - 59%)": "C" },
  { "C- (50% - 54%)": "C-" },
  { "D (40% - 49%)": "D" },
  { "E  (0% - 39%)": "E" },
];

const SelectGradeScreen = (props) => {
  const navigation = useNavigation();
  const [text, onChangeText] = React.useState("");
  const [selection, onChangeSelection] = React.useState("");
  const gradeKeys = [];
  gradesList.map((item) => {
    let keys = Object.keys(item);
    gradeKeys.push(keys.toString());
  });

  /* Stores grade inputted/selected depending if the text input or drop down was used. */
  const setGrade = (number, key) => {
    let grade = "";
    if (selection === "") {
      // User didn't use drop down
      let number = parseFloat(text);
      assignmentObj.grade = number;
    } else if (text === "") {
      // User didn't use text input
      let index = gradeKeys.indexOf(key);
      grade = gradesList[index][key];
      assignmentObj.grade = grade;
    }
    // User didn't input anything.
    if (text === "" && selection === "") {
      assignmentObj.grade = null;
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>3/4</Text>
      <Text style={styles.title}>
        What grade did you get for this assessment?
      </Text>
      <Text style={styles.text}>
        Please either type a percentage grade OR
        select a letter grade from the dropdown menu.
      </Text>
      <SafeAreaView>
        {/* Text input if user wants to enter a percentage score for their assessment grade */}
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          keyboardType="numeric"
          placeholder="e.g. 95"
          placeholderTextColor="#c9c9c9"
        />
      </SafeAreaView>
      {/* Drop-down menu for letter grades */}
      <SelectDropdown
        data={gradeKeys}
        onSelect={(selectedItem, index) => {
          onChangeSelection(selectedItem);
        }}
        defaultButtonText={"Select grade"}
        buttonTextAfterSelection={(selectedItem, index) => {
          return selectedItem;
        }}
        rowTextForSelection={(item, index) => {
          return item;
        }}
        buttonStyle={styles.dropdownButton}
        buttonTextStyle={styles.dropdownButtonText}
        renderDropdownIcon={(isOpened) => {
          if (isOpened) {
            return <Icon.ChevronUp color={"#fff"} />;
          } else {
            return <Icon.ChevronDown color={"#fff"} />;
          }
        }}
        dropdownIconPosition={"right"}
        dropdownStyle={styles.dropdown}
        rowStyle={styles.dropdownRow}
        rowTextStyle={styles.dropdownRowText}
      />
      <View style={styles.buttonContainer}>
        {/* 'Back' button which takes the user to the previous step for creating an assessment */}
        <Pressable
          style={styles.backNextButton}
          onPress={() => {
            navigation.navigate("InputWeightScreen"); // Screen for adding an assessment weight
          }}
        >
          <Text style={styles.backNextButtonText}>back</Text>
        </Pressable>
        <Pressable
          /* 'Next' button which takes the user to successful assessment creation screen */
          style={styles.backNextButton}
          onPress={() => {
            setGrade(parseFloat(text), selection);
            // When button is pressed, assignment object is created and added to the database.
            console.log(
              "Assignment object => name:" + assignmentObj.assignmentName,
              ", course code: " + assignmentObj.courseCode,
              ", colour code: " + assignmentObj.colorCode,
              ", weight: " + assignmentObj.weight,
              ", grade: " + assignmentObj.grade,
            );
            addToFirebase(assignmentObj.assignmentName, assignmentObj.courseCode, assignmentObj.colorCode, assignmentObj.weight, assignmentObj.grade);
            navigation.navigate("AssessmentCreatedScreen"); // take user to success assessment created screen
          }}
        >
          <Text style={styles.backNextButtonText}>next</Text>
        </Pressable>
      </View>
      {/* user has option to skip entering a grade for their assessment.  */}
      <Pressable style={styles.skipButton}
        onPress={() => {
          assignmentObj.grade = null; // grade field is null for assessment object.
          navigation.navigate("AssessmentCreatedScreen")
        }}>
        <Text
          style={styles.skipButtonText}
        >Skip this step</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "white",
    padding: 40,
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
  text: {
    fontSize: 18,
    marginTop: 30,
    fontFamily: "notoserif",
    letterSpacing: 0.5,
    textAlign: "center",
    lineHeight: 25,
    fontWeight: "bold",
  },
  input: {
    height: 40,
    width: 200,
    marginTop: 40,
    borderWidth: 2,
    padding: 10,
    borderRadius: 5,
    borderColor: "#666666",
    textAlign: "center",
    fontFamily: "notoserif",
    letterSpacing: 1,
    fontSize: 16,
  },
  dropdownButton: {
    width: 200,
    height: 50,
    backgroundColor: "#2E294E",
    borderRadius: 5,
    marginTop: 40,
  },
  dropdownButtonText: {
    color: "#FFF",
    textAlign: "center",
    fontWeight: "bold",
  },
  dropdown: {
    backgroundColor: "#2E294E",
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    height: 165,
    marginTop: Platform.OS === "ios" ? 0 : -25,
  },
  dropdownRow: { backgroundColor: "#2E294E", borderBottomColor: "#DDDDDD" },
  dropdownRowText: {
    color: "#FFF",
    textAlign: "center",
    fontWeight: "bold",
  },
  backNextButton: {
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 5,
    elevation: 3,
    backgroundColor: "#8639d4",
    marginTop: 20,
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
  skipButton: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 1,
    marginTop: 30,
    borderBottomColor: "#8639d4",
    borderBottomWidth: 2,
  },
  skipButtonText: {
    color: "#000",
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 1,
    textTransform: "uppercase",
  },
});

export default SelectGradeScreen;
export { gradesList };
