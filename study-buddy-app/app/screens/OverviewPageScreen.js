import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import printAssignments, { jsonObjs } from "../helperFunctions/PrintAssignments";

const OverviewPageScreen = (props) => {
  // const [allAssignments, setAllAssignments] = React.useState([]);

  return (
    <View style={styles.container}>
      <Text>We are in the overview page.</Text>
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