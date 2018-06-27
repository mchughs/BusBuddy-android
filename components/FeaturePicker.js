import React from 'react';
import { Switch, Text, View } from 'react-native';

class FeaturePicker extends React.Component {
  toggle(value, selector) {
    this.props.addFeatures(value, selector);
  }

  render() {
    const { features } = this.props;
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'space-around', flexDirection:'row', padding: 10}} >
        <View style={{height: 200, justifyContent: 'space-between'}}>
          <Text>Did the bus have AC?</Text>
          <Text>Did the bus have MusicVideos?</Text>
          <Text>Did the bus have Movies?</Text>
          <Text>Did the bus have Curtains?</Text>
          <Text>Did the bus have USB charging?</Text>
          <Text>Did the bus breakdown?</Text>
        </View>
        <View style={{height: 200, justifyContent: 'space-between'}}>
          <Switch onValueChange={(value) => this.toggle(value, 'isAC')} value={features.isAC}/>
          <Switch onValueChange={(value) => this.toggle(value, 'isMusicVideos')} value={features.isMusicVideos}/>
          <Switch onValueChange={(value) => this.toggle(value, 'isMovies')} value={features.isMovies}/>
          <Switch onValueChange={(value) => this.toggle(value, 'isCurtains')} value={features.isCurtains}/>
          <Switch onValueChange={(value) => this.toggle(value, 'isUSB')} value={features.isUSB}/>
          <Switch onValueChange={(value) => this.toggle(value, 'brokedown')} value={features.brokedown}/>
        </View>      
      </View>
    );
  }
}

export default FeaturePicker;
