import React from "react";
import { db } from "../../App";
import { View, Text, StyleSheet, Pressable } from "react-native";
import Assignment from "../components/Assignment";
/**
 * Gets realtime data from the databse and print out each assignment from the data (JSON object format) 
 * retrieved as an AssignmentObject component.
 * 
 * Received help from following references: 
 * https://stackoverflow.com/questions/71684258/i-get-back-an-empty-array-from-firebase-9-getdocs-request
 * https://snack.expo.dev/FgMZwCvtw?platform=android
 * 
 * @returns All rendered AssignmentObjects wrapped within a View Component.
 */
const printAssignments = () => {
  //variable for storing a json object in a array
  const [jsonObjs, setJsonObjs] = React.useState([]);

  
  React.useEffect(() => {
    //By using query map the corresponding values
    db.collection("assignments").onSnapshot((querySnapshot) => {
      //return the mapped value as a json object
      setJsonObjs(
        querySnapshot.docs.map((doc) => ({
          uniqueKey: doc.id,
          assignmentName: doc.data().assignmentName,
          colorCode: doc.data().colorCode,
          weight: doc.data().weight,
          grade: doc.data().grade,
        }))
      );
    });
  }, []);


  return (
    <View>
      {jsonObjs.map((assignment) => {
        return (
          //print out the assignment by getting them from the array by corresponding each value 
          <Assignment
            key={assignment.uniqueKey} // Avoids react unique key error.
            firebaseID={assignment.uniqueKey} //get the id from firebase
            assignmentName={assignment.assignmentName} //get assignment name
            colorCode={assignment.colorCode} //get the colour code
            weight={assignment.weight} // get the assignmnet weight
            grade={assignment.grade} // get the assignment grade
          />
        );
      })}
    </View>
  );
};

export default printAssignments;
