import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { close, currentlyEditing, openMainModal } from "../../App";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const EditAssignmentsScreen = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* just for now */}
      <View style={styles.positionClose}>
        <Pressable
          onPress={() => {
            openMainModal.bool = false;
            navigation.navigate("Overview");
          }}
        >
          <Icon name="close-outline" color={"#666666"} size={50} />
        </Pressable>
      </View>
      <Text>We are currently editing: {currentlyEditing.docID}</Text>
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
  positionClose: {
    alignItems: "flex-start",
    width: 50,
    marginTop: 20
  },
});
export default EditAssignmentsScreen;
