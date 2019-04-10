/**
 * AskTheWayInteractionPage zhuyu 2018/5/10
 */


import React, {
  Component
} from 'react';
import {
  Text,
  View,
  FlatList,
} from 'react-native';
// import {
//   StackNavigator,
// } from 'react-navigation';

import Swiper from 'react-native-swiper';

import style from '../../css/AskTheWayInteractionPageStyle';
import AskTheWayPageFlatListItemView from '../../common/AskTheWayPageFlatListItemView';
import SwiperImage from '../../common/SwiperImage';


const PAGE_WORD = {
  interactionLabel: '道长互动',
  speakLabel: '道长说',
  listHeaderComponentText: '本栏目用来交流居士的修行心得',
};

export default class AskTheWayInteractionPage extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  flatListData = () => {
    data = [{
      user: {
        userName: '居士1',
        img: require('../img/material/UserHeaderPic.jpg'),
        event: () => {
          alert('OK1');
        },
      },
      data: {
        time: '2018-5-14',
        title: '心得分享',
        text: '《道德经》文本以哲学意义之“道德”为纲宗，论述修身、治国、用兵、养生之道，而多以政治为旨归，乃所谓“内圣外王”之学，文意深奥，包涵广博，被誉为万经之王。',
        event: () => {
          alert('OK2');
        },
      },
    }, {
      user: {
        userName: '居士2',
        img: require('../img/material/UserHeaderPic.jpg'),
        event: () => {
          alert('OK1');
        },
      },
      data: {
        time: '2018-5-14',
        title: '心得分享',
        text: '《道德经》文本以哲学意义之“道德”为纲宗，论述修身、治国、用兵、养生之道，而多以政治为旨归，乃所谓“内圣外王”之学，文意深奥，包涵广博，被誉为万经之王。',
        event: () => {
          alert('OK2');
        },
      },
    }, {
      user: {
        userName: '居士3',
        img: require('../img/material/UserHeaderPic.jpg'),
        event: () => {
          alert('OK1');
        },
      },
      data: {
        time: '2018-5-14',
        title: '心得分享',
        text: '《道德经》文本以哲学意义之“道德”为纲宗，论述修身、治国、用兵、养生之道，而多以政治为旨归，乃所谓“内圣外王”之学，文意深奥，包涵广博，被誉为万经之王。',
        event: () => {
          alert('OK2');
        },
      },
    }, ];
    return data;
  };

  renderItem = ({
    item,
  }) => {
    return (
      <View style = { style.flatListItemView }>
        <AskTheWayPageFlatListItemView
          user = { item.user }
          data = { item.data }
        />
      </View>
    );
  };

  listHeaderComponent = () => {
    return (
      <View>
        <View style = { style.swiperView }>
          <Swiper
            style = { style.swiperStyle }
            horizontal = { true }
            showButtons = { true }
            autoplay = { true }
            height = { 150 }
          >
            <View style = { style.swiperItemView }>
              <SwiperImage
                imageStyle = { style.swiperImage }
                image = { require('../img/material/SwiperImage1.jpg') }
                // event = {}
              />
            </View>
            <View style = { style.swiperItemView }>
              <SwiperImage
                imageStyle = { style.swiperImage }
                image = { require('../img/material/SwiperImage2.jpg') }
                // event = {}
              />
            </View>
            <View style = { style.swiperItemView }>
              <SwiperImage
                imageStyle = { style.swiperImage }
                image = { require('../img/material/SwiperImage3.jpg') }
                // event = {}
              />
            </View>
          </Swiper>
        </View>
        <View style = { style.listHeaderComponentView }>
          <Text style = { style.listHeaderComponentText }>
            { PAGE_WORD.listHeaderComponentText }
          </Text>
        </View>
      </View>
    );
  };

  render() {
    const data = this.flatListData.call(this);
    return (
      <View style={style.container}>
        <FlatList
          data = { data }
          renderItem = { this.renderItem }
          ListHeaderComponent = { this.listHeaderComponent }
        />
      </View>
    );
  }
}
