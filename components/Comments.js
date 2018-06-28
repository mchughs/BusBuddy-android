import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

class Comments extends React.Component {
  submitComment(comment) {
    this.props.addComment(comment);
  }
  render() {
    return (
      <View style={{flex:1}}>
        <Text>{"\n"}</Text>
        <View style={{flex:1, backgroundColor:'#6D7993', borderRadius: 20, padding:10}}>
          <Text h1 style={{fontSize:20, color:'white', textAlign:'center'}}>
            Include comments such as...
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={{color:'white'}}>{'\u2022'}</Text>
            <Text style={{color:'white'}}>
              Dropping Maps.Me pins for hard to find places.    Ex:
              "http://ge0.me/wa0p4j8jik/Old_Standi" for the old standi in
              Makambako.
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={{color:'white'}}>{'\u2022'}</Text>
            <Text style={{color:'white'}}>
              The duration of the bus breakdown.
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={{color:'white'}}>{'\u2022'}</Text>
            <Text style={{color:'white'}}>
              Whether the bus was extraordinarily hot/cold or loud/quiet.
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={{color:'white'}}>{'\u2022'}</Text>
            <Text style={{color:'white'}}>
              A phone number to call the bus company.
            </Text>
          </View>
        </View>
        <Text>{"\n"}</Text>
        <View style={{
            flex: 1,
            borderColor: '#6D7993',
            borderRadius: 20,
            borderWidth: 2,
            width: '100%',
            padding:10,
            marginBottom: 10}}>
          <TextInput
              placeholder='Enter comments here!'
              multiline={true}
              numberOfLines = {6}
              style={{textAlignVertical: "top"}}
              onChangeText={(comment) => this.submitComment(comment)}
          />
        </View>
      </View>
    );
  }
}

export default Comments;
