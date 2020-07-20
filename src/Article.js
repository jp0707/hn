import React, { Component } from 'react';
import { WebView } from 'react-native-webview';

class Article extends Component {
  render() {
    return <WebView source={{ uri: this.props.url }}/>;
  }
}

export default Article;
