import React from 'react';
import { KeyboardAvoidingView, ScrollView, Button, StyleSheet, Text, View, TextInput } from 'react-native';

/*Components*/
import LocationPicker from '../components/LocationPicker';
import CompanyPicker from '../components/CompanyPicker';
import TicketPrice from '../components/TicketPrice';
import FeaturePicker from '../components/FeaturePicker';
import TimePicker from '../components/TimePicker';
import Comments from '../components/Comments';

class SubmitReview extends React.Component {
  constructor() {
    super();
    this.addPlace = this.addPlace.bind(this);
    this.addPrice = this.addPrice.bind(this);
    this.addFeatures = this.addFeatures.bind(this);
    this.addTime = this.addTime.bind(this);

    this.state = {
      origin: '',
      destination: '',
      price: 0,
      features: {
        isAC : false,
        isMusicVideos : false,
        isMovies : false,
        isCurtains : false,
        isUSB : false,
        brokedown: false,
      },
      ticket_time: {hour: 6, minute: 0, isAM: true},
      depart_time: {hour: 6, minute: 0, isAM: true},
      arrive_time: {hour: 6, minute: 0, isAM: true},
    };
  }
  static navigationOptions = {
    title: 'Submit a Review',
  };

  addPlace(place, selector) {
    switch(selector) {
      case 'ORIGIN': this.setState({origin:place}); break;
      case 'DESTINATION': this.setState({destination:place}); break;
      default: console.warn('Improper LocationPicker selector passed.'); break;
    }
  }

  addPrice(price) {
    this.setState({price});
  }

  addFeatures(value, selector) {
    const features = {...this.state.features};
    switch(selector) {
      case 'isAC': features.isAC = value; break;
      case 'isMusicVideos': features.isMusicVideos = value; break;
      case 'isMovies': features.isMovies = value; break;
      case 'isCurtains': features.isCurtains = value; break;
      case 'isUSB': features.isUSB = value; break;
      case 'brokedown': features.brokedown = value; break;
    }
    this.setState({features});
  }

  addTime(time, selector) {
    let t = {...this.state.ticket_time};
      t.hour = time.hour % 12;
      t.minute = time.minute;
      t.isAM = time.hour < 12;
    switch(selector) {
      case 'TICKET_TIME':
        this.setState({ticket_time: t});
        break;
      case 'DEPART_TIME':
        this.setState({depart_time: t});
        break;
      case 'ARRIVE_TIME':
        this.setState({arrive_time: t});
        break;
      default:
        console.warn('Improper TimePicker selector passed.');
        break;
      }
  }

  render() {
    const { navigation } = this.props;

    return(
      <KeyboardAvoidingView enabled style={{ flex:1 }} behavior="padding" keyboardVerticalOffset={100}>
        <ScrollView contentContainerStyle={{paddingHorizontal: 10, paddingBottom: 10}}>
          <LocationPicker addPlace={this.addPlace}/>
          <View style={{justifyContent: 'center', alignItems: 'center', padding:10}}>
            <CompanyPicker/>
            <TicketPrice addPrice={this.addPrice}/>
          </View>
          <FeaturePicker addFeatures={this.addFeatures} features={this.state.features}/>
          <TimePicker addTime={this.addTime} time={{
              ticket_time:this.state.ticket_time,
              depart_time:this.state.depart_time,
              arrive_time:this.state.arrive_time}}/>
          <Comments/>

          <Button
            title="Submit"
            onPress={() => navigation.push(
              'Finalize',
              { review: this.state })
            }
          />
        </ScrollView>
    </KeyboardAvoidingView>
    )
  }
}

export default SubmitReview;
