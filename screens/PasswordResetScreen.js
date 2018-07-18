import React from 'react';
import { Alert, KeyboardAvoidingView, StyleSheet, TextInput, Text, View, Button } from 'react-native';
import firebase from 'firebase';

class PasswordResetScreen extends React.Component {
  static navigationOptions = {
    title: 'Reset Password',
  };

  constructor () {
    super();
    this.state = { email: '', isloading: false }
  }

  handleReset(e) {
    this.setState({isloading:true});
    e.preventDefault();
    const { email } = this.state;
    const auth = firebase.auth();
    const promise = auth.sendPasswordResetEmail(email);
    promise.then(
      e => {
        Alert.alert('Success',
        'An email has been sent to your account to reset your password.');
        this.props.navigation.navigate('LogIn');
      });
    promise.catch(
      e => {Alert.alert('Warning', e.message); this.setState({isloading:false})}
    );
  }

  render() {
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
      },
      input: {
        width: 200,
        height: 44,
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 10,
      },
    })

    return (
      <KeyboardAvoidingView style={styles.container}>
        <Text>Please enter your email address and we'll send you an email to reset your password.</Text>
        <TextInput
         value={this.state.email}
         onChangeText={(email) => this.setState({ email })}
         placeholder={'Email'}
         keyboardType='email-address'
         style={styles.input}
        />
        <Button
         title={'Send Reset'}
         onPress={(e) => {this.handleReset(e)}}
         disabled={this.state.isloading}
        />
      </KeyboardAvoidingView>
    );
  }
}

export default PasswordResetScreen;
