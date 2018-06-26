import React from 'react';
import { TimePickerAndroid, Text, View, TextInput, Button } from 'react-native';

class TimePicker extends React.Component {
  constructor() {
    super();
    this.state = {
      ticketClicked: false,
      departClicked: false,
      arriveClicked: false,
    };
  }

  submitTime(time, selector) {
    this.props.addTime(time, selector);
  }

  async showPicker(selector) {
    try {
      const {action, hour, minute} = await TimePickerAndroid.open({
        hour: 12,
        minute: 0,
        is24Hour: false,
      });
      if (action !== TimePickerAndroid.dismissedAction) {
        switch(selector){
          case 'TICKET_TIME': this.setState({ticketClicked:true}); break;
          case 'DEPART_TIME': this.setState({departClicked:true}); break;
          case 'ARRIVE_TIME': this.setState({arriveClicked:true}); break;
          default: console.warn('Improper selector!'); break;
        }
        this.submitTime({hour, minute}, selector);
      }
    } catch ({code, message}) {
      console.warn('Cannot open time picker', message);
    }
  }

  render() {
    let ticketColor = this.state.ticketClicked ? '#4CAF50' : '#286DA8';
    let departColor = this.state.departClicked ? '#4CAF50' : '#286DA8';
    let arriveColor = this.state.arriveClicked ? '#4CAF50' : '#286DA8';

    return (
      <View>
        <Button
          color={ticketColor}
          title="Enter the ticket depart time"
          onPress={() => this.showPicker('TICKET_TIME')}
        />
        <Button
          color={departColor}
          title="Enter the actual time of depature"
          onPress={() => this.showPicker('DEPART_TIME')}
        />
        <Button
          color={arriveColor}
          title="Enter the actual time of arrival"
          onPress={() => this.showPicker('ARRIVE_TIME')}
        />
      </View>
    );
  }
}

export default TimePicker;
