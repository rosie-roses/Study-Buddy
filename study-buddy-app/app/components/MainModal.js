import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native"; 
import Modal from "react-native-modal";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const MainModal = ({ open, onClose, colorCode, assignmentName }) => {
    return (
        <Modal style={styles.modal} animationIn={"fadeIn"} animationOut={"fadeOut"} isVisible={open} onBackButtonPress={onClose} onBackdropPress={onClose} backdropOpacity={0.6} statusBarTranslucent>
        <View style={styles.modalBox}>
            <Text style={styles.text}>Selected Assignment:</Text>
            <View style={styles.selectedCourse}>
                <View style={[styles.circle, {backgroundColor: colorCode}]}></View><Text style={styles.assignmentName}>{assignmentName}</Text>
            </View>
            <View style={styles.buttonGroup}>
                <Pressable><View style={styles.button}><MaterialCommunityIcons name="pencil-outline" color={"#444"} style={{marginBottom: 5}} size={25}/><Text>Edit</Text></View></Pressable>
                <Pressable><View style={styles.button}><MaterialCommunityIcons name="trash-can-outline" color={"#444"} style={{marginBottom: 5}} size={25}/><Text>Delete</Text></View></Pressable>
            </View>
        </View>
        </Modal>
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
        padding: 20
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
        marginRight: 15
    },
    assignmentName: {
        fontStyle: "italic",
        fontWeight: "bold",
        letterSpacing: 1
    },
    buttonGroup: {
        flexDirection: "row",
        flexWrap: "wrap",
        borderTopWidth: 1,
        borderTopColor: "#DDDDDD",
        justifyContent: "flex-end"
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