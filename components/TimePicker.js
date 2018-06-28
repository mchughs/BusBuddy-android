import React from 'react';
import { TimePickerAndroid, Text, View, TextInput, Button } from 'react-native';
import { timeFormatter } from '../helpers.js'

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
    //Assumes that the ticket-time and the depart-time are either the same over very close
    const defaultHour = selector !== 'ARRIVE_TIME' ? this.props.time.ticket_time.hour:
                                                     this.props.time.arrive_time.hour;
    const defaultMinute = selector !== 'ARRIVE_TIME' ? this.props.time.ticket_time.minute:
                                                       this.props.time.arrive_time.minute;
    try {
      const {action, hour, minute} = await TimePickerAndroid.open({
        hour: defaultHour,
        minute: defaultMinute,
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
      <View style={{flex:1, height: 200, justifyContent: 'space-around'}}>
        <Button
          color={ticketColor}
          title="Enter the ticket depart time"
          onPress={() => this.showPicker('TICKET_TIME')}
        />
      <Text style={{textAlign:'center'}}>Ticket time: {timeFormatter(this.props.time.ticket_time)}</Text>

        <Button
          color={departColor}
          title="Enter the actual time of depature"
          onPress={() => this.showPicker('DEPART_TIME')}
        />
        <Text style={{textAlign:'center'}}>Depart time: {timeFormatter(this.props.time.depart_time)}</Text>

        <Button
          color={arriveColor}
          title="Enter the actual time of arrival"
          onPress={() => this.showPicker('ARRIVE_TIME')}
        />
        <Text style={{textAlign:'center'}}>Arrive time: {timeFormatter(this.props.time.arrive_time)}</Text>
      </View>
    );
  }
}

export default TimePicker;
