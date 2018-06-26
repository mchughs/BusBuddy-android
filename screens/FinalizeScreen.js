import React from 'react';
import { Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Review from '../components/Review';

class FinalizeScreen extends React.Component {
  render() {
    const { navigation } = this.props;
    const review = navigation.getParam('review', 'did not receive review');

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Double check all fields are correctly filled out.</Text>
        <Review review={review}/>
        <Button
          title="Finalize"
          onPress={() => {
            this.props.navigation.navigate('Home');}
          }
        />
      </View>
    );
  }
}

export default FinalizeScreen;
