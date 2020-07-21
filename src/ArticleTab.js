import React, { Component } from 'react';
import { ActivityIndicator } from 'react-native';
import { WebView } from 'react-native-webview';

class ArticleTab extends Component {
  render() {
    return (
      <WebView
        source={{ uri: this.props.url }}
        startInLoadingState={true}
        renderLoading={() =>
          <ActivityIndicator
            color = '#bc2b78'
            size = "large"
            hidesWhenStopped={true}
          />}
      />
    );
  }
}

export default ArticleTab;
