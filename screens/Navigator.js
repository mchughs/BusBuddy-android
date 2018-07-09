import React from 'react';
import { createSwitchNavigator, createStackNavigator } from 'react-navigation';

/* Routes */
import HomeScreen from './HomeScreen';
import SubmitReview from './SubmitReview';
import { SearchApp, FinalizeApp} from './Connect';
import AuthLoadingScreen from './AuthLoadingScreen';
import SignInScreen from './SignInScreen';


const AppStack = createStackNavigator(
  {
    Home: HomeScreen,
    Search: SearchApp,
    Submit: SubmitReview,
    Finalize: FinalizeApp,
  },
  {
    initialRouteName: 'Home',
  }
);

const AuthStack = createStackNavigator({ SignIn: SignInScreen });

const RootStack = createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
);

export default class Navigator extends React.Component {
  render() {
    return <RootStack />
  }
}
