import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, ActivityIndicator } from 'react-native';
import { firebase, auth } from "../../App";

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
    if (this.state.email === '' && this.state.password === '') {
      Alert.alert('Please enter details to sign in!')
    } else {
      this.setState({
        isLoading: false,
      })
      auth.signInWithEmailAndPassword(this.state.email, this.state.password).then((res) => {
        console.log(res)
        console.log('User logged-in successfully!')
        this.setState({
          isLoading: true,
          email: '',
          password: ''
        })
        this.props.navigation.navigate('Main');
      })
        .catch(error => Alert.alert('Incorrect login details. Please try again.'))
    }
  }
  render() {
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
        <TextInput
          style={styles.inputStyle}
          placeholder="Email"
          value={this.state.email}
          onChangeText={(val) => this.updateInputVal(val, 'email')}
        />
        <TextInput
          style={styles.inputStyle}
          placeholder="Password"
          value={this.state.password}
          onChangeText={(val) => this.updateInputVal(val, 'password')}
          maxLength={15}
          secureTextEntry={true}
        />
        <Button
          color="#3740FE"
          title="Sign In"
          onPress={() => this.userLogin()}
        />
        <Text
          style={styles.loginText}
          onPress={() => this.props.navigation.navigate('SignUp')}>
          Don't have an account? Click here to sign-up!
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
    color: '#3740FE',
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