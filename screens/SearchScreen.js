import React from 'react';
import { Alert, AsyncStorage, Picker, TextInput, ScrollView, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { toMinutes } from '../helpers';
import Review from '../components/Review';

class SearchScreen extends React.Component {
  static navigationOptions = {
    title: 'Search Reviews',
  }

  constructor(props){
    super(props);

    this.props.fetchReviews();

    this.state = {
      origin : '',
      destination : '',
      before: {'hours': 11, 'minutes': 59, 'AM': false},
      after: {'hours': 0, 'minutes': 0, 'AM': true},
      uid: '',
      sort: 'early',
    }
  }

  componentDidMount() {
    AsyncStorage.getItem("userToken")
      .then((uid) => this.setState({ uid }));
  }

  deleteReview(review) {
    Alert.alert(
      'Alert',
      'Are you sure you want to delete this review?',
      [
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed')},
        {text: 'Delete it', onPress: () => this.props.removeReview(this.getKey(review))},
      ]
    )
  }

  getKey(review) {
    const keys = Object.keys(this.props.reviews);
    const values = Object.values(this.props.reviews);
    return(keys[values.indexOf(review)]);
  }

  changeOrigin(origin) {
    this.setState({origin});
  }

  changeDestination(destination) {
    this.setState({destination});
  }

  search() {
    const reviews = this.sortBy(this.state.sort);
    const filtered = reviews
      // Filter by the Origin and Destination
      .filter(review =>
        review.origin.toUpperCase().indexOf(this.state.origin.toUpperCase()) === 0 &&
        review.destination.toUpperCase().indexOf(this.state.destination.toUpperCase()) === 0)
  //     // Filter by the time frame
  //     .filter(review =>
  //       // this.checkTime(review))
      .map((review, i) =>
        <View style={{marginTop:5, marginBottom:5, flexDirection:'row'}} key={i}>
          <Review key={i} i={i} review={review} />
          {this.checkUser(review) ?
            // Displays a delete button for each review the current user has submitted
            <View style={{position: 'absolute', right: 0}}>
              <Button title="X" color="red"
                onPress={() => this.deleteReview(review)}/>
            </View> :
            // Does not display button for reviews which do not belong to the user
            <View/>
          }
        </View>)
    // Returns a message if no reviews match
    return filtered.length ? filtered : <Text>No matches found.</Text>
  }

  checkUser(review) {
    return review.uid === this.state.uid;
  }

  sortBy(value) {
    let reviews;
    switch(value) {
      case 'new':
        reviews = Object.values(this.props.reviews).reverse();
        break;
      case 'old':
        reviews = Object.values(this.props.reviews);
        break;
      case 'early':
        reviews = Object.values(this.props.reviews).sort(function(a, b) {
          const aTime = toMinutes(a, 'depart');
          const bTime = toMinutes(b, 'depart');
          return (aTime - bTime)});
        break;
      case 'fast':
        reviews = Object.values(this.props.reviews).sort(function(a, b) {
          const aTime = toMinutes(a, 'arrive') - toMinutes(a, 'depart');
          const bTime = toMinutes(b, 'arrive') - toMinutes(b, 'depart');
          return (aTime - bTime)});
        break;
      default:
        reviews = Object.values(this.props.reviews).reverse();
        break;
    }
    return reviews;
  }

  render() {
    return (
      <ScrollView contentContainerStyle={{paddingHorizontal: 10, paddingBottom: 10}}>
        <View style={{ flex:1 }}>
          <Picker
            style={{ height: 50, width: 130 }}
            prompt='Sort by'
            onValueChange={(value) => this.setState({ sort:value })}
            selectedValue={this.state.sort}>
            <Picker.Item label="Newest Submitted" value="new" />
            <Picker.Item label="Oldest Submitted" value="old" />
            <Picker.Item label="Leave Earliest" value="early" />
            <Picker.Item label="Fastest Journey" value="fast" />
          </Picker>
        </View>
        <View style={{flexDirection: 'row'}}>
          <TextInput style={{width: '50%', fontSize: 20}}
            placeholder='Leaving from...'
            onChangeText={(origin) => {this.changeOrigin(origin)}}>
          </TextInput>
          <TextInput style={{width: '50%', fontSize: 20}}
            placeholder='Arriving to...'
            onChangeText={(destination) => {this.changeDestination(destination)}}>
          </TextInput>
        </View>
        <View style={{marginTop:10, marginBottom:10}}>
          {this.search()}
        </View>
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
      </ScrollView>
    );
  }
}

export default SearchScreen;
