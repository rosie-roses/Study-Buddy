import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";

const MainPageScreen = (props) => {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require('../assets/official_logo.png')} />
            <Text style={styles.desc}>Weclome to the Study Buddy app! Click on 'Next' to go to the main page.</Text>
            <Pressable style={styles.entryButton} onPress={() => { navigation.navigate("Dummy") }}>
                <Text style={styles.entryButtonText}>next</Text>
            </Pressable>
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
    logo: {
        width: 225,
        height: 200
    },
    entryButton: {
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 5,
        elevation: 3,
        backgroundColor: "#8639d4",
        marginTop: 40
    },
    entryButtonText: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: "bold",
        letterSpacing: 1,
        color: 'white',
        textTransform: "uppercase"
    },
    desc: {
        fontSize: 18,
        lineHeight: 26,
        marginTop: 30,
        alignItems: "center",
        justifyContent: "center",
        width: 250,
        textAlign: "center"
    }
});

export default MainPageScreen;