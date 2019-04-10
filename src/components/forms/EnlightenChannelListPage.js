/**
 * EnlightenChannelListPage zhuyu 2018/5/21
 */

import React, {
  Component,
} from 'react';
import {
  View,
  Text,
  FlatList,
} from 'react-native';
import {
  observer
} from 'mobx-react';

import style from '../../css/EnlightenChannelListPageStyle';
import EnlightenChannelListPageFlatListItemView from '../../common/EnlightenChannelListPageFlatListItemView';

@observer
export default class EnlightenChannelListPage extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  static navigationOptions = ({
    navigation
  }) => {
    return {
      title: navigation.getParam('title', ''),
    };
  };

  renderItemEvent = ({
    title,
    img,
    summary,
    type,
    store,
  }) => {
    if (type === 'music') {
      this.props.navigation.navigate('MusicPage', {
        title: title,
        img: img,
        summary: summary,
        type: type,
        store: store,
      });
    } else {
      this.props.navigation.navigate('EnlightenDetailPage', {
        title: title,
        img: img,
        summary: summary,
        type: type,
        store: store,
      });
    };
  };

  renderItem = ({
    item,
  }) => {
    let Store = this.props.navigation.getParam('store', {});
    return (
      <View style = { style.flatListItemView }>
        <EnlightenChannelListPageFlatListItemView
          img = { item.img }
          title = { item.title }
          summary = { item.summary }
          event = { this.renderItemEvent.bind(this,{title:item.title,img:item.img,summary:item.summary,type:item.type,store:Store}) }
        />
      </View>
    );
  };

  flatListData = () => {
    let type = this.props.navigation.getParam('key', '');
    let Store = this.props.navigation.getParam('store', {});
    let data = Store[`${type}Data`];
    return data;
  };

  render() {
    const data = this.flatListData.call(this);
    return (
      <View style={style.container}>
        <FlatList
          data = { data }
          renderItem = { this.renderItem }
        />
      </View>
    );
  };
}
