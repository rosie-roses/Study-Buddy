import React from "react";
import { View, Text, StyleSheet, Pressable, SafeAreaView, ScrollView, StatusBar } from "react-native";
import printAssignments from "../helperFunctions/PrintAssignments";

const OverviewPageScreen = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
      <Text style={styles.title}>Assessments Overview</Text>
      {/* Display all assignments from database on screen */}
      <View>{printAssignments()}</View> 
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    padding: 20
  },
  title: {
    fontWeight: "bold",
    fontSize: 32,
    fontFamily: "sans-serif-condensed",
    letterSpacing: 1,
    textAlign: "center",
    marginTop: 20,
    marginBottom: 30,
    lineHeight: 40,
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