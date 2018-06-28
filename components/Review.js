import React from 'react';
import { TouchableHighlight, StyleSheet, Text, View, TextInput } from 'react-native';
import { numberWithCommas, timeFormatter, elapsedTime } from '../helpers';

class Review extends React.Component {
  constructor() {
    super();
    this.toggle = this.toggle.bind(this);
    this.state = {isCollapsed : true};
  }

  toggle() {
    this.setState({isCollapsed: !this.state.isCollapsed});
  }

  featureStyle(bool) {
    return (bool ? {color: 'green'} : {color: 'red'});
  }

  render() {
    const styles = StyleSheet.create({
      container: {
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: '#286DA8',
        width: '100%',
        margin: 10
      },
      header: {
        flexDirection: 'row',
        backgroundColor: '#286DA8',
        padding: 5,
      },
      origin: {

      },
      arrow: {
        paddingLeft: 10,
        paddingRight: 10,
      },
      destination: {

      },
      rowContainer: {
        alignItems: 'center',
        flexDirection: 'row'
      },
      details: {
        alignItems: 'center',
      },
      expandButton: {
        borderBottomWidth: 0.5,
        borderColor: '#286DA8',
      },
      companyPriceTime: {
        flexDirection: 'row'
      },
      titles: {
        alignItems: 'flex-end'
      },
      values: {
        paddingLeft: 5,
        paddingRight: 5
      },
      features: {
        flexDirection: 'row'
      },
      comments: {
        backgroundColor:'#6D7993',
        borderRadius: 20,
        padding:10,
        margin:5
      },
    });
    const { review } = this.props;
    const Breakdown = review.features.brokedown ?
      <Text>😢This bus brokedown at some point.😢</Text> :
      <Text>😁This bus did not break down!😁</Text>;
    const Collapsible = ({ bool }) => {
      let x = <View></View>;
      if(bool){return(x)}
      x =
      <View style={styles.details}>
        <View style={styles.companyPriceTime}>
          <View style={styles.titles}>
            <Text>Company:</Text>
            <Text>Price:</Text>
            <Text>Ticket time:</Text>
          </View>
          <View style={styles.values}>
            <Text>Company Here</Text>
            <Text>{numberWithCommas(review.price)} TSH</Text>
            <Text>{timeFormatter(review.ticket_time)}</Text>
          </View>
        </View>
        <Text>{'\n'}</Text>
        <Text>This bus has...</Text>
        <View style={styles.features}>
          <View style={styles.titles}>
            <Text>AC?</Text>
            <Text>Movies?</Text>
            <Text>USB charging?</Text>
          </View>
          <View style={styles.values}>
            <Text style={this.featureStyle(review.isAC)}>{review.features.isAC ? '👍' : '✗'}</Text>
            <Text style={this.featureStyle(review.isMovies)}>{review.features.isMovies ? '👍' : '✗'}</Text>
            <Text style={this.featureStyle(review.isUS)}>{review.features.isUSB ? '👍' : '✗'}</Text>
          </View>
          <View style={styles.titles}>
            <Text>Music Videos?</Text>
            <Text>Curtains?</Text>
          </View>
          <View style={styles.values}>
            <Text style={this.featureStyle(review.isMusicVideos)}>{review.features.isMusicVideos ? '👍' : '✗'}</Text>
            <Text style={this.featureStyle(review.isCurtains)}>{review.features.isCurtains ? '👍' : '✗'}</Text>
          </View>
        </View>
        {Breakdown}
        <Text>{'\n'}</Text>
        <View style={styles.comments}>
          <Text style={{color: 'white'}}>{review.comment}</Text>
        </View>
      </View>
      return(x);
    }

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.origin}>
            <Text style={{color:'white', textAlign:'right'}}>{review.origin}</Text>
            <Text style={{color:'white', textAlign:'right'}}>{timeFormatter(review.depart_time)}</Text>
          </View>
          <View style={styles.arrow}>
            <Text style={{color:'white'}}>➞</Text>
            <Text style={{color:'white'}}>➞</Text>
          </View>
          <View style={styles.destination}>
            <Text style={{color:'white'}}>{review.destination}</Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={{color:'white'}}>{timeFormatter(review.arrive_time)}</Text>
              <Text style={{color:'gold', textAlign:'center'}}>
                {elapsedTime(review.depart_time, review.arrive_time)}
              </Text>
            </View>
          </View>
        </View>
        <View>
          <TouchableHighlight style={styles.expandButton}
            underlayColor = {'#e9e9e9'}
            onPress={() => {this.toggle()}}>
          <Text> + Expand for Details </Text>
          </TouchableHighlight>
          <Collapsible bool={this.state.isCollapsed}/>
        </View>
      </View>
    )
  }
}

export default Review;
