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

      loginBtn:{
   width:"80%",
   borderRadius:25,
   height:50,
   alignItems:"center",
   justifyContent:"center",
    marginTop:40,
   backgroundColor:"#FF1493",
 },
 signupbtn:{
    width:"80%",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
     marginTop:40,
    backgroundColor:"#FF1493",
 },
 image: {
    marginBottom: 40,
    height:150,
    width:150,
    marginTop: 100,
  },
});

    export default SignUpScreen;