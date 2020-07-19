/**
 * @format
 * @flow strict-local
 */

import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import HomeScreen from './src/HomeScreen'
import StoryScreen from './src/StoryScreen'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const App: () => React$Node = () => {
  console.log("App");
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen 
          name="HomeScreen"
          component={HomeScreen}
          options={{ title: 'Hacker News' }}
        />
        <Stack.Screen
          name="StoryScreen" 
          component={StoryScreen} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
