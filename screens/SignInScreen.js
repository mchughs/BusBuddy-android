import React from 'react';
import { Alert, StyleSheet, TextInput, Button, AsyncStorage, View } from 'react-native';
import firebase from 'firebase';

class SignInScreen extends React.Component {
  static navigationOptions = {
    title: 'Please sign in',
  };

  constructor () {
    super();
    this.state = { email: '', password: '' };
  }

  handleLogin(e) {
    e.preventDefault();
    const { email, password } = this.state;
    const auth = firebase.auth();
    const promise = auth.signInWithEmailAndPassword(email, password);
    promise.then(
      e => {
        AsyncStorage.setItem('userToken', email);
        this.props.navigation.navigate('App');
      });
    promise.catch(
      e => console.log(e)
    );
  }

  handleSignup(e) {
    e.preventDefault();
    const { email, password } = this.state;
    const auth = firebase.auth();
    const promise = auth.createUserWithEmailAndPassword(email, password);
    promise.then(e => Alert.alert('Thanks for signing up! Please click the Log in button!'));
    promise.catch(e => console.log(e));
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
      <View style={styles.container}>
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
      <View style={{flexDirection:'row'}}>
          <Button
           title={'Log in'}
           style={styles.input}
           onPress={(e) => {this.handleLogin(e)}}
          />
          <Button
           title={'Sign up'}
           style={styles.input}
           onPress={(e) => {this.handleSignup(e)}}
          />
        </View>
     </View>
    );
  }
}

export default SignInScreen;
