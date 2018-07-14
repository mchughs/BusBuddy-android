import React from 'react';
import { TouchableHighlight, AsyncStorage, StyleSheet, Text, View} from 'react-native';
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
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        alignItems: 'center'
      },
      text: {
        textAlignVertical: 'center',
        color:'white'
      },
      touchable: {
        position: 'absolute',
        alignItems: 'center',
        padding: 10,
        borderRadius: 10,
        elevation: 2, // Android
      },
      rectangleGreen: {
        width: '100%',
        height: '40%',
        backgroundColor: '#1eb53a'
      },
      rectangleYellow: {
        width: '100%',
        height: '3%',
        backgroundColor: '#fcd116'
      },
      rectangleBlack: {
        width: '100%',
        height: '14%',
        backgroundColor: '#000'
      },
      rectangleBlue: {
        width: '100%',
        height: '40%',
        backgroundColor: '#00a3dd'
      },
    });
    return (
      <View style={styles.container}>
        <View style={styles.rectangleGreen}/>
        <View style={styles.rectangleYellow}/>
        <View style={styles.rectangleBlack}/>
        <View style={styles.rectangleYellow}/>
        <View style={styles.rectangleBlue}/>
        <TouchableHighlight
          style={[styles.touchable, {top: '20%'}]}
          onPress={() => this.props.navigation.navigate('Search')}>
            <Text style={styles.text}>SEARCH REVIEWS</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={[styles.touchable, {top: '45%', borderColor: '#fcd116'}]}
          onPress={this._signOutAsync}>
          <View style={styles.container}>
            <Text style={styles.text}>SIGN OUT OF</Text>
            <Text style={styles.text}>{this.state.user}</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          style={[styles.touchable, {top: '74%'}]}
          onPress={() => this.props.navigation.navigate('Submit')}>
            <Text style={styles.text}>SUBMIT A REVIEW</Text>
        </TouchableHighlight>
      </View>
    );
  }

  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  }
}

export default HomeScreen;
