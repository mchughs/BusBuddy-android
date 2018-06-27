import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

class TicketPrice extends React.Component {
  constructor() {
    super();
    this.state = {
      priceEntered: false,
    };
  }

  submitPrice(price) {
    this.props.addPrice(price);
    price !== '' ?
      this.setState({priceEntered:true}):
      this.setState({priceEntered:false});
  }

  render() {
    let underlineColor = this.state.priceEntered ? '#4CAF50' : '#286DA8';
    return (
      <View style={{
          flex: 1,
          borderColor: underlineColor,
          borderBottomWidth: 2,
          width: '100%',
          margin: 10}}>
        <TextInput
            style={{fontSize: 20}}
            placeholder='Enter the ticket price'
            keyboardType='numeric'
            onChangeText={(price) => this.submitPrice(price)}
        />
      </View>
    );
  }
}

export default TicketPrice;
