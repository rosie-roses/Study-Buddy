import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { addToFirebase, getAllFromFirebase } from "../../App";

const HomePageScreen = (props) => {
    return (
        <View style={styles.container}>
            <Text>Welcome to study buddy app.</Text>
            <Button onPress={() => {addToFirebase()}} title="Add to database"></Button>
            <Button onPress={() => {getAllFromFirebase()}} title="Get all from database"></Button>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
});

export default HomePageScreen;