import { StyleSheet } from "react-native";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePageScreen from "./app/screens/HomePageScreen";

/* Set up and configure firebase to the app. (✿˵•́◡•̀˵)━✧.* */
// Received help from >> https://www.freecodecamp.org/news/react-native-firebase-tutorial/.
import * as firebase from "firebase";
import "firebase/firestore";

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

/* Test to see if we can add to firebase. Received help from >> https://firebase.google.com/docs/firestore. */
var reportID = "";

function addToFirebase() {
  db.collection("assignments")
    .add({
      name: "assignment2",
      colorCode: "#000000",
      weight: 10,
      grade: "B",
    })
    .then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
      reportID = docRef.id;
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
}

/* Test to see if we can get from firebase. Received help from >> https://firebase.google.com/docs/firestore. */
function getAllFromFirebase() {
  db.collection("assignments")
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
      });
    });
}

const db = firebase.firestore();

const Stack = createNativeStackNavigator(); // Navigation.

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomePageScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
export { db, addToFirebase, getAllFromFirebase };