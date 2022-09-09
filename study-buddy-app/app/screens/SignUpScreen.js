/**
 * Sign up screen available through the Sign in screen.
 * User must sign up with a registered email and password to have an account to access the app.
 */

import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, Button, Alert, ActivityIndicator } from 'react-native';
import { firebase, auth } from "../../App";

export default class SignUpScreen extends Component {
  
  constructor() {
    super();
    this.state = { 
      displayName: '',
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
  registerUser = () => {
    // if the user does not enter anything and tries to sign up, alert pops up
    if(this.state.email === '' && this.state.password === '') {
      Alert.alert('Please enter details to sign up!')
    } else {
      this.setState({
        isLoading: true,
      })
      // use Firebase account creation method 
      auth.createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((res) => {
        res.user.updateProfile({
          displayName: this.state.displayName
        })
        console.log('User registered successfully!')
        this.setState({
          isLoading: false,
          displayName: '',
          email: '', 
          password: ''
        })
        // after successfully signing up, take user back to the login screen
        this.props.navigation.navigate('Login')
      })
      .catch(error => this.setState({ errorMessage: error.message }))      
    }
  }
  render() {
    // Loading animation
    if(this.state.isLoading){
      return(
        <View style={styles.preloader}>
          <ActivityIndicator size="large" color="#9E9E9E"/>
        </View>
      )
    }    
    return (
      <View style={styles.container}>  
        {/* text heading on sign up screen */}
        <Text
          style={styles.heading}>
          Reach your academic goals with <Text style={{color: '#8639d4'}}>Study Buddy</Text>
        </Text>
        {/* Name text input */}
        <TextInput
          style={styles.inputStyle}
          placeholder="Name"
          value={this.state.displayName}
          onChangeText={(val) => this.updateInputVal(val, 'displayName')}
        />      
        {/* Email text input */}
        <TextInput
          style={styles.inputStyle}
          placeholder="Email"
          value={this.state.email}
          onChangeText={(val) => this.updateInputVal(val, 'email')}
        />
        {/* Password text input */}
        <TextInput
          style={styles.inputStyle}
          placeholder="Password"
          value={this.state.password}
          onChangeText={(val) => this.updateInputVal(val, 'password')}
          maxLength={15}
          secureTextEntry={true}
        />   
        {/* When signup button is pressed, user is registered through Firebase method*/}
        <Button
          color="#8639d4"
          title="Sign Up"
          onPress={() => this.registerUser()}
        />
         {/* Displayed text for user to click on if they have an account already, which directs
         them to the login screen.*/}
        <Text
          style={styles.loginText}
          onPress={() => this.props.navigation.navigate('LoginScreen')}>
          Already have an account?<Text style={{color: '#3740FE'}}> Sign in</Text>
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
  heading: {
    fontSize: 30,
    marginBottom: 40,
    textAlign: 'center',
    fontWeight: 'bold',
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
  }
});
