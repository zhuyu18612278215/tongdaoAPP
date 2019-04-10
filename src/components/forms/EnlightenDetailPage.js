/**
 * EnlightenDetailPage zhuyu 2018 / 5 / 23
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
// import Video from 'react-native-video';

import style from '../../css/EnlightenDetailPageStyle';
import EnlightenDetailPageItemView from '../../common/EnlightenDetailPageItemView';
import EnlightenClassicDetailFlatListItemView from '../../common/EnlightenClassicDetailFlatListItemView';
// import MusicVideoView from '../../common/MusicVideoView';

@observer
export default class EnlightenDetailPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isPlay: 1,
    };
  }

  static navigationOptions = ({
    navigation
  }) => {
    return {
      title: navigation.getParam('title', ''),
    };
  };

  flatListData = () => {
    let type = this.props.navigation.getParam('type', '');
    let store = this.props.navigation.getParam('store', '');
    let title = this.props.navigation.getParam('title', '');
    let data;
    if (type === 'classic') {
      data = store[`classicDetailData`].filter(value => {
        return value.title === title;
      })[0].chapter;
    } else {
      data = store[`${type}Data`].filter(value => {
        return value.title === title;
      });
    };
    return data;
  };

  renderItemEvent = ({
    title,
    store,
    chapterTitle,
  }) => {
    this.props.navigation.navigate('EnlightenChapterContentPage', {
      title: title,
      store: store,
      chapterTitle: chapterTitle,
    });
  };

  renderItem = ({
    item,
  }) => {
    let type = this.props.navigation.getParam('type', '');
    let store = this.props.navigation.getParam('store', '');
    let title = this.props.navigation.getParam('title', '');
    let returnData;
    let introduction = (
      <View style = { style.introductionView }>
        <Text style = { style.introductionText }>{ item.introduction }</Text>
      </View>
    );
    let chapter = (
      <View style = { style.flatListItemView }>
        <EnlightenClassicDetailFlatListItemView
          event = { this.renderItemEvent.bind(this,{ title:title,store:store,chapterTitle:item.chapterTitle, }) }
          text = { item.chapterTitle }
        />
      </View>
    );
    // let video = (
    //   <View style = { style.videoView }>
    //     <Video
    //       source = { require('../video/test.mp4') }
    //       ref = 'videoPlayer'
    //       rate = { 1 }
    //       volume = { 1.0 }
    //       muted = { false }
    //       pause = { false }
    //       resizeMode = 'contain'
    //       repeat = { false }
    //       playInBackground = { false }
    //       style = { style.video }
    //     />
    //   </View>
    // );
    // let music = (
    //   <View style = { style.musicView }>
    //       <MusicVideoView/>
    //   </View>
    // );

    switch (type) {
      case 'wulonggong':
        returnData = introduction;
        break;
      case 'classic':
        returnData = chapter;
        break;
      case 'character':
        returnData = introduction;
        break;
        // case 'music':
        //   returnData = music;
        //   break;
        // case 'lecture':
        //   returnData = video;
        //   break;
      case 'sanctum':
        returnData = introduction;
        break;
    };
    return returnData;
  };

  listHeaderComponent = ({
    listHeaderComponentText
  }) => {
    return (
      <View>
        <View style = { style.listHeaderComponentView }>
          <EnlightenDetailPageItemView
            img = { this.props.navigation.getParam('img','') }
            title = { this.props.navigation.getParam('title','') }
            summary = { this.props.navigation.getParam('summary','') }
          />
        </View>
        <View style = { style.listHeaderComponentTextView }>
          <Text style = { style.listHeaderComponentText }>
            { listHeaderComponentText }
          </Text>
        </View>
      </View>
    );
  };


  render() {
    let type = this.props.navigation.getParam('type', '');
    let data = this.flatListData.call(this);
    let listHeaderComponentText;
    switch (type) {
      case 'wulonggong':
        listHeaderComponentText = '道长简介';
        break;
      case 'classic':
        listHeaderComponentText = '章节目录';
        break;
      case 'character':
        listHeaderComponentText = '道家渊源';
        break;
        // case 'music':
        //   listHeaderComponentText = '音乐欣赏';
        //   break;
        // case 'lecture':
        //   listHeaderComponentText = '讲座简介';
        //   break;
      case 'sanctum':
        listHeaderComponentText = '道家渊源';
        break;
    };
    return (
      <View style={style.container}>
        <FlatList
          data = { data }
          renderItem = { this.renderItem }
          ListHeaderComponent = { this.listHeaderComponent.bind(this,{ listHeaderComponentText:listHeaderComponentText }) }
        />
      </View>
    );
  };
}
