import React from 'react';

import { Home } from './src/screens/Home';
import { CarDetails } from './src/screens/CarDetails';
import { Agendamentos } from './src/screens/Agendamentos';
import { AgendamentoDetails } from './src/screens/AgendamentoDetails';
import { Confirmation } from './src/screens/Confirmation';

import { Routes } from './src/routes';

import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
} from '@expo-google-fonts/inter';
import {
  Archivo_400Regular,
  Archivo_500Medium,
  Archivo_600SemiBold,
} from '@expo-google-fonts/archivo';
import { ThemeProvider } from 'styled-components';
import AppLoading from 'expo-app-loading';
import theme from './src/styles/theme';

import { AppProvider } from './src/hooks';


export default function App() {

  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Archivo_400Regular,
    Archivo_500Medium,
    Archivo_600SemiBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }
  return (
    <ThemeProvider theme={theme}>
      <AppProvider>
        <Routes />
      </AppProvider>
    </ThemeProvider>
  );
}


