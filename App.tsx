import 'react-native-gesture-handler';

import React from 'react';
import { StatusBar } from 'react-native';
import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components';

import { NavigationContainer } from '@react-navigation/native';

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
} from '@expo-google-fonts/poppins';

import theme from './src/global/styles/theme';

import { AppRouters } from './src/routes/app.routes';

import { SignIn } from './src/screens/SignIn';

import { AuthProvide } from './src/hooks/auth';

// import 'intl';
// import 'intl/locale-data/jsonp/pt-BR';


export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  });

  if(!fontsLoaded) {
    return <AppLoading/>
  }

  return (
    <ThemeProvider theme={theme}>
    <NavigationContainer>
      < StatusBar barStyle="light-content" />
      <AuthProvide>
        < SignIn />
        </AuthProvide>

    </NavigationContainer>
    </ThemeProvider>
  )
}