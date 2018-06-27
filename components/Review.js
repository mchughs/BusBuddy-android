import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { numberWithCommas, timeFormatter } from '../helpers';

class Review extends React.Component {
  render() {
    const { review } = this.props;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Origin: {review.origin}</Text>
        <Text>Destination: {review.destination}</Text>
        <Text>{numberWithCommas(review.price)} TSH</Text>
        <Text>Ticket time: {timeFormatter(review.ticket_time)}</Text>
        <Text>Depart time: {timeFormatter(review.depart_time)}</Text>
        <Text>Arrive time: {timeFormatter(review.arrive_time)}</Text>
      </View>
    )
  }
}

export default Review;
