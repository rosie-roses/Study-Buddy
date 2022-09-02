import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  TextInput,
  Pressable,
  Platform,
} from "react-native";

/* Received help for dropdown selection and styling from reference: 
 https://bestofreactjs.com/repo/AdelRedaa97-react-native-select-dropdown-react-react-native-awesome-components 
 */
import SelectDropdown from "react-native-select-dropdown";
import * as Icon from "react-native-feather";

const SelectGradeScreen = (props) => {
  const navigation = useNavigation();
  const [text, onChangeText] = React.useState("");
  const countries = [
    "A+ (90% - 100%)",
    "A (85% - 89%)",
    "A- (80% - 84%)",
    "B+ (75% - 79%)",
    "B (70% - 74%)",
    "B- (65% - 69%)",
    "C+ (60% - 64%)",
    "C (55% - 59%)",
    "C- (50% - 54%)",
    "D (40% - 49%)",
    "E  (0% - 39%)",
  ];
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        What grade did you get for this assignment?
      </Text>
      <Text style={styles.text}>
        Please either manually enter the percentage for the grade recieived or
        select the grade received from the dropdown menu.
      </Text>
      <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          keyboardType="numeric"
          placeholder="75%"
          placeholderTextColor="#4f4f4f"
          maxLength={7}
        />
      </SafeAreaView>
      <SelectDropdown
        data={countries}
        // defaultValueByIndex={1}
        // defaultValue={'England'}
        onSelect={(selectedItem, index) => {
          console.log(selectedItem, index);
        }}
        defaultButtonText={"Select grade"}
        buttonTextAfterSelection={(selectedItem, index) => {
          return selectedItem;
        }}
        rowTextForSelection={(item, index) => {
          return item;
        }}
        buttonStyle={styles.dropdownButton}
        buttonTextStyle={styles.dropdownButtonText}
        renderDropdownIcon={(isOpened) => {
          if (isOpened) {
            return <Icon.ChevronUp color={"#fff"} />;
          } else {
            return <Icon.ChevronDown color={"#fff"} />;
          }
        }}
        dropdownIconPosition={"right"}
        dropdownStyle={styles.dropdown}
        rowStyle={styles.dropdownRow}
        rowTextStyle={styles.dropdownRowText}
      />
      <View style={styles.buttonContainer}>
        <Pressable
          style={styles.backNextButton}
          onPress={() => {
            navigation.navigate("Dummy");
          }}
        >
          <Text style={styles.backNextButtonText}>back</Text>
        </Pressable>
        <Pressable
          style={styles.backNextButton}
          onPress={() => {
            navigation.navigate("Dummy");
          }}
        >
          <Text style={styles.backNextButtonText}>next</Text>
        </Pressable>
      </View>
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
    marginTop: 40,
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
  },
  input: {
    height: 40,
    width: 200,
    marginTop: 40,
    borderWidth: 2,
    padding: 10,
    borderRadius: 5,
    borderColor: "#666666",
    textAlign: "center",
    fontFamily: "notoserif",
    letterSpacing: 1,
    fontSize: 16,
  },
  dropdownButton: {
    width: 200,
    height: 50,
    backgroundColor: "#2E294E",
    borderRadius: 5,
    marginTop: 40,
  },
  dropdownButtonText: {
    color: "#FFF",
    textAlign: "center",
    fontWeight: "bold",
  },
  dropdown: {
    backgroundColor: "#2E294E",
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    height: 200,
    marginTop: Platform.OS === "ios" ? 0 : -25,
  },
  dropdownRow: { backgroundColor: "#2E294E", borderBottomColor: "#DDDDDD" },
  dropdownRowText: {
    color: "#FFF",
    textAlign: "center",
    fontWeight: "bold",
  },
  backNextButton: {
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 5,
    elevation: 3,
    backgroundColor: "#8639d4",
    marginTop: 40,
  },
  backNextButtonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 1,
    color: "white",
    textTransform: "uppercase",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
    marginTop: 30,
  },
});

export default SelectGradeScreen;
