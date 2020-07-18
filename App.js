/**
 * @format
 * @flow strict-local
 */

import React from 'react';
import { SafeAreaView } from 'react-native';
import Feed from './src/Feed'

const App: () => React$Node = () => {
  return (
    <SafeAreaView>
      <Feed style={{padding: 8}}/>
    </SafeAreaView>
  );
};

export default App;
