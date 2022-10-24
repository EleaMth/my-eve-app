import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {MyComponent} from './MyComponent';
import {HomePage} from './HomePage';

const Stack = createNativeStackNavigator();

export default function App() {
    return (

         <NavigationContainer>
                  <Stack.Navigator>
                    <Stack.Screen
                      name="Home"
                      component={HomePage}
                      options={{ title: 'Welcome' }}
                    />
                    <Stack.Screen name="Profile" component={MyComponent} />
                  </Stack.Navigator>
                </NavigationContainer>

    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bbf',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
