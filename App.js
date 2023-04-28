import React from 'react';
import StackNavigator from './StackNavigator';
import { LogBox } from 'react-native'
LogBox.ignoreAllLogs()
import { NavigationContainer } from '@react-navigation/native';
import { FirebaseAuth } from './hooks/useAuth';
import { TailwindProvider } from 'tailwind-rn';
import utilities from './tailwind.json';
// import * as WebBrowser from 'expo-web-browser';
// import * as Google from 'expo-auth-session/providers/google';



export default function App() {
  return (

    <NavigationContainer>
      <FirebaseAuth>
        <TailwindProvider utilities={utilities}>
          <StackNavigator />
        </TailwindProvider>
      </FirebaseAuth>
    </NavigationContainer>
  )
}