import React, { Component } from 'react';
import { FlatList } from 'react-native';
import FeedItem from './FeedItem'

class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      items: [],
      page: 0
    };
  }


  getTopStories(page, abortOnError) {
    if (this.state.error !== null && !abortOnError) {
      // don't keep loading the page on error.
      return;
    }

    let url = "http://api.hackerwebapp.com/news?page=" + page;
    fetch(url)
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            items: [...this.state.items, ...result],
          });
        },
        (error) => {
          this.setState({
            error: error
          });
          console.log("error:", error);
        }
      )
  }

  componentDidMount(){
    this.getTopStories(this.state.page, /* abortOnError = */false);
  }

  render() {
    const { error, items } = this.state;
    let element;
    // TODO: Handle error properly
    const renderItem = ({ item }) => (
      <FeedItem data={item}/>
    );

    return (
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    );
  }
}

export default Feed;
