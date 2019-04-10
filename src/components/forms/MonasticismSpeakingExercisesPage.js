/**
 * MonasticismSpeakingExercisesPage zhuyu 2018/5/15
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

import style from '../../css/MonasticismSpeakingExercisesPageStyle';
import SwiperImage from '../../common/SwiperImage';
import MonasticismSpeakingExercisesPageFlatListItemView from '../../common/MonasticismSpeakingExercisesPageFlatListItemView';

const PAGE_WORD = {
  listHeaderComponentText: '本栏目用来传授道长的功法讲义',
};

export default class MonasticismSpeakingExercisesPage extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  renderItem = ({
    item,
  }) => {
    return (
      <View style = { style.flatListItemView }>
        <MonasticismSpeakingExercisesPageFlatListItemView
          user = { item.user }
          img = { item.img }
          title = { item.title }
          summary = { item.summary }
          event = { item.event }
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

  flatListData = () => {
    data = [{
      user: '张至顺',
      img: require('../img/material/Zhang.jpg'),
      title: '《八部金刚功》',
      summary: '《道德经》文本以哲学意义之“道德”为纲宗，论述修身、治国、用兵、养生之道，而多以政治为旨归，乃所谓“内圣外王”之学，文意深奥，包涵广博，被誉为万经之王。',
      event: () => {
        alert('OK1');
      },
    }, {
      user: '陈撄宁',
      img: require('../img/material/Chen.jpg'),
      title: '《黄庭经》',
      summary: '《黄帝内经》奠定了人体生理、病理、诊断以及治疗的认识基础，是中国影响极大的一部医学著作，被称为医之始祖。',
      event: () => {
        alert('OK1');
      },
    }, {
      user: '任法融',
      img: require('../img/material/Ren.jpg'),
      title: '《道德经》',
      summary: '《黄帝阴符经》又称《阴符经》。李筌分为“神仙抱一之道”、“富国安人之法”、“强兵战胜之术”，全书以隐喻论述养生，愚者不查谓兵法权谋等说或谓苏秦之“太公阴符之谋”皆离旨甚远。',
      event: () => {
        alert('OK1');
      },
    }, ];
    return data;
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
