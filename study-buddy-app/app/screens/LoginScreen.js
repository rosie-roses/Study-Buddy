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
  Alert,
} from "react-native";
import { db, userObj } from "../../App";

const LoginScreen = (props) => {
  const [text, onChangeText] = React.useState("");
  const [ptext, setSearch ] = React.useState("");
  const navigation = useNavigation();

  const checkemail = (email) => {
    db.collection("UserInformation")
      .where("email", "==", email)
      .get()
      .then(function (querySnapshot) {
        if (!querySnapshot.empty) {
          querySnapshot.forEach(function (doc) {
            console.log("The email is present in an object in the database.");
            // take user to home screen
          });
        } else {
          console.log("Error!");
          Alert.alert("Email has not been registered!");
        }
      });
  };
  const checkpassword = (password) => {
    db.collection("UserInformation")
      .where("password", "==", password)
      .get()
      .then(function (querySnapshot) {
        if (!querySnapshot.empty) {
          querySnapshot.forEach(function (doc) {
            console.log("The password is present in an object in the database.");
            // take user to home screen
            //navigation.navigate("HomePageScreen");
          });
        } else {
          console.log("Error!");
          Alert.alert("password has not been registered!");
        }
      });
  };

  const checkuserinfo = (email, password) => {
    db.collection("UserInformation")
      .where("password", "==", password, "email", "==", email)
      .get()
      .then(function (querySnapshot) {
        if (!querySnapshot.empty) {
          querySnapshot.forEach(function (doc) {
            console.log("The info is present in an object in the database.");
            // wrong user info
            navigation.navigate("HomePageScreen");
          });
        } else {
          console.log("Error!");
          Alert.alert("wrong info has not been registered!");
        }
      });
  };

  return (
    <View style={styles.container}>
        <Text style={styles.title}>Welcome To Study Budy</Text>
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
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password:"
          placeholderTextColor="#003f5c"
          onChangeText={setSearch}
          value={ptext}
          keyboardType="default"
        />
      </View>
      <Pressable
        onPress={() => {
          checkemail(text);
          userObj.email = text;
        
        }}
      >
      </Pressable>

      <Pressable
        
        onPress={() => {
          checkpassword(ptext);
            userObj.password = ptext;
        }}
      >
        
      </Pressable>

      <Pressable
        style={styles.loginBtn}
        onPress={() => {
            checkuserinfo(text, ptext);
          userObj.email = text;
            userObj.password = ptext;
        
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
  title: {
    fontWeight: "bold",
    fontSize: 32,
    fontFamily: "sans-serif-condensed",
    letterSpacing: 1,
    textAlign: "center",
    marginTop: 40,
    lineHeight: 40,
  },
  inputView: {
    backgroundColor: "#8639d4",
        borderRadius: 5,
        width: "70%",
        height: 40,
        alignItems: "center",
        marginBottom: 20,
        fontFamily: "sans-serif-condensed",
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
    fontFamily: "sans-serif-condensed",
  },

  loginBtn: {
    width:"80%",
   borderRadius:5,
   height:50,
   alignItems:"center",
   justifyContent:"center",
    marginTop:20,
   backgroundColor:"#8639d4",
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
    height:175,
    width:175,
    marginTop: 50,
  },
});
export default LoginScreen;
