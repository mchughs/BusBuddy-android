import React from 'react';
import { Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Review from '../components/Review';

class FinalizeScreen extends React.Component {
  finalize(params) {
    const reviewId = Date.now();
    const review = {...params, reviewId};
    // Will wait to implement until Expo and React-native-firebase can play nicely
    // dispatch => reviewBase.push(review);
    this.props.navigation.navigate('Home');
  }

  render() {
    const { navigation } = this.props;
    const review = navigation.getParam('review', 'did not receive review');

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 10 }}>
        <Text>Double check all fields are correctly filled out.</Text>
        <Review review={review}/>
        <Button title="Finalize" onPress={() => {this.finalize(review);}}/>
      </View>
    );
  }
}

export default FinalizeScreen;
