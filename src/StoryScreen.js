import React, { Component } from 'react';
import { SafeAreaView, Text } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Article from './Article'
import Comments from './Comments'

const Tab = createMaterialTopTabNavigator();

class StoryScreen extends Component {

  render() {
  let d = this.props.route.params.data;
    return (
      <Tab.Navigator initialRouteName="Article">
        <Tab.Screen name="Article" component={() => <Article url={d.url}/> }/>
        <Tab.Screen name="Comments" component={() => <Comments news_id={d.id}/> } />
      </Tab.Navigator>
    );
  }

}

export default StoryScreen;
