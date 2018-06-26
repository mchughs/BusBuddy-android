import React from 'react';
import { createStackNavigator } from 'react-navigation';

/* Routes */
import p1 from './submitscreens/p1';
import p2 from './submitscreens/p2';
import p3 from './submitscreens/p3';

import FinalizeScreen from './submitscreens/FinalizeScreen';

const SubmitStack = createStackNavigator(
  {
    p1: p1,
    p2: p2,
    p3: p3,
    Finalize: FinalizeScreen,
  },
  {
    initialRouteName: 'p1',
  }
);

export default class SubmitNavigator extends React.Component {
  render() {
    return <SubmitStack />
  }
}
