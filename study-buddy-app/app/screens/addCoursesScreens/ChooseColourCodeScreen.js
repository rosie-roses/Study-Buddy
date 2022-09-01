import React from "react";
import PickerComponent from "../../components/PickerComponent";
import { View, Text, StyleSheet, SafeAreaView, TextInput } from "react-native";

const ChooseColourCodeScreen = (props) => {
  const [text, onChangeText] = React.useState("");
  return (
<View style={styles.container}>
    <Text style={styles.title}>2/4</Text>
    <Text style={styles.title}>Choose a new course name and colour: </Text>
    <Text style={styles.text}>Select course name: </Text>
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        keyboardType="default"
        placeholder="ENGR201"
        placeholderTextColor="#4f4f4f"
        maxLength={7}
      />
    </SafeAreaView>
    <Text style={styles.text}>Select course colour code: </Text>
    <PickerComponent />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "white",
    padding: 40,
  },
  title: {
    fontWeight: "bold",
    fontSize: 32,
    fontFamily: "sans-serif-condensed",
    letterSpacing: 1,
    textAlign: "center",
    marginTop: 30,
  },
  text: {
    fontSize: 18,
    marginTop: 40,
    fontFamily: "notoserif",
    letterSpacing: 0.5,
    fontWeight: "bold",
  },
  input: {
    height: 40,
    width: 200,
    marginTop: 20,
    borderWidth: 2,
    padding: 10,
    borderRadius: 5,
    borderColor: "#666666",
    textAlign: "center",
    fontFamily: "notoserif",
    letterSpacing: 1,
    fontSize: 16,
  },
});


export default ChooseColourCodeScreen;
