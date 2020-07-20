import React, { Component } from 'react';
import { SafeAreaView, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

class Article extends Component {

  render() {
    return (
      <SafeAreaView>
        <Text>
        hello {this.props.url}
        </Text>
      </SafeAreaView>
    );
  }

}

export default Article;
