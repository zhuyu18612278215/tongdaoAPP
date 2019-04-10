/**
 * EnlightenChapterContentPage zhuyu 2018 / 5 / 24
 */

import React, {
  Component
} from 'react';
import {
  Text,
  View,
  FlatList,
  WebView,
} from 'react-native';
import {
  observer
} from 'mobx-react';

import style from '../../css/EnlightenChapterContentPageStyle';

@observer
export default class EnlightenChapterContentPage extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  renderItem = ({
    item
  }) => {
    return (
      <View>
        <Text style = { style.content }>
          { item.content }
        </Text>
      </View>
    );
  };

  render() {
    let store = this.props.navigation.getParam('store', '');
    let title = this.props.navigation.getParam('title', '');
    let chapterTitle = this.props.navigation.getParam('chapterTitle', '');
    let data = store[`classicDetailData`].filter(value => {
      return value.title === title;
    })[0].data.filter(value => {
      return value.chapter === chapterTitle;
    });
    return (
      <View style = { style.container }>
        <FlatList
          data = { data }
          renderItem = { this.renderItem }
        />
      </View>
    );
  }
}
