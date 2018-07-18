import React from 'react';
import { Text, KeyboardAvoidingView, Alert, StyleSheet, TextInput, Button, AsyncStorage, View } from 'react-native';
import firebase from 'firebase';

class LogInScreen extends React.Component {
  static navigationOptions = {
    title: 'Please sign in',
  };

  constructor () {
    super();
    this.state = {
      email: '',
      password: '',
      isloading: false,
    };
  }

  handleLogin(e) {
    this.setState({isloading:true});
    e.preventDefault();
    const { email, password } = this.state;
    const auth = firebase.auth();
    const promise = auth.signInWithEmailAndPassword(email, password);
    promise.then(
      e => {
        AsyncStorage.setItem('userToken', email);
        this.props.navigation.navigate('App');
      }
    ).catch(
      e => {Alert.alert('Warning', e.message); this.setState({isloading:false})}
    )
  }

  handleSignup(e) {
    this.props.navigation.navigate('SignUp');
  }

  handleGuestLogin(e) {
    this.setState({isloading:true});
    e.preventDefault();
    Alert.alert('Warning', 'As a guest you will not be able to submit reviews!');
    const email = 'guest@gmail.com';
    const password = 'nopass1234';
    const auth = firebase.auth();
    const promise = auth.signInWithEmailAndPassword(email, password);
    promise.then(
      e => {
        AsyncStorage.setItem('userToken', email);
        this.props.navigation.navigate('App');
      }
    ).catch(
      e => {Alert.alert('Warning', e.message); this.setState({isloading:false})}
    );
  }

  handlePasswordReset() {
    this.props.navigation.navigate('PasswordReset');
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
      forgotPass: {
        width: 200,
        color:'blue',
        textAlign:'right',
        textDecorationLine:'underline',
        marginBottom: 20,
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
        <Text style={styles.forgotPass} onPress={() => this.handlePasswordReset()}>
          Forgot password?
        </Text>
        <View style={{flexDirection: 'row', alignSelf:'flex-start',}}>
           <View style={{flex:1, margin:10}}>
            <Button
             title={'Log in'}
             onPress={(e) => {this.handleLogin(e)}}
             disabled={this.state.isloading}
            />
          </View>
          <View style={{flex:1, margin:10}}>
            <Button
             title={'Sign up'}
             onPress={(e) => {this.handleSignup(e)}}
             disabled={this.state.isloading}
            />
          </View>
        </View>
        <View style={{marginTop: 10, width: '50%',}}>
          <Button
           title={'Guest Login'}
           onPress={(e) => {this.handleGuestLogin(e)}}
           disabled={this.state.isloading}
          />
        </View>
     </KeyboardAvoidingView>
    );
  }
}

export default LogInScreen;
