import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import Feed from './Feed'

function HomeScreen({ navigation }) {
  return (
    <SafeAreaView>
      <Feed style={{padding: 8}} navigation={navigation}/>
    </SafeAreaView>
  );
};

export default HomeScreen;
