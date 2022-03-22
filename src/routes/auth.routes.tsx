import React from "react";

import { createStackNavigator } from '@react-navigation/stack';

import { AppStackRoutes } from './app.stack.routes'
import { Confirmation } from '../screens/Confirmation';
import { Splash } from '../screens/Splash';
import { SignIn } from '../screens/SignIn';
import { FirstStep } from '../screens/SignUp/FirstStep';
import { SecondStep } from '../screens/SignUp/SecondStep';

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes() {
  return (
    <Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Splash"
    >
      <Screen
        name="Splash"
        component={Splash}
      />
      <Screen
        name="SignIn"
        component={SignIn}
      />
      <Screen
        name="FirstStep"
        component={FirstStep}
      />
      <Screen
        name="SecondStep"
        component={SecondStep}
      />
      <Screen
        name="Confirmation"
        component={Confirmation}
      />
    </Navigator>
  );
}