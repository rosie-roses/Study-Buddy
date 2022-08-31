import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const HomePageScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text>We are in the home page.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white"
    },
});

export default HomePageScreen;
