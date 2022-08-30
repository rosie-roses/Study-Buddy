import React from "react";
import { StyleSheet, Text, View } from "react-native";

const HomePageScreen = (props) => {
    return (
        <View style={styles.container}>
            <Text>Welcome to study buddy app.</Text>
        </View>
    );
}

export default HomePageScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
})