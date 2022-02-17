import React from "react";

import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../screens/Home';
import { CarDetails } from '../screens/CarDetails';
import { Agendamentos } from '../screens/Agendamentos';
import { AgendamentoDetails } from '../screens/AgendamentoDetails';
import { AgendamentoConcluido } from '../screens/AgendamentoConcluido';
import { MyCars } from '../screens/MyCars';
import { Splash } from '../screens/Splash';

const { Navigator, Screen } = createStackNavigator();

export function StackRoutes() {
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
        name="Home"
        component={Home}
        options={{
          gestureEnabled: false,
        }}
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
        name="AgendamentoConcluido"
        component={AgendamentoConcluido}
      />
      <Screen
        name="MyCars"
        component={MyCars}
      />
    </Navigator>
  );
}