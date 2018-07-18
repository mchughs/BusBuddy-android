import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo';

const styles = StyleSheet.create({
  mainContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  image: {
    width: 320,
    height: 320,
  },
  text: {
    color: 'white',
    backgroundColor: 'transparent',
    textAlign: 'center',
    paddingHorizontal: 16,
    fontSize: 20,
  },
  title: {
    fontSize: 30,
    color: 'white',
    backgroundColor: 'transparent',
    textAlign: 'center',
    marginBottom: 16,
  }
});

const slides = [
  {
    key: '0',
    title: 'Welcome to Bus Buddy!',
    text: 'Bus Buddy is a website and app that allows Peace Corps volunteers (PCVs) to '+
          'record, and search for, information regarding Tanzania\'s bustling bus system.',
    icon: 'ios-bus',
    colors: ['#1eb53a','#00a3dd']
  },
  {
    key: '1',
    title: '',
    text: 'PCVs submit reviews of buses they have used, allowing other PCVs '+
          'to pick a good bus company for future rides.',
    icon: 'ios-thumbs-up-outline',
    colors: ['#fcd116','#00a3dd']
  },
  {
    key: '2',
    title: '',
    text: 'Bus Buddy is helping volunteers share their transportation '+
          'knowledge in a more systematic manner. \n\n ENJOY!',
    icon: 'ios-people-outline',
    colors: ['#000','#00a3dd']
  },
];

export default class AppIntroScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  _renderItem = props => (
    <LinearGradient
      style={[styles.mainContent, {
        paddingTop: props.topSpacer,
        paddingBottom: props.bottomSpacer,
        width: props.width,
        height: props.height,
      }]}
      colors={props.colors}
      start={{x: 0, y: .1}} end={{x: .1, y: 1}}
    >
      <Text style={styles.title}>{props.title}</Text>
      <Ionicons
        style={{ backgroundColor: 'transparent' }}
        name={props.icon}
        size={230}
        color="white" />
      <View>
        <Text style={styles.text}>{props.text}</Text>
      </View>
    </LinearGradient>
  )

  _onDone = () => {
    this.props.navigation.navigate('AuthLoading');
  }

  render() {
    return (
      <AppIntroSlider
        slides={slides}
        renderItem={this._renderItem}
        onDone={this._onDone}
        bottomButton
      />
    );
  }
}
