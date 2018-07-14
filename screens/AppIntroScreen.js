import React from 'react';
import { StyleSheet } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 320,
  }
});

const slides = [
  {
    key: '1',
    title: 'Welcome to Bus Buddy!',
    text: "Bus Buddy is a website and app that allows Peace Corps volunteers (PCVs) to "+
    "record, and search for, information regarding Tanzania's bustling bus system.",
    image: require('../images/bus.jpg'),
    imageStyle: styles.image,
    backgroundColor: '#1eb53a',
  },
  {
    key: '2',
    title: 'Welcome to Bus Buddy!',
    text: 'Bus Buddy is intended for use on mobile devices. PCVs '+
    'submit reviews of buses they have used, allowing other PCVs '+
    'to pick a good bus company for future rides.',
    image: require('../images/peace_corps_logo.png'),
    imageStyle: styles.image,
    backgroundColor: '#fcd116',
  },
  {
    key: '3',
    title: 'Welcome to Bus Buddy!',
    text: 'In Tanzania, information is diseminated almost entirely through social '+
    'interactions. There are few recorded resources to reference when it comes to '+
    'getting around the country. Bus Buddy is helping volunteers share their transportation '+
    'knowledge in a systematic manner.',
    image: require('../images/tanzania-flag-round-icon-256.png'),
    imageStyle: styles.image,
    backgroundColor: '#00a3dd',
  }
];

export default class AppIntroScreen extends React.Component {
  _onDone = () => {
    this.props.navigation.navigate('AuthLoading');
  }
  render() {
    return (
      <AppIntroSlider
        slides={slides}
        onDone={this._onDone}
      />
    );
  }
}
