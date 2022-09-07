import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import Modal from "react-native-modal";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { currentlyEditing } from "../../App";

const MainModal = ({ open, onClose, colorCode, docID, assignmentName }) => {
  const navigation = useNavigation();
  return (
    <View>
      <Modal
        style={styles.modal}
        animationIn={"slideInUp"}
        animationOut={"slideInDown"}
        animationInTiming={750} // or any other
        animationOutTiming={1000}
        isVisible={open}
        onBackButtonPress={onClose}
        onBackdropPress={onClose}
        backdropOpacity={0.6}
        hideModalContentWhileAnimating={true}
        statusBarTranslucent
      >
        <View style={styles.modalBox}>
          <Text style={styles.text}>Selected Assignment:</Text>
          <View style={styles.selectedCourse}>
            <View
              style={[styles.circle, { backgroundColor: colorCode }]}
            ></View>
            <Text style={styles.assignmentName}>{assignmentName}</Text>
          </View>
          <View style={styles.buttonGroup}>
            <Pressable
              onPress={() => {
                onClose();
                currentlyEditing.docID = docID;
                navigation.navigate("EditAssignments");
              }}
            >
              <View style={styles.button}>
                <MaterialCommunityIcons
                  name="pencil-outline"
                  color={"#444"}
                  style={{ marginBottom: 5 }}
                  size={25}
                />
                <Text>Edit</Text>
              </View>
            </Pressable>
            <Pressable>
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

export default MainModal;
