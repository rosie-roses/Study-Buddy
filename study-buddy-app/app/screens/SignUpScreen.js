import { StatusBar } from "expo-status-bar";
// import React from "react";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    Pressable,
   
} from "react-native";
import { addUserToFirebase, userObj } from "../../App";

const SignUpScreen = (props) => {
    const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');
     const [username, setusername] = useState('');
     const navigation = useNavigation();
     
return (
<View style={styles.container}>
<Text style={styles.title}>Welcome To Study Budy</Text>
<Image style={styles.image} source={require("../assets/official_logo.png")} />

    <StatusBar style="auto" />
    <View style={styles.inputView}>
  <TextInput
    style={styles.TextInput}
    placeholder="Email."
    placeholderTextColor="#003f5c"
    onChangeText={(email) => setEmail(email)}
  />
  </View >
  <View style={styles.inputView}> 
  <TextInput
    style={styles.TextInput}
    placeholder="Password."
    placeholderTextColor="#003f5c"
    secureTextEntry={true}
    onChangeText={(password) => setPassword(password)}
  />
  </View>
  <View style={styles.inputView}> 
  <TextInput
    style={styles.TextInput}
    placeholder="username."
    placeholderTextColor="#003f5c"
    secureTextEntry={true}
    onChangeText={(username) => setusername(username)}
  />
  </View>
  <Pressable
          style={styles.loginBtn}
          onPress={() => {
            userObj.username,
            userObj.email,
            userObj.password,
            addUserToFirebase(username, email,password);
            navigation.navigate("HomePageScreen");
            
          }}
        >
          <Text style={styles.loginText}>REGISTER</Text>
        </Pressable>
        

</View>

);
}

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
      },
      
    TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
      },

      loginBtn:{
   width:"80%",
   borderRadius:5,
   height:50,
   alignItems:"center",
   justifyContent:"center",
    marginTop:30,
   backgroundColor:"#8639d4",
 },
 signupbtn:{
    width:"80%",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
     marginTop:30,
    backgroundColor:"#8639d4",
 },
 image: {
    marginBottom: 40,
    height:175,
    width:175,
    marginTop: 50,
  },
});

    export default SignUpScreen;