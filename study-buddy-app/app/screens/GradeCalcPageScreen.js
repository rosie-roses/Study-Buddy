import { useIsFocused, useNavigation } from "@react-navigation/native";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
} from "react-native";
import { anotherarr, courseMap, db, storeCourseObject } from "../../App";
import SelectDropdown from "react-native-select-dropdown";
import * as Icon from "react-native-feather";

const GradeCalc = (props) => {
  const navigation = useNavigation();
  const isVisible = useIsFocused();

  const [selection, onChangeSelection] = React.useState("");

  const [jsonObjs, setJsonObjs] = React.useState([]);

  React.useEffect(() => {
   db.collection("assignments").where("courseCode", "!=", null)
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach(function (doc) {
        if (!anotherarr.includes(doc.data().courseCode)) {
          anotherarr.push(doc.data().courseCode);
        }
      });
    })
    .catch((error) => {
      console.error("Error: ", error);
    });
    setJsonObjs(anotherarr);
  }, []);

  async function getcourses() {
     await db
      .collection("assignments")
      .where("courseCode", "!=", null)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          if (courseMap.has(doc.data().courseCode)) {
            const obj = {
              assName: doc.data().assignmentName,
              courseCode: doc.data().courseCode,
              colorCode: doc.data().colorCode,
              grade: doc.data().grade,
              weight: doc.data().weight,
            };
            courseMap.get(obj.courseCode).push(obj);
          } else {
            courseMap.set(doc.data().courseCode, []);
          }
        });
      })
      .catch((error) => {
        console.error("Error: ", error);
      });
  }

  // first();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.title}>Calculate Grade</Text>
        <Text style={styles.subTitle}>Select a course</Text>
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
    padding: 40,
    paddingTop: 20,
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
  subTitle: {
    fontSize: 18,
    fontWeight: "bold",
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
    height: 165,
    marginTop: Platform.OS === "ios" ? 0 : -25,
  },
  dropdownRow: { backgroundColor: "#2E294E", borderBottomColor: "#DDDDDD" },
  dropdownRowText: {
    color: "#FFF",
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default GradeCalc;
