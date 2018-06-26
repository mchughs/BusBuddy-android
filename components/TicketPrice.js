import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

class TicketPrice extends React.Component {
  submitPrice(price) {
    this.props.addPrice(price);
  }

  render() {
    const styles = StyleSheet.create({
      priceInput: {
        fontSize: 20
      },
    });

    return (
      <View>
        <Text>Enter the ticket price:</Text>
        <TextInput
          style={styles.priceInput}
          keyboardType='numeric'
          onChangeText={(price) => this.submitPrice(price)}
        />
      </View>
    );
  }
}

export default TicketPrice;
