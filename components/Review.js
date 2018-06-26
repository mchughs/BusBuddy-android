import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

class Review extends React.Component {
  timeFormatter(time) {
    let str = '';
    str += time.hour.toString().padStart(2,'0') + ':';
    str += time.minute.toString().padStart(2,'0') + ' ';
    str += (time.isAM) ? 'AM' : 'PM';
    return str;
  }

  numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  render() {
    const { review } = this.props;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Origin: {review.origin}</Text>
        <Text>Destination: {review.destination}</Text>
        <Text>{this.numberWithCommas(review.price)} TSH</Text>
        <Text>Ticket time: {this.timeFormatter(review.ticket_time)}</Text>
        <Text>Depart time: {this.timeFormatter(review.depart_time)}</Text>
        <Text>Arrive time: {this.timeFormatter(review.arrive_time)}</Text>
      </View>
    )
  }
}

export default Review;
