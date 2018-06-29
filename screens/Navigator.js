import React from 'react';
import { createStackNavigator } from 'react-navigation';

/* Routes */
import HomeScreen from './HomeScreen';
import SubmitReview from './SubmitReview';
import { SearchApp, FinalizeApp} from './Connect';


const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Search: SearchApp,
    Submit: SubmitReview,
    Finalize: FinalizeApp,
  },
  {
    initialRouteName: 'Search',
  }
);

export default class Navigator extends React.Component {
  render() {
    return <RootStack />
  }
}
