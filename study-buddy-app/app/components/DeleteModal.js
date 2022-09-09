/*
* The modal for when a user goes to delete an assessment. 
* The modal has one option depicted by a trash icon button.
*/

import React from "react";
import Modal from "react-native-modal";
import { View, Text, StyleSheet, Pressable } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { db } from "../../App";

const DeleteModal = ({ openDelete, onCloseDelete, colorCode, assignmentName, docID }) => {
    // pass through the id of the selected assessment then delete from database
    const deletAssignment = (id) => {
        db.collection("assignments").doc(id).delete().then(() => {
            console.log("Document successfully deleted!");
        }).catch((error) => {
            console.error("Error removing document: ", error);
        });
    }

  return (
    <View>
       {/* transition and animation for how the modal appears on/leaves the screen */}
      <Modal
        style={styles.modal}
        animationIn={"slideInUp"}
        animationOut={"slideInDown"}
        animationInTiming={750} // or any other
        animationOutTiming={1000}
        isVisible={openDelete}
        onBackButtonPress={onCloseDelete}
        onBackdropPress={onCloseDelete}
        backdropOpacity={0.6}
        hideModalContentWhileAnimating={true}
        statusBarTranslucent
      >
        {/* Modal box + label */}
        <View style={styles.modalBox}>
          <Text style={styles.text}>Delete Assignment:</Text>
          <View style={styles.selectedCourse}>
            {/* Label to display assignment details */}
            <View
              style={[styles.circle, { backgroundColor: colorCode }]} // circle the colour of the assessment's colorCode
            ></View>
            {/* name of assessment */}
            <Text style={styles.assignmentName}>{assignmentName}</Text> 
          </View>
          {/* when delete button is pressed, call the deleteAssignment function */}
          <View style={styles.buttonGroup}>
            <Pressable onPress={() => {
                deletAssignment(docID);
            }}>
               {/* Trash icon for Delete button */}
              <View style={styles.button}>
                <MaterialCommunityIcons
                  name="trash-can-outline"
                  color={"#444"}
                  style={{ marginBottom: 5 }}
                  size={25}
                />
                <Text>Delete</Text>
              </View>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: "center",
    paddingRight: 20,
    paddingLeft: 20,
  },
  modalBox: {
    backgroundColor: "#FFF",
    borderWidth: 2,
    borderColor: "#DDDDDD",
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    padding: 20,
  },
  selectedCourse: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 20,
    paddingBottom: 40,
    borderTopWidth: 1,
    borderTopColor: "#DDDDDD",
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginRight: 15,
  },
  assignmentName: {
    fontStyle: "italic",
    fontWeight: "bold",
    letterSpacing: 1,
  },
  buttonGroup: {
    flexDirection: "row",
    flexWrap: "wrap",
    borderTopWidth: 1,
    borderTopColor: "#DDDDDD",
    justifyContent: "flex-end",
  },
  button: {
    borderLeftWidth: 1,
    borderLeftColor: "#DDDDDD",
    paddingTop: 10,
    paddingBottom: 10,
    width: 70,
    alignItems: "center",
  },
});

export default DeleteModal;
