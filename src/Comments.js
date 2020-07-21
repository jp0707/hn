import React, { Component } from 'react';
import { Text, View, FlatList } from 'react-native';

class Comments extends Component {
  stripHTML = (x) => {
    const regex = /(<([^>]+)>)/ig;
    return x.replace(regex, '');
  }

  render() {
    const renderComment = ({ item }) => {
      // Strip html
      // TODO: Figure out how to render HTML properly. Multiple WebViews don't work!
      const stripped = this.stripHTML(item.content);

      return (
        <View style={{marginLeft: 16, borderLeftWidth: 1, paddingLeft: 4}}>
          <Text>{stripped}</Text>
          <Comments comment={item} />
        </View>
      );
    };

    const stripped = this.stripHTML(this.props.comment.content);

    return (
      <View style={{margin: 8}}>
        <Text>{stripped}</Text>
        <FlatList
          data={this.props.comment.comments}
          renderItem={renderComment}
          keyExtractor={c => c.id}
        />
      </View>  
    );
  }
}

export default Comments;
