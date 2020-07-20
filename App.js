/**
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import HomeScreen from './src/HomeScreen'
import StoryScreen from './src/StoryScreen'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const App: () => React$Node = () => {
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
          options={({ route }) => ({ title: route.params.data.title })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
