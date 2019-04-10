/**
 * MonasticismMyLessonsPage zhuyu 2018/5/15
 */


import React, {
  Component
} from 'react';
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';
// import {
//   StackNavigator,
// } from 'react-navigation';
import {
  Calendar,
  Agenda,
  LocaleConfig,
} from 'react-native-calendars';

import Swiper from 'react-native-swiper';

import SwiperImage from '../../common/SwiperImage';
import style from '../../css/MonasticismMyLessonsPageStyle';
import MonasticismMyLessonsPageFlatListItemView from '../../common/MonasticismMyLessonsPageFlatListItemView';
import Icon from 'react-native-vector-icons/FontAwesome';

const PAGE_WORD = {};

export default class MonasticismMyLessonsPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      type: 'list', //list or date
    };
  }

  renderItemList = ({
    item,
  }) => {
    return (
      <View style = { style.flatListItemView }>
        <MonasticismMyLessonsPageFlatListItemView
          text = { item.text }
          // event = {  }
        />
      </View>
    );
  };

  renderItemDate = ({
    item,
  }) => {
    return (
      <Calendar
        onDayPress={ (day) => { console.log('selected day', day) } }
        monthFormat={'yyyy MM'}
        hideArrows={ true }
        disableMonthChange={ true }
        firstDay={ 1 }
      />
    )
  };

  listHeaderComponent = () => {
    let icon = this.state.type === 'date' ?
      'calendar' :
      'list';
    let text = this.state.type === 'date' ?
      '列表模式' :
      '日历模式';
    return (
      <View>
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
        <View style = { style.listHeaderComponentView }>
          <View style = { style.listRenderButtonView }>
            <TouchableOpacity style = { style.listRenderButton } onPress = { this.listOrDateButton }>
              <Icon name = { icon } style={ style.icon }/>
              <View style = { style.buttonTextView }>
                <Text style = { style.text }>
                  { text }
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  listOrDateButton = () => {
    let type = this.state.type === 'date' ?
      'list' :
      'date';
    this.setState({
      type,
    });
  };

  flatListData = () => {
    let listdata = [{
      text: '打坐',
      event: () => {
        alert('OK1');
      },
    }, {
      text: '诵经',
      event: () => {
        alert('OK1');
      },
    }, {
      text: '修行',
      event: () => {
        alert('OK1');
      },
    }, ];
    let datedata = [{}, ];

    data = this.state.type === 'date' ?
      datedata : listdata;
    return data;
  };

  listOrDateView = () => {
    let renderItem = this.state.type === 'date' ?
      this.renderItemDate :
      this.renderItemList;
    let data = this.flatListData.call(this);
    return (
      <FlatList
        data = { data }
        renderItem = { renderItem }
        ListHeaderComponent = { this.listHeaderComponent }
        extraData={ this.state.type }
      />
    );
  };

  render() {
    return (
      <View style={style.container}>
        { this.listOrDateView.call(this) }
      </View>
    );
  }
}
