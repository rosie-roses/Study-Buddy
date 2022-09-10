import { StyleSheet } from "react-native";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DummyPageScreen from "./app/screens/DummyPageScreen";
import StudyTipsPageScreen from "./app/screens/StudyTipsPageScreen";
import MainPageScreen from "./app/screens/MainPageScreen";
import AddCoursesPageScreen from "./app/screens/AddCoursesPageScreen";
import GradeCalcPageScreen from "./app/screens/GradeCalcPageScreeen";
import ChooseColourCodePageScreen from "./app/screens/addCoursesScreens/ChooseColourCodeScreen";
import InputWeightScreen from "./app/screens/addCoursesScreens/InputWeightScreen";
import AssessmentCreatedScreen from "./app/screens/addCoursesScreens/AssessmentCreatedScreen";
import SelectGradeScreen from "./app/screens/addCoursesScreens/SelectGradeScreen";
import EditAssignmentsScreen from "./app/screens/EditAssignmentsScreen";


/* Set up and configure firebase to the app. (✿˵•́◡•̀˵)━✧.* */
// Received help from >> https://www.freecodecamp.org/news/react-native-firebase-tutorial/.
import * as firebase from "firebase";
import "firebase/firestore";
import LoginScreen from "./app/screens/LoginScreen";
import SignUpScreen from "./app/screens/SignUpScreen";


const firebaseConfig = {
  apiKey: "AIzaSyDViGClOz4lL3qXicfhlcxjuYqpcw5w8mo",
  authDomain: "study-buddy-d3266.firebaseapp.com",
  databaseURL: "https://study-buddy-d3266-default-rtdb.firebaseio.com",
  projectId: "study-buddy-d3266",
  storageBucket: "study-buddy-d3266.appspot.com",
  messagingSenderId: "647982643093",
  appId: "1:647982643093:web:3d4a16571f27ecdea0289c",
  measurementId: "G-PMMEHPR4J9",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();

/* Test to see if we can add to firebase. Received help from >> https://firebase.google.com/docs/firestore. */
var reportID = "";

function addToFirebase(name, courseCode, colorCode, weight, grade) {
  db.collection("assignments")
    .add({
      assignmentName: name,
      colorCode: colorCode,
      courseCode: courseCode,
      weight: weight,
      grade: grade
    })
    .then((docRef) => {
      console.log("Added assignment object with ID: ", docRef.id);
      reportID = docRef.id;
    })
    .catch((error) => {
      console.error("Error adding assignment to firebase: ", error);
    });
}

function addStudyTipToFirebase(studytipstring) {
  db.collection("studytips")
    .add({
     studytipstring: studytipstring,
    })
    .then((docRef) => {
      console.log("Added study tip with ID: ", docRef.id);
      reportID = docRef.id;
    })
    .catch((error) => {
      console.error("Error adding study tip to firebase: ", error);
    });
}

function addUserToFirebase(username, email, password) {
  db.collection("UserInformation")
    .add({
      username: username,
      email: email,
      password: password
    })
    .then((docRef) => {
      console.log("Added user information object with ID: ", docRef.id);
      reportID = docRef.id;
    })
    .catch((error) => {
      console.error("Error adding user information to firebase: ", error);
    });
}


const allAssignments = [];
const db = firebase.firestore();

const assignmentObj = {
  assignmentName: null, // String.
  courseCode: null, // String
  colorCode: null, // String.
  weight: null, // Number.
  grade: null // String
};

const existingAssignmentObj = {
  assignmentName: null, // String.
  courseCode: null, // String
  colorCode: null, // String.
  weight: null, // Number.
  grade: null // String
};

const currentlyEditing = {
  docID: null,
  assignmentName: null,
  colorCode: null,
  grade: null,
  weight: null
}

const userObj = {
  username: null,
  email: null,
  password: null
}

function refreshCurrentlyEditing() {
  currentlyEditing.docID = null;
  currentlyEditing.assignmentName = null;
  currentlyEditing.colorCode = null;
  currentlyEditing.grade = null,
  currentlyEditing.weight = null
}

function refreshExisting() {
  existingAssignmentObj.assignmentName = null;
  existingAssignmentObj.courseCode = null;
  existingAssignmentObj.colorCode = null;
  existingAssignmentObj.grade = null;
  existingAssignmentObj.weight = null;
}

const storeCourseObject = [];

var courseMap = new Map();

const anotherarr = [];

const Stack = createNativeStackNavigator(); // Navigation.

function App() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="LoginScreen">
        <Stack.Screen
          name="Main"
          component={MainPageScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Dummy"
          component={DummyPageScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="GradeCalculator"
          component={GradeCalcPageScreen}
          options={{ headerShown: false }}
        />
        {/* Sub screens for Add courses screen here */}
        <Stack.Screen
          name="ChooseColourCode"
          component={ChooseColourCodePageScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="InputWeightScreen"
          component={InputWeightScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AssessmentCreatedScreen"
          component={AssessmentCreatedScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SelectGrade"
          component={SelectGradeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="StudyTipsPageScreen"
          component={StudyTipsPageScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="EditAssignments"
          component={EditAssignmentsScreen}
          options={{ headerShown: false, animation: "slide_from_bottom"}}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUpScreen"
          component={SignUpScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
export { db, addToFirebase, assignmentObj, allAssignments, addStudyTipToFirebase, currentlyEditing, refreshCurrentlyEditing, addUserToFirebase, storeCourseObject, userObj, auth, courseMap, existingAssignmentObj, refreshExisting, anotherarr};
