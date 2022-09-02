import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { allAssignments, db, getAllFromFirebase } from "../../App";

const StudyTimePageScreen = (props) => {
  const [allAssignments, setAllAssignments] = React.useState([]);
  
  React.useEffect(() => {
    setAllAssignments(getAllFromFirebase.retrieve());
  }, []);

  function iterateAll() {
    allAssignments.forEach((item) => {
      console.log(
        "name - " + item.courseName,
        ", colour code - " + item.colorCode,
        ", weight - " + item.weight,
        ", grade - " + item.grade
      );
    });
  }

  return (
    <View style={styles.container}>
      <Text>We are in the overview page.</Text>
      <Pressable
          style={styles.backNextButton}
          onPress={() => {
            iterateAll();
          }}
        >
          <Text style={styles.backNextButtonText}>test</Text>
        </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
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

export default StudyTimePageScreen;
