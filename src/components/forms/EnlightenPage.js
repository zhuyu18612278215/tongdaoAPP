/**
 * EnlightenPage zhuyu 2018/5/5
 */


import React, {
  Component,
  // PropTypes,
} from 'react';
import {
  SectionList,
  Text,
  View,
  Image,
} from 'react-native';
import {
  observer
} from 'mobx-react';

import Swiper from 'react-native-swiper';

import style from '../../css/EnlightenPageStyle';
import UserDefStatusBar from '../../common/StatusBar';
import SelectListHeaderButton from '../../common/SelectListHeaderButton';
import SelectListItemView from '../../common/SelectListItemView';
import SwiperImage from '../../common/SwiperImage';

import EnlightenDataStore from '../../store/EnlightenDataStore';

const Store = new EnlightenDataStore();
// const EnlightenStoreContext = React.createContext(Store);

const PAGE_WORD = {
  tabBarLabel: '闻道',
  more: '更多',
};

@observer
export default class EnlightenPage extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  static navigationOptions = ({
    navigation,
  }) => {
    // const params = navigation.state.params || {};

    return {
      tabBarLabel: PAGE_WORD.tabBarLabel,
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
    } else if (type === 'lecture') {
      this.props.navigation.navigate('LectureVideoPage', {
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
    item
  }) => {
    return (
      <View style = { style.itemView }>
        <View style={ style.item } >
          <SelectListItemView
            text = { item.data[0].title }
            img = { item.data[0].img }
            event = { this.renderItemEvent.bind(this,{title:item.data[0].title,img:item.data[0].img,summary:item.data[0].summary,type:item.data[0].type,store:Store}) }
          />
        </View>
        <View style = { style.itemSpace }/>
        <View style={ style.item } >
          <SelectListItemView
            text = { item.data[1].title }
            img = { item.data[1].img }
            event = { this.renderItemEvent.bind(this,{title:item.data[1].title,img:item.data[1].img,summary:item.data[1].summary,type:item.data[1].type,store:Store}) }
          />
        </View>
        <View style = { style.itemSpace }/>
        <View style={ style.item } >
          <SelectListItemView
            text = { item.data[2].title }
            img = { item.data[2].img }
            event = { this.renderItemEvent.bind(this,{title:item.data[2].title,img:item.data[2].img,summary:item.data[2].summary,type:item.data[2].type,store:Store}) }
          />
        </View>
      </View>
    );
  };

  sectionHeaderEvent = ({
    key,
    title,
    store,
  }) => {
    this.props.navigation.navigate('EnlightenChannelListPage', {
      key: key,
      title: title,
      store: store,
    });
  };

  renderSectionHeader = ({
    section,
  }) => {
    return (
      <View style = { style.sectionHeader }>
        <View style = { style.sectionHeaderLeftView }>
          <Text style = { style.sectionTitle }>
            { section.title }
          </Text>
        </View>
        <View style = { style.sectionHeaderRightView }>
          <SelectListHeaderButton
            text = { PAGE_WORD.more }
            event = { this.sectionHeaderEvent.bind(this,{key:section.key,title:section.title,store:Store}) }
          />
        </View>
      </View>
    );
  };

  listHeaderComponent = () => {
    return (
      <View style = { style.swiperView }>
        <Swiper
          style = { style.swiperStyle }
          horizontal = { true }
          showButtons = { true }
          autoplay = { true }
          height = { 200 }
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
    );
  };

  sectionListData = () => {
    data = [{
      key: 'wulonggong',
      title: '五龙宫频道',
      data: [{
        data: Store.wulonggongData.slice(0, 3),
      }, ]
    }, {
      key: 'classic',
      title: '道家经典',
      data: [{
        data: Store.classicData.slice(0, 3),
      }, ]
    }, {
      key: 'character',
      title: '道家人物',
      data: [{
        data: Store.characterData.slice(0, 3),
      }, ]
    }, {
      key: 'music',
      title: '道家音乐',
      data: [{
        data: Store.musicData.slice(0, 3),
      }, ]
    }, {
      key: 'lecture',
      title: '道家讲座',
      data: [{
        data: Store.lectureData.slice(0, 3),
      }, ]
    }, {
      key: 'sanctum',
      title: '道家圣地',
      data: [{
        data: Store.sanctumData.slice(0, 3),
      }, ]
    }, ];
    return data;
  };

  render() {
    const sections = this.sectionListData.call(this);
    return (
      <View style = { style.container }>
        <UserDefStatusBar/>
        <View style = { style.headerTitleView }>
          <View style = { style.headerTitleTextView }>
            <Text style = { style.headerTitleText }>
              { PAGE_WORD.tabBarLabel }
            </Text>
          </View>
        </View>

        <View style = { style.container }>
          <SectionList
            sections = { sections }
            renderItem = { this.renderItem }
            renderSectionHeader = { this.renderSectionHeader }
            ListHeaderComponent = { this.listHeaderComponent }
          />
        </View>

      </View>
    );
  }
}
