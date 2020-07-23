import React, { Component } from 'react';
import { Text, View, FlatList } from 'react-native';
import { AllHtmlEntities } from 'html-entities';

class Comments extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isOpen: true
    };
  }

  stripHTML = (x) => {
    const regex = /(<([^>]+)>)/ig;
    return x.replace(regex, '');
  }

  onLongPressComment = () => {
    if(this.state.isOpen){
      this.setState({
        isOpen: false
      });
    }
  }
  onPressComment = () => {
    if(!this.state.isOpen){
      this.setState({
        isOpen: true
      });
    }
  }

  createCommentText = (comment) => {
    const entities = new AllHtmlEntities();
    const stripped = this.stripHTML(entities.decode(comment));
    if(this.state.isOpen){
      return (
        <Text 
          onLongPress={this.onLongPressComment} 
          onPress={this.onPressComment}>
            {stripped}
        </Text>
      );
    }

    return (
      <Text
        numberOfLines={2}
        ellipsizeMode='tail'
        onLongPress={this.onLongPressComment}
        onPress={this.onPressComment}>
          {stripped}
      </Text>
    );
  }
  render() {
    const renderComment = ({ item }) => {
      // TODO: Figure out how to render HTML properly. Multiple WebViews don't work!
      let text = this.createCommentText(item.content);
      let children_comments = null;
      if(this.state.isOpen){
        children_comments = <Comments comment={item} />;
      }
      return (
        <View style={{marginLeft: 16, borderLeftWidth: 1, paddingLeft: 4}}>
          {text}
          {children_comments}
        </View>
      );
    };
    
    let text = this.createCommentText(this.props.comment.content);
    let comments_list = null;
    if(this.state.isOpen){
      comments_list = (
        <FlatList
          data={this.props.comment.comments}
          renderItem={renderComment}
          keyExtractor={c => c.id}
        />);
    }
    return (
      <View style={{margin: 8}}>
        {text}
        {comments_list}
      </View>  
    );
  }
}

export default Comments;
