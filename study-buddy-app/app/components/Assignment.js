import React, { Component } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import MainModal from "./MainModal";

/**
 * Displays each assessments stored in the database as an assessment component
 * which is rendered as a pressable.
 */

const Assignment = (props) => {
  const [open, setOpen] = React.useState(false);
  return (
    <View>
      <Pressable
        style={styles.assignmentContainer}
        onPress={() => {
          setOpen(true);
        }}
      >
        <View
          style={[styles.colourBar, { backgroundColor: props.colorCode }]}
        ></View>
        <View style={styles.assignmentContent}>
          <Text style={styles.assignmentName}>{props.assignmentName}</Text>
          <View style={styles.assignmentInfo}>
            <Text style={[styles.info, { marginRight: 5 }]}>
              <Text style={styles.label}>Weight:</Text> {props.weight}%,
            </Text>
            <Text style={styles.info}>
              <Text style={styles.label}>Grade:</Text> {props.grade}
            </Text>
          </View>
        </View>
      </Pressable>
      <View>
        {open && (
          <MainModal
            open={open}
            onClose={() => setOpen(false)}
            colorCode={props.colorCode}
            docID={props.firebaseID}
            assignmentName={props.assignmentName}
            assignmentColorCode={props.colorCode}
            assignmentGrade={props.grade}
            assignmentWeight={props.weight}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  assignmentContainer: {
    borderWidth: 2,
    borderColor: "#DDDDDD",
    marginBottom: 30,
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  colourBar: {
    width: "5%",
    height: "auto",
  },
  assignmentContent: {
    padding: 20,
    paddingTop: 10,
    paddingBottom: 10,
    width: "95%",
    fontFamily: "notoserif",
  },
  assignmentName: {
    fontWeight: "bold",
    fontSize: 18,
  },
  assignmentInfo: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 20,
  },
  info: {
    fontSize: 16,
  },
  label: {
    fontWeight: "bold",
    letterSpacing: 0.5,
  },
});

export default Assignment;
