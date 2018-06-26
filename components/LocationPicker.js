import React from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';


class LocationPicker extends React.Component {
  submitPlace(place, selector) {
    this.props.addPlace(place, selector);
  }

  render() {
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
              width: '100%'
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
              width: '100%'
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
