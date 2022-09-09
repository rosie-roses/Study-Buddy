//Relevant imports used and needed
import { useIsFocused, useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TextInput,
} from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import {
  assignmentObj,
  courseMap,
  db,
  existingAssignmentObj,
  refreshExisting,
  storeCourseObject,
} from "../../App";
import * as Icon from "react-native-feather";

const AddCoursesPageScreen = (props) => {
  const navigation = useNavigation();
  const [addNewDisabled, setaddNewDisabled] = useState(false);
  const [addExistingDisabled, setaddExistingDisabled] = useState(false);
  const [selection, onChangeSelection] = React.useState("");

  React.useEffect(() => {
    db
    .collection("assignments")
    .where("courseCode", "!=", null)
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach(function (doc) {
        if (!storeCourseObject.includes(doc.data().courseCode)) {
          storeCourseObject.push(doc.data().courseCode);
          //courseMap.set(doc.data().courseCode, []);
        }
      });
    })
    .catch((error) => {
      console.error("Error: ", error);
    });
  }, []);

  const [text, onChangeText] = React.useState("");
  return (
    //Styles addes into the page
    //Features include text input, pressable buttons and disabled button.
    <View style={styles.container}>
        <Text style={styles.title}>1/4</Text>
        <Text style={styles.title}>Give your assessment a name...</Text>

        <TextInput
          style={styles.input}
          placeholder="e.g. Engineering Essay"
          placeholderTextColor="#c9c9c9"
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
            onChangeSelection(selectedItem);
          }}
          defaultButtonText={"Add existing course"}
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

//Lists of all the styling features.
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
    width: "100%"
  },
  dropdownButton: {
    height: 50,
    backgroundColor: "#8639d4", //2E294E
    borderRadius: 5,
    marginTop: 20,
    width: "100%",
    fontSize: 16,
  },
  dropdownButtonText: {
    color: "#FFF",
    textAlign: "center",
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 1,
    fontSize: 16,
  },
  dropdown: {
    backgroundColor: "#8639d4",
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    height: 165,
    marginTop: Platform.OS === "ios" ? 0 : -25,
    fontSize: 16
  },
  dropdownRow: { backgroundColor: "#8639d4", borderBottomColor: "#DDDDDD" },
  dropdownRowText: {
    color: "#FFF",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
    letterSpacing: 1
  },
});

export default AddCoursesPageScreen;
