import React from 'react';
import {
  StyleSheet, TextInput, View,
} from 'react-native';

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
      this.setState({priceEntered:true}) :
      this.setState({priceEntered:false});
  }

  render() {
    let underlineColor = this.state.priceEntered ? '#4CAF50' : '#286DA8';
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 5,
        borderColor: underlineColor,
        borderWidth: 2,
        width: '100%',
        margin: 10,
      }
    });

    return (
      <View style={styles.container}>
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
