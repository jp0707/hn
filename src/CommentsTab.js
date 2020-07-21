import React, { Component } from 'react';
import { FlatList } from 'react-native';
import Comments from './Comments'

class CommentsTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      post: null,
    };
  }

  componentDidMount() {
    let url = "http://api.hackerwebapp.com/item/" + this.props.news_id;
    fetch(url)
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            post: result
          });
        },
        (error) => {
          this.setState({
            error: error
          });
          console.log("error:", error);
        }
      );
  }

  render() {
    const { error, post } = this.state;

    const renderItem = ({ item }) => {
      return <Comments comment={item}/>;
    };

    let c = [];
    if (this.state.post !== null) {
      c = this.state.post.comments
    }

    return (
      <FlatList
        data={c}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={this.state}
      />
    );
  }

}

export default CommentsTab;
