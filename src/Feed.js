import React, { Component } from 'react';
import { ActivityIndicator, FlatList, View } from 'react-native';
import FeedItem from './FeedItem'

class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      items: [],
      page: 1,
      refreshing: false,
      loading: true,
      loadingMore: false,
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
          let newList = null;
          if (page === 1) {
            newList = result;
          } else {
            newList = [...this.state.items, ...result];
          }

          this.setState({
            refreshing: false,
            loading: false,
            items: newList,
            page: page + 1
          });
        },
        (error) => {
          this.setState({
            refreshing: false,
            loading: false,
            error: error
          });
          console.log("error:", error);
        }
      )
  }

  componentDidMount() {
    this.getTopStories(this.state.page, /* abortOnError = */false);
  }

  handleRefresh = () => {
    this.setState(
      {
        refreshing: true,
      },
      () => {
        this.getTopStories(1, false);
      }
    );
  };

  handleLoadMore = () => {
    this.setState(
      (prevState, nextProps) => ({
        loadingMore: true
      }),
      () => {
        this.getTopStories(this.state.page, false);
      }
    );
  };

  renderFooter = () => {
    if (!this.state.loadingMore) {
      return null;
    }

    return (
      <View
        style={{
          position: 'relative',
          paddingVertical: 20,
          borderTopWidth: 1,
          marginTop: 10,
          marginBottom: 10,
        }}>
        <ActivityIndicator animating size="large" />
      </View>
    );
  };
  
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
        onRefresh={this.handleRefresh}
        refreshing={this.state.refreshing}
        onEndReached={this.handleLoadMore}
        onEndReachedThreshold={0.80}
        ListFooterComponent={this.renderFooter}
      />
    );
  }
}

export default Feed;
