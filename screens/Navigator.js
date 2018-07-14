import React from 'react';
import { createSwitchNavigator, createStackNavigator } from 'react-navigation';

/* Routes */
import HomeScreen from './HomeScreen';
import SubmitReview from './SubmitReview';
import { SearchApp, SubmitApp, FinalizeApp} from './Connect';
import AuthLoadingScreen from './AuthLoadingScreen';
import SignInScreen from './SignInScreen';
import AppIntroScreen from './AppIntroScreen';
import PasswordResetScreen from './PasswordResetScreen';

const AppStack = createStackNavigator(
  {
    Home: HomeScreen,
    Search: SearchApp,
    Submit: SubmitApp,
    Finalize: FinalizeApp,
  },
  {
    initialRouteName: 'Home',
  }
);

const AuthStack = createStackNavigator(
  {
    SignIn: SignInScreen,
    PasswordReset: PasswordResetScreen,
  },
  {
    initialRouteName: 'SignIn',
  }
);

const RootStack = createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
    Intro: AppIntroScreen,
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
