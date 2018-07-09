import React from 'react';
import { AsyncStorage, StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Bus Buddy',
  };

  constructor () {
    super();
    this.state = { user: '' }
  }

  componentDidMount() {
    AsyncStorage.getItem("userToken")
      .then((user) => this.setState({ user }) )
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text h1>Bus Buddy</Text>
        <Button title="Search Reviews" onPress={() => this.props.navigation.navigate('Search')}/>
        <Button title="Submit a Review" onPress={() => this.props.navigation.navigate('Submit')}/>
        <Text>Logged in as {this.state.user}</Text>
        <Button title="Sign Out" onPress={this._signOutAsync}/>
      </View>
    );
  }

  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  }
}

export default HomeScreen;
