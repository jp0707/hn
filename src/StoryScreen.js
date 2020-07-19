import React, { Component } from 'react';
import { SafeAreaView, Text } from 'react-native';

class StoryScreen extends Component {

  render() {
    return (
      <SafeAreaView>
        <Text>
          {this.props.route.params.id}
        </Text>
      </SafeAreaView>
    );
  }

}

export default StoryScreen;
