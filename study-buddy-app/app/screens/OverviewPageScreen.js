import React from "react";
import { View, Text, StyleSheet } from "react-native";

const OverviewPageScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text>We are in the overview page.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white"
    },
});

export default OverviewPageScreen;
