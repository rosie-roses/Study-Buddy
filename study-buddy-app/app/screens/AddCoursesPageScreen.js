import { useIsFocused, useNavigation } from "@react-navigation/native";
// import React from "react";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TextInput,
  ScrollView,
} from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import {
  assignmentObj,
  courseMap,
  courseObj,
  db,
  storeCourseObject,
} from "../../App";
import * as Icon from "react-native-feather";

const AddCoursesPageScreen = (props) => {
  const navigation = useNavigation();
  const [addNewDisabled, setaddNewDisabled] = useState(false);
  const [addExistingDisabled, setaddExistingDisabled] = useState(false);
  const [selection, onChangeSelection] = React.useState("");

  // When user visits screen get alkl course codes.
  const isVisible = useIsFocused();
  React.useEffect(() => {
    const focusListener = navigation.addListener("focus", () => {
      // Screen is focused >> User is currently viewing it.
      // console.log(injuryReportData.areaOfInjury.length);
      getExistingCoursecodes();
    });
    return focusListener;
  }, [isVisible, navigation]);

  async function getExistingCoursecodes() {
    // First get all the course codes available and store it.
    await db
      .collection("assignments")
      .where("courseCode", "!=", null)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach(function (doc) {
          if (!storeCourseObject.includes(doc.data().courseCode)) {
            storeCourseObject.push(doc.data().courseCode);
            courseMap.set(doc.data().courseCode, []);
          }
        });
      });

    assignAssignmentsToCourseCode();
  }

  async function assignAssignmentsToCourseCode() {
    await db
      .collection("assignments")
      .where("courseCode", "!=", null)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          if (courseMap.has(doc.data().courseCode)) {
            courseMap
              .get(doc.data().courseCode)
              .push(doc.data().assignmentName);
          } else {
            courseMap.set(doc.data().courseCode, []);
          }
        });
      });

    // storeCourseObject.forEach((course) => {
    //   console.log("Course:  ", course);
    //   console.log(courseMap.get(course));
    // })
  }

  const [text, onChangeText] = React.useState("");
  return (
    <View style={styles.container}>
        <Text style={styles.title}>1/4</Text>
        <Text style={styles.title}>Give Your Assessment a name....</Text>

        <TextInput
          style={styles.input}
          placeholder="Assessment Name"
          keyboardType="default"
          onChangeText={onChangeText}
          value={text}
          onSubmitEditing={() => {
            // Store user input text to App.
            assignmentObj.assignmentName = text;
          }}
        />
        <View style={styles.buttonGroup}>
        <Pressable
          style={[
            styles.buttonContainer1,
            { backgroundColor: addNewDisabled ? "#444" : "#8639d4" },
          ]}
          disabled={addNewDisabled}
          onPress={() => {
            setaddExistingDisabled(true);
            navigation.navigate("ChooseColourCode");
          }}
        >
          <Text style={styles.buttonText1}>Add New Course</Text>
        </Pressable>
        <SelectDropdown
          data={storeCourseObject}
          onSelect={(selectedItem, index) => {
            // console.log(selectedItem, index);
            onChangeSelection(selectedItem);
          }}
          defaultButtonText={"Select Course"}
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
        <Pressable
          style={styles.nextButton}
          onPress={() => {
            navigation.navigate("InputWeightScreen");
          }}
        >
          <Text style={styles.nextButtonText}>next</Text>
        </Pressable>
        </View>
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
  buttonGroup: {
    flexDirection: "column",
    width: "100%"
  },
  buttonContainer1: {
    padding: 10,
    borderRadius: 5,
    elevation: 3,
    marginTop: 50,
  },
  buttonContainer2: {
    padding: 10,
    borderRadius: 5,
    elevation: 3,
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
    fontWeight: "bold",
    fontSize: 32,
    fontFamily: "sans-serif-condensed",
    letterSpacing: 1,
    textAlign: "center",
    marginTop: 40,
    lineHeight: 40,
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
    height: 50,
    backgroundColor: "#2E294E",
    borderRadius: 5,
    marginTop: 30,
    width: "100%",
  },
  dropdownButtonText: {
    color: "#FFF",
    textAlign: "center",
    fontWeight: "bold"
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
});

export default AddCoursesPageScreen;
