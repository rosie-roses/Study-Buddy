import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import printAssignments from "../helperFunctions/PrintAssignments";

const OverviewPageScreen = (props) => {
  // const [allAssignments, setAllAssignments] = React.useState([]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>We are in the overview page.</Text>
      {/* Display all assignments from database on screen */}
      <View>{printAssignments()}</View> 
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    padding: 40
  },
  text: {
    fontSize: 18,
    marginTop: 30,
    fontFamily: "notoserif",
    letterSpacing: 0.5,
    textAlign: "center",
    lineHeight: 25,
    fontWeight: "bold",
    marginBottom: 30
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
});

export default OverviewPageScreen;