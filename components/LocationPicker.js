import React from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';


class LocationPicker extends React.Component {
  constructor() {
    super();
    this.state = {
      originEntered: false,
      destinationEntered: false,
    };
  }

  submitPlace(place, selector) {
    this.props.addPlace(place, selector);
    console.log(place);
    selector === 'ORIGIN' ?
      this.setState({originEntered:true}) :
      this.setState({destinationEntered:true}) ;
  }

  render() {
    const originColor = this.state.originEntered ? '#4CAF50' : '#286DA8';
    const destinationColor = this.state.destinationEntered ? '#4CAF50' : '#286DA8';

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <GooglePlacesAutocomplete
          placeholder='Enter place of departure'
          onPress={(data) => {
            this.submitPlace(data.description.replace(', Tanzania', ''), 'ORIGIN');
          }}
          getDefaultValue={() => ''}
          query={{
            // available options: https://developers.google.com/places/web-service/autocomplete
            key: 'AIzaSyA8hrqfdivLy-0Zq27ZUF3TMXByV6CMxeQ',
            language: 'en',
            types: '(cities)',
            components: 'country:tz'
          }}
          styles={{
            textInputContainer: {
              width: '100%',
              backgroundColor: originColor
            },
            description: {
              fontWeight: 'bold'
            }
          }}
        />
        <GooglePlacesAutocomplete
          placeholder='Enter place of arrival'
          onPress={(data) => {
            this.submitPlace(data.description.replace(', Tanzania', ''), 'DESTINATION');
          }}
          getDefaultValue={() => ''}
          query={{
            // available options: https://developers.google.com/places/web-service/autocomplete
            key: 'AIzaSyA8hrqfdivLy-0Zq27ZUF3TMXByV6CMxeQ',
            language: 'en',
            types: '(cities)',
            components: 'country:tz'
          }}
          styles={{
            textInputContainer: {
              width: '100%',
              backgroundColor: destinationColor
            },
            description: {
              fontWeight: 'bold'
            }
          }}
        />
      </View>
    );
  }
}

export default LocationPicker;
