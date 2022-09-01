import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

const AddCoursesPageScreen = (props) => {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>We are in the add courses page.</Text>
      {/* Testing next sub-screen functionality. */}
      <Pressable
        style={styles.entryButton}
        onPress={() => {
          navigation.navigate("ChooseColourCode");
        }}
      >
        <Text style={styles.entryButtonText}>next</Text>
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
  entryButton: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 5,
    elevation: 3,
    backgroundColor: "#8639d4",
    marginTop: 40
},
entryButtonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 1,
    color: 'white',
    textTransform: "uppercase"
},
});

export default AddCoursesPageScreen;
