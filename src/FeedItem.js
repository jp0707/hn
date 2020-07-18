import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { ListItem } from 'react-native-elements'

class FeedItem extends Component {

  render() {
    let d = this.props.data;
    let subtitle = (
      <View>
        <Text style={{marginBottom: 4}}>{d.user} · {d.time_ago}</Text>
        <Text style={{marginBottom: 4}}>{d.url}</Text>
      </View>
    );

    return (
      <ListItem
        key={d.id}
        title={d.title}
        subtitle={subtitle}
        badge={{ value: d.points, status: "success", containerStyle: { marginTop: -20 } }}
        bottomDivider />
    );
  }
};

export default FeedItem;
