import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { React, useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TextField from "@mui/material/TextField"
import styled from "@emotion/styled";

import {MyComponent} from './MyComponent';
import {HomePage} from './HomePage';
import {PatientPage} from './PatientPage';
import SearchBar from './SearchBar';

const Stack = createNativeStackNavigator();

export default function App() {
    return (

      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="HomePage" component={HomePage} options={{ title: 'Home Page' }}
          />
          <Stack.Screen 
            name="Profile" component={MyComponent} options={{ title: 'Profile Page' }}
          />
          <Stack.Screen 
            name='PatientPage' component={PatientPage}
          />
        </Stack.Navigator>
      </NavigationContainer>

    );
}

