import React from 'react';
import { Alert, AsyncStorage, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { reviewBase } from '../Firebase';

import Review from '../components/Review';

class FinalizeScreen extends React.Component {
  constructor () {
    super();
    this.state = { uid: '' };
  }

  finalize(params) {
    if (this.state.uid === 'guest@gmail.com') {
      Alert.alert('Pole sana!', 'As a guest you cannot submit reviews. '+
        'Please sign up for a new account or login to an existing account.');
      this.props.navigation.navigate('Home');
    } else {
      const reviewId = Date.now();
      const review = {...params, reviewId};
      // Firebase and expo don't play nice together
      // this triggers a 'setting timer' bug
      this.props.addReview(review);
      this.props.navigation.navigate('Home');
    }
  }

  componentDidMount() {
    AsyncStorage.getItem("userToken")
      .then((uid) => this.setState({ uid }));
  }

  render() {
    const { navigation } = this.props;
    const review = navigation.getParam('review', 'did not receive review');

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 10 }}>
        <Text>Double check all fields are correctly filled out.</Text>
        <Review review={review}/>
        <Button title="Finalize" onPress={() => {this.finalize(review);}}/>
        <Text>{'\n'}</Text>
        <Button title="Leave without Finalizing"
          onPress={() => {Alert.alert(
            'Warning',
            'If you click OK none of the information in your review will be saved for others to view.',
            [
              {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
              {text: 'OK', onPress: () => this.props.navigation.navigate('Home')},
            ]
          )}}/>
      </View>
    );
  }
}

export default FinalizeScreen;
