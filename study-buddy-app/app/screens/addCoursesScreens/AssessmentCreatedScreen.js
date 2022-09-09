/**
 * Displays a success screen after the user has logged an assessment. 
 */
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";


const AssessmentCreatedScreen = (props) => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.positionClose}>
        <Pressable
          style={styles.backNextButton}
          // User can be directed to home screen by pressing button  after the assessment is created.
          onPress={() => {
            navigation.navigate("Home");
          }}
        >
         
          <Icon name="close-outline" color={"#666666"} size={50} />  {/* Close/exit icon */}
        </Pressable>
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>Assessment Created!</Text>
        <Icon name="checkmark-circle-outline" color={"green"} size={200} />  {/* Success/checkmark icon */}
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
