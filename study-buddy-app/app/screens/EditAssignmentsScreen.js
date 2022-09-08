import React from "react";
import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { currentlyEditing, db } from "../../App";
import { useNavigation } from "@react-navigation/native";
import SelectDropdown from "react-native-select-dropdown";
import * as Icon from "react-native-feather";
import { gradesList } from "./addCoursesScreens/SelectGradeScreen";

const EditAssignmentsScreen = () => {
  const navigation = useNavigation();

  const [nameText, onChangeNameText] = React.useState("");
  const [weightText, onchangeWeightText] = React.useState("");
  const [selection, onChangeSelection] = React.useState("");

  const gradeKeys = [];
  gradesList.map((item) => {
    let keys = Object.keys(item);
    gradeKeys.push(keys.toString());
  });

  let gradeKey;
  gradesList.forEach((grade) => {
    Object.keys(grade).forEach((key) => {
      if (grade[key] === currentlyEditing.grade) {
        gradeKey = key;
      }
    });
  });

  const updateDb = (docID, assignmentName, colorCode, weight, grade) => {
    return db
      .collection("assignments")
      .doc(docID)
      .update({
        assignmentName: assignmentName,
        colorCode: colorCode,
        grade: grade,
        weight: weight,
      })
      .then(() => {
        console.log("Assignment successfully updated!");
      })
      .catch((error) => {
        console.error("Error updating assignment: ", error);
      });
  };

  return (
    <View style={styles.container}>
      {/* just for now */}
      <Text style={styles.tile}>Edit: {currentlyEditing.assignmentName}</Text>
      <Text style={styles.label}>Assignment Name: </Text>
      <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={onChangeNameText}
          value={nameText}
          keyboardType="default"
          placeholder={
            currentlyEditing.assignmentName === null
              ? "Example name"
              : currentlyEditing.assignmentName
          }
          placeholderTextColor="#4f4f4f"
        />
      </SafeAreaView>
      <Text style={styles.label}>Assignment Weight: </Text>
      <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={onchangeWeightText}
          value={weightText}
          keyboardType="numeric"
          placeholder={
            currentlyEditing.weight === null
              ? "75%"
              : currentlyEditing.weight + "%"
          }
          placeholderTextColor="#4f4f4f"
        />
      </SafeAreaView>
      <Text style={styles.label}>Assessment Grade: </Text>
      <SelectDropdown
        data={gradeKeys}
        onSelect={(selectedItem, index) => {
          // console.log(selectedItem, index);
          onChangeSelection(selectedItem);
        }}
        defaultButtonText={
          currentlyEditing.grade === null ? "Select Grade" : gradeKey
        }
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
      <View style={styles.buttonStyleContainer}>
      {/* Confirm changes button */}
      <Pressable
        style={styles.completeButton}
        onPress={() => {
          if (nameText !== "") {
            currentlyEditing.assignmentName = nameText;
          }
          if (weightText !== "") {
            currentlyEditing.weight = weightText;
          }
          if (selection !== "") {
            let index = gradeKeys.indexOf(selection);
            let grade = gradesList[index][selection];
            currentlyEditing.grade = grade;
          }
          updateDb(
            currentlyEditing.docID,
            currentlyEditing.assignmentName,
            currentlyEditing.colorCode,
            currentlyEditing.weight,
            currentlyEditing.grade
          );
          //   refreshCurrentlyEditing();
          navigation.navigate("Overview");
        }}
      >
        <Text style={styles.buttonText}>Confirm Changes</Text>
      </Pressable>
      {/* Cancel changes button */}
      <Pressable
        style={styles.cancelButton}
        onPress={() => {
          navigation.navigate("Overview");
        }}
      >
        <Text style={styles.buttonText}>Cancel</Text>
      </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    backgroundColor: "white",
    alignItems: "center",
    padding: 20,
    paddingTop: 40,
  },
  tile: {
    fontWeight: "bold",
    alignSelf: "center",
    fontFamily: "sans-serif-condensed",
    fontSize: 32,
    letterSpacing: 1,
    marginBottom: 40,
    marginTop: 40,
  },
  label: {
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 15,
  },
  input: {
    height: 40,
    width: 200,
    marginTop: 20,
    marginBottom: 40,
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
    marginTop: 20,
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
  completeButton: {
    paddingVertical: 12,
    paddingHorizontal: 12,
    flexDirection: 'row',
    borderRadius: 5,
    elevation: 3,
    backgroundColor: "#8639d4",
    marginTop: 100,
    marginRight: 15,
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 1,
    color: "white",
    textTransform: "uppercase",
  },
  cancelButton: {
    paddingVertical: 12,
    paddingHorizontal: 12,
    flexDirection: 'row',
    borderRadius: 5,
    elevation: 3,
    backgroundColor: "#f71111",
    marginTop: 100,
    marginLeft: 15,
  },
  buttonStyleContainer: {
    flexDirection: 'row',
  }
});
export default EditAssignmentsScreen;
