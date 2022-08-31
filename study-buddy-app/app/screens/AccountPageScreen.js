import React from "react";
import { View, Text, StyleSheet } from "react-native";

const AccountPageScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text>We are in the account page.</Text>
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

export default AccountPageScreen;
