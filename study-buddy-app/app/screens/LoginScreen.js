/**
 * Login screen when the user launches the app. User must sign in with a registered email and password details.
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, Image, ActivityIndicator } from 'react-native';
import { auth } from "../../App";

export default class LoginScreen extends Component {

  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      isLoading: false
    }
  }
  updateInputVal = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  }
  userLogin = () => {
    // if the user does not enter anything and tries to sign in, alert pops up
    if (this.state.email === '' && this.state.password === '') { 
      Alert.alert('Please enter details to sign in!')
    } else {
      this.setState({
        isLoading: false, // otherwise, if they enter anything, set loading animation to false
      })
      // use Firebase authentication sign-in method 
      auth.signInWithEmailAndPassword(this.state.email, this.state.password).then((res) => {
        console.log(res)
        console.log('User logged-in successfully!')
        // successful login - trigger loading animation before showing welcome pop screen
        this.setState({
          isLoading: true,
          email: '',
          password: ''
        })
        this.props.navigation.navigate('Main');
      })
        .catch(error => Alert.alert('Incorrect login details. Please try again.')) // display alert box if user attempts to log in with incorrect credentials
    }
  }
  render() {
    // Loading animation
    console.log(this.state.isLoading);
    if (this.state.isLoading) {
      return (
        <View style={styles.preloader}>
          <ActivityIndicator size="large" color="#9E9E9E" />
        </View>
      )
    }
    return (
      
      <View style={styles.container}>
        <Image
        style={styles.image}
        source={require("../assets/official_logo.png")}
      />
      {/* Email input text field */}
        <TextInput
          style={styles.inputStyle}
          placeholder="Email"
          value={this.state.email}
          onChangeText={(val) => this.updateInputVal(val, 'email')}
        />
        {/* Password input text field */}
        <TextInput
          style={styles.inputStyle}
          placeholder="Password"
          value={this.state.password}
          onChangeText={(val) => this.updateInputVal(val, 'password')}
          maxLength={15}
          secureTextEntry={true}
        />
        {/* Button to sign in, when pressed user log-in occurs */}
        <Button
          color="#8639d4"
          title="Sign In"
          onPress={() => this.userLogin()}
        />
        {/* Link to signup screen if the user has not registered an account */}
        <Text
          style={styles.loginText}
          onPress={() => this.props.navigation.navigate('SignUpScreen')}>
          Don't have an account? <Text style={{color: '#3740FE'}}>Create a Study Buddy account.</Text>
        </Text>
        
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 35,
    backgroundColor: '#fff'
  },
  inputStyle: {
    width: '100%',
    marginBottom: 15,
    paddingBottom: 15,
    alignSelf: "center",
    borderColor: "#ccc",
    borderBottomWidth: 1
  },
  loginText: {
    color: 'black',
    marginTop: 25,
    textAlign: 'center'
  },
  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  image: {
    alignSelf: 'center',
    width: 225,
        height: 200,
    marginTop: 50,
    marginBottom: 50,
  },
  
});