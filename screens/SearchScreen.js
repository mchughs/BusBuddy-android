import React from 'react';
import { TextInput, ScrollView, StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Review from '../components/Review';

class SearchScreen extends React.Component {
  static navigationOptions = {
    title: 'Search Reviews',
  };

  constructor(props){
    super(props);

    this.props.fetchReviews();

    //this.search = this.search.bind(this);

    this.state = {
      origin : '',
      destination : '',
      before: {'hours': 11, 'minutes': 59, 'AM': false},
      after: {'hours': 0, 'minutes': 0, 'AM': true},
      uid: '',
    }
  }

  search() {
   const reviews = Object.values(this.props.reviews).reverse();
   const filtered = reviews
      // Filter by the Origin and Destination
      .filter(review =>
        review.origin.toUpperCase().indexOf(this.state.origin.toUpperCase()) === 0 &&
        review.destination.toUpperCase().indexOf(this.state.destination.toUpperCase()) === 0)
  //     // Filter by the time frame
  //     .filter(review =>
  //       // this.checkTime(review))
      .map((review, i) =>
        <View style={{marginTop:5, marginBottom:5}} key={i}>
          <Review key={i} i={i} review={review} />
          {/* display the review delete button here*/}
        </View>)
    // Returns a message if no reviews match
    return filtered.length ? filtered : <Text>No matches found.</Text>
  }

  render() {
    return (
      <ScrollView contentContainerStyle={{paddingHorizontal: 10, paddingBottom: 10}}>
        <TextInput></TextInput>
        <TextInput></TextInput>
        <Button title="Enter the ticket depart time" onPress={() => {}}/>
        <Button title="Enter the ticket depart time" onPress={() => {}}/>
        <View style={{marginTop:10, marginBottom:10}}>
          {this.search()}
        </View>
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </ScrollView>
    );
  }
}

export default SearchScreen;
