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
  // console.log("weight selected: ", assignmentObj.weight);

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
      if (number >= 90 && number <= 100) {
        // A+
        grade = "A+";
        assignmentObj.grade = grade;
      } else if (number >= 85 && number <= 89) {
        // A
        grade = "A";
        assignmentObj.grade = grade;
      } else if (number >= 80 && number <= 84) {
        // A-
        grade = "A-";
        assignmentObj.grade = grade;
      } else if (number >= 75 && number <= 79) {
        // B+
        grade = "B+";
        assignmentObj.grade = grade;
      } else if (number >= 70 && number <= 74) {
        // B
        grade = "B";
        assignmentObj.grade = grade;
      } else if (number >= 65 && number <= 69) {
        // B-
        grade = "B-";
        assignmentObj.grade = grade;
      } else if (number >= 60 && number <= 64) {
        // C+
        grade = "C+";
        assignmentObj.grade = grade;
      } else if (number >= 55 && number <= 59) {
        // C
        grade = "C";
        assignmentObj.grade = grade;
      } else if (number >= 50 && number <= 54) {
        // C-
        grade = "C-";
        assignmentObj.grade = grade;
      } else if (number >= 40 && number <= 49) {
        // D
        grade = "D";
        assignmentObj.grade = grade;
      } else if (number >= 0 && number <= 39) {
        // E
        grade = "E";
        assignmentObj.grade = grade;
      }
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
    // console.log("Grade chosen: ", assignmentObj.grade);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>3/4</Text>
      <Text style={styles.title}>
        What grade did you get for this assignment?
      </Text>
      <Text style={styles.text}>
        Please either manually enter the percentage for the grade recieived or
        select the grade received from the dropdown menu.
      </Text>
      <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          keyboardType="numeric"
          placeholder="75%"
          placeholderTextColor="#4f4f4f"
        />
      </SafeAreaView>
      <SelectDropdown
        data={gradeKeys}
        onSelect={(selectedItem, index) => {
          // console.log(selectedItem, index);
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
        <Pressable
          style={styles.backNextButton}
          onPress={() => {
            navigation.navigate("InputWeightScreen");
          }}
        >
          <Text style={styles.backNextButtonText}>back</Text>
        </Pressable>
        <Pressable
          style={styles.backNextButton}
          onPress={() => {
            setGrade(parseFloat(text), selection);
            // Should be making the assignment object here.
            console.log(
              "Assignment object => name:" + assignmentObj.assignmentName,
              ", colour code: " + assignmentObj.colorCode,
              ", weight: " + assignmentObj.weight,
              ", grade: " + assignmentObj.grade
            );
            addToFirebase(assignmentObj.assignmentName, assignmentObj.colorCode, assignmentObj.weight, assignmentObj.grade);
            navigation.navigate("AssessmentCreatedScreen");
          }}
        >
          <Text style={styles.backNextButtonText}>next</Text>
        </Pressable>
      </View>
      <Pressable
        style={styles.skipButton}
        onPress={() => {
          assignmentObj.grade = null;
          navigation.navigate("AssessmentCreatedScreen");
        }}
      >
        <Text style={styles.skipButtonText}>Skip this step</Text>
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
export {gradesList };
