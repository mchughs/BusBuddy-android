import React from 'react';
import { createSwitchNavigator, createStackNavigator } from 'react-navigation';

/* Routes */
import HomeScreen from './HomeScreen';
import SubmitReview from './SubmitReview';
import { SearchApp, SubmitApp, FinalizeApp} from './Connect';
import AuthLoadingScreen from './AuthLoadingScreen';
import LogInScreen from './LogInScreen';
import SignUpScreen from './SignUpScreen';
import AppIntroScreen from './AppIntroScreen';
import PasswordResetScreen from './PasswordResetScreen';

const AppStack = createStackNavigator(
  {
    Home: HomeScreen,
    Search: SearchApp,
    Submit: SubmitApp,
    Finalize: FinalizeApp,
    Intro: AppIntroScreen,
  },
  {
    initialRouteName: 'Home',
  }
);

const AuthStack = createStackNavigator(
  {
    LogIn: LogInScreen,
    SignUp: SignUpScreen,
    PasswordReset: PasswordResetScreen,
  },
  {
    initialRouteName: 'LogIn',
  }
);

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
