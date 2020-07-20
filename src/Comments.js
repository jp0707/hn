import React, { Component } from 'react';
import { SafeAreaView, Text } from 'react-native';

class Comments extends Component {

  render() {
    return (
     <Text>Comments {this.props.news_id}</Text>
    );
  }

}

export default Comments;
