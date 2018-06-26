import React from 'react';
import { createStackNavigator } from 'react-navigation';

/* Routes */
import HomeScreen from './HomeScreen';
import SearchScreen from './SearchScreen';
import SubmitReview from './SubmitReview';

import FinalizeScreen from './submitscreens/FinalizeScreen';

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Search: SearchScreen,
    Submit: SubmitReview,
    Finalize: FinalizeScreen,
  },
  {
    initialRouteName: 'Submit',
  }
);

export default class Navigator extends React.Component {
  render() {
    return <RootStack />
  }
}
