import React from 'react';
import { StyleSheet, Alert, AsyncStorage, KeyboardAvoidingView, Button, TextInput } from 'react-native';
import firebase from 'firebase';

class SignUpScreen extends React.Component {
  static navigationOptions = {
    title: 'Sign Up',
  };

  constructor () {
    super();
    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
      isloading: false
    }
  }

  handleSignup(e) {
    this.setState({isloading:true});
    e.preventDefault();
    const { email, password, confirmPassword } = this.state;
    if (password === confirmPassword) {
      const auth = firebase.auth();
      const promise = auth.createUserWithEmailAndPassword(email, password);
      promise.then(
        e => {
          Alert.alert('Thanks for signing up!');
          const p = auth.signInWithEmailAndPassword(email, password);
          p.then(
            e => {
              AsyncStorage.setItem('userToken', email);
              this.props.navigation.navigate('App');
            });
        }
      ).catch(
        e => {Alert.alert('Warning', e.message); this.setState({isloading:false})}
      )
    } else {
      Alert.alert('Warning', 'Please enter the same password in the \'Password\' '+
      'and \'Confirm Password\' fields.');
      this.setState({isloading:false})
    }
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
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <TextInput
         value={this.state.email}
         onChangeText={(email) => this.setState({ email })}
         placeholder={'Email'}
         keyboardType='email-address'
         style={styles.input}
        />
        <TextInput
         value={this.state.password}
         onChangeText={(password) => this.setState({ password })}
         placeholder={'Password'}
         secureTextEntry={true}
         style={styles.input}
        />
        <TextInput
         value={this.state.confirmPassword}
         onChangeText={(confirmPassword) => this.setState({ confirmPassword })}
         placeholder={'Confirm Password'}
         secureTextEntry={true}
         style={styles.input}
        />
        <Button
         title={'Sign Up'}
         onPress={(e) => {this.handleSignup(e)}}
         disabled={this.state.isloading}
        />
      </KeyboardAvoidingView>
    );
  }
}

export default SignUpScreen;
