import React from 'react';
import { Switch, Text, View } from 'react-native';

class FeaturePicker extends React.Component {
  toggle(value, selector) {
    this.props.addFeatures(value, selector);
  }

  render() {
    const { features } = this.props;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <View style={{flexDirection:'row', flexWrap:'wrap'}}>
          <Text>Did the bus have AC?</Text>
          <Switch onValueChange={(value) => this.toggle(value, 'isAC')} value={features.isAC}/>
        </View>
        <View style={{flexDirection:'row', flexWrap:'wrap'}}>
          <Text>Did the bus have MusicVideos?</Text>
          <Switch onValueChange={(value) => this.toggle(value, 'isMusicVideos')} value={features.isMusicVideos}/>
        </View>
        <View style={{flexDirection:'row', flexWrap:'wrap'}}>
          <Text>Did the bus have Movies?</Text>
          <Switch onValueChange={(value) => this.toggle(value, 'isMovies')} value={features.isMovies}/>
        </View>
        <View style={{flexDirection:'row', flexWrap:'wrap'}}>
          <Text>Did the bus have Curtains?</Text>
          <Switch onValueChange={(value) => this.toggle(value, 'isCurtains')} value={features.isCurtains}/>
        </View>
        <View style={{flexDirection:'row', flexWrap:'wrap'}}>
          <Text>Did the bus have USB charging?</Text>
          <Switch onValueChange={(value) => this.toggle(value, 'isUSB')} value={features.isUSB}/>
        </View>
        <View style={{flexDirection:'row', flexWrap:'wrap'}}>
          <Text>Did the bus breakdown?</Text>
          <Switch onValueChange={(value) => this.toggle(value, 'brokedown')} value={features.brokedown}/>
        </View>
      </View>
    );
  }
}

export default FeaturePicker;
