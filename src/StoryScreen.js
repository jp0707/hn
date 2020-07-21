import React, { Component } from 'react';
import { SafeAreaView, Text } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ArticleTab from './ArticleTab'
import CommentsTab from './CommentsTab'

const Tab = createMaterialTopTabNavigator();

class StoryScreen extends Component {

  render() {
  let d = this.props.route.params.data;
    return (
      <Tab.Navigator initialRouteName="Article" backBehavior='none'>
        <Tab.Screen name="Article" component={() => <ArticleTab url={d.url}/> }/>
        <Tab.Screen name="Comments" component={() => <CommentsTab news_id={d.id}/> } />
      </Tab.Navigator>
    );
  }

}

export default StoryScreen;
