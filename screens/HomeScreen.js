import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text h1>Bus Buddy</Text>
        <Button
          title="Search Reviews"
          onPress={() => this.props.navigation.navigate('Search')}
        />
        <Button
          title="Submit a Review"
          onPress={() => this.props.navigation.navigate('Submit')}
        />
      </View>
    );
  }
}

export default HomeScreen;
