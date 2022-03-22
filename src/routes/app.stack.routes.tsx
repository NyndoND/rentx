import React from "react";

import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../screens/Home';
import { CarDetails } from '../screens/CarDetails';
import { Agendamentos } from '../screens/Agendamentos';
import { AgendamentoDetails } from '../screens/AgendamentoDetails';
import { Confirmation } from '../screens/Confirmation';
import { MyCars } from '../screens/MyCars';

const { Navigator, Screen } = createStackNavigator();

export function AppStackRoutes() {
  return (
    <Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Home"
    >
      <Screen
        name="Home"
        component={Home}
      />
      <Screen
        name="CarDetails"
        component={CarDetails}
      />
      <Screen
        name="Agendamentos"
        component={Agendamentos}
      />
      <Screen
        name="AgendamentoDetails"
        component={AgendamentoDetails}
      />
      <Screen
        name="Confirmation"
        component={Confirmation}
      />
      <Screen
        name="MyCars"
        component={MyCars}
      />
    </Navigator>
  );
}