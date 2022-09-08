import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
// import React from "react";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  Pressable,
  Alert
} from "react-native";
import { db, userObj } from "../../App";

const LoginScreen = (props) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
  const [text, onChangeText] = React.useState("");
  const navigation = useNavigation();

  const checkemail = (email) =>{
    db.collection('UserInformation')
            .where('email', '==', email)
            .get()
            .then(function (querySnapshot) {
                if (!querySnapshot.empty) {
                    querySnapshot.forEach(function (doc) {
                        console.log("The email is present in an object in the database.");
                        // take user to home screen
                        navigation.navigate("HomePageScreen");
                    });
                  } else {
                    console.log("Error!");
                    Alert.alert("Email has not been registered!");
                  }
                });
            };

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../assets/official_logo.png")}
      />

      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email:"
          placeholderTextColor="#003f5c"
          onChangeText={onChangeText}
          value={text}
          keyboardType="default"
          
        />
      </View>
      {/* <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={onChangeText}
        />
      </View> */}
      <Pressable
        style={styles.loginBtn}
        onPress={() => {
            checkemail(text)
            userObj.email = text;
        }}
        
      >
        <Text style={styles.loginText}>Sign in</Text>
      </Pressable>

      <Pressable
        style={styles.loginBtn}
        onPress={() => {
          navigation.navigate("SignUpScreen");
        }}
      >
        <Text style={styles.loginText}>Sign up</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
    padding: 40,
    justifyContent: "flex-start",
  },
  inputView: {
    backgroundColor: "#FFC0CB",
    borderRadius: 30,
    width: "70%",
    height: 40,
    alignItems: "center",
    marginBottom: 50,
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },

  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#FF1493",
  },
  signupbtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#FF1493",
  },
  image: {
    marginBottom: 40,
    height: 150,
    width: 150,
    marginTop: 100,
  },
});
export default LoginScreen;
