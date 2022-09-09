/**
 * When adding a new assessment, users have the option to choose a colour for their assessments/course
 */
import React from "react";
import PickerComponent from "../../components/PickerComponent";
import Icon from "react-native-vector-icons/Ionicons";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Pressable,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { assignmentObj, db, disableSwitchScreen } from "../../../App";

const ChooseColourCodeScreen = (props) => {
  const navigation = useNavigation();
  const [text, onChangeText] = React.useState("");

  // check if the user is trying to add a course that already exists in the database
   const checkCourseCodeFields = (courseCode) => {
    db.collection("assignments")
      .where("courseCode", "==", courseCode)
      .get()
      .then(function (querySnapshot) {
        // if the course code already exists in the database then display alert box
        if (!querySnapshot.empty) {
          querySnapshot.forEach(function (doc) {
            Alert.alert("Error: Course code already exists!");
          });
        } else {
          // otherwise, the user is taken back to the Add Courses page 
          navigation.navigate("Add Courses");
        }
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.positionClose}>
        {/* If the user no longer wants to add a course or choose a colour, they can exit by pressing a close/exit button */}
        <Pressable
          onPress={() => {
            navigation.navigate("Add Courses");
          }}
        >
          <Icon name="close-outline" color={"#666666"} size={50} />
        </Pressable>
      </View>
      {/* Text input for user to enter the course name */}
      <Text style={styles.title}>Choose a new course name and colour: </Text>
      <Text style={styles.text}>Select course name: </Text>
      <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          keyboardType="default"
          placeholder="ENGR201"
          placeholderTextColor="#4f4f4f"
          maxLength={7}
        />
      </SafeAreaView>
      {/* Color picker for assessment/course */}
      <Text style={styles.text}>Select course colour code: </Text>
      <PickerComponent />
      {/* User has to confirm entered details by pressing 'done' button */}
      <Pressable
        style={styles.doneButton}
        onPress={() => {
          checkCourseCodeFields(text); // when 'done' button is pressed, check if the course code user entered is preexisting in database.
          assignmentObj.courseCode = text; // user input is the assigned course code for assessment object being added to database.
        }}
      >
        <Text style={styles.doneButtonText}>done</Text>
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
  positionClose: {
    alignSelf: "flex-start",
    width: 50,
    marginTop: 20,
    marginLeft: -10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 32,
    fontFamily: "sans-serif-condensed",
    letterSpacing: 1,
    textAlign: "center",
    marginTop: 20,
  },
  text: {
    fontSize: 18,
    marginTop: 30,
    fontFamily: "notoserif",
    letterSpacing: 0.5,
    fontWeight: "bold",
  },
  input: {
    height: 40,
    width: 200,
    marginTop: 10,
    borderWidth: 2,
    padding: 10,
    borderRadius: 5,
    borderColor: "#666666",
    textAlign: "center",
    fontFamily: "notoserif",
    letterSpacing: 1,
    fontSize: 16,
  },
  doneButton: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 5,
    elevation: 3,
    backgroundColor: "#8639d4",
    marginTop: 40,
  },
  doneButtonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 1,
    color: "white",
    textTransform: "uppercase",
  },
});

export default ChooseColourCodeScreen;
