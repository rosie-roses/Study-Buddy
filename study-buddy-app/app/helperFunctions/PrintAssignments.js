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
  const [jsonObjs, setJsonObjs] = React.useState([]);

  React.useEffect(() => {
    db.collection("assignments").onSnapshot((querySnapshot) => {
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
          <Assignment
            key={assignment.uniqueKey} // Avoids react unique key error.
            firebaseID={assignment.uniqueKey}
            assignmentName={assignment.assignmentName}
            colorCode={assignment.colorCode}
            weight={assignment.weight}
            grade={assignment.grade}
          />
        );
      })}
    </View>
  );
};

export default printAssignments;
