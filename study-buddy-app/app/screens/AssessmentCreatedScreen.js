import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { assignmentObj } from "../../App";

const AssessmentCreatedScreen = (props) => {
    const navigation = useNavigation();
    // console.log("grade selected: ", assignmentObj.grade);
  return (
    <View style={styles.container}>
      <View style={styles.positionClose}>
        <Pressable
          style={styles.backNextButton}
          onPress={() => {
            navigation.navigate("Home");
          }}
        >
          <Icon name="close-outline" color={"#666666"} size={50} />
        </Pressable>
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>Assessment Created!</Text>
        <Icon name="checkmark-circle-outline" color={"green"} size={200} />
        <Text style={styles.title2}>
          Please refer to the courses overview tab in the main menu to view the
          assignment you created.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: "white",
    padding: 20,
  },
  content: {
    alignItems: "center",
    marginTop: 50,
    padding: 20,
  },
  title: {
    fontSize: 30,
    textAlign: "center",
    // flex: 1,
    alignItems: "center",

    fontWeight: "bold",
    marginBottom: 30,
  },
  title2: {
    fontSize: 20,
    textAlign: "center",
    alignItems: "center",
    marginTop: 30,
    fontWeight: "bold",
  },
  positionClose: {
    alignItems: "flex-start",
    width: 50,
    marginTop: 20
  },
});
export default AssessmentCreatedScreen;
