/**
 * AskTheWayPageFlatListItemView zhuyu 2018/5/14
 */

import React, {
  Component
} from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  Image,
} from 'react-native';

import style from '../css/AskTheWayPageFlatListItemViewStyle';

export default class AskTheWayPageFlatListItemView extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const {
      user = {
          userName: '',
          img: require('../components/img/test.jpg'),
          event: () => {
            alert('OK1');
          },
        },
        data = {
          time: '',
          title: '',
          text: '',
          event: () => {
            alert('OK2');
          },
        },
    } = this.props;
    const time = `发布于  ${ data.time }`;


    return (
      <View style = { style.container }>
        <View style = { style.userAndTimeView }>
          <View style = { style.userButtonView }>
            <TouchableOpacity style = { style.container } onPress = { user.event.bind(this) }>
              <View style = { style.userView }>
                <View style = { style.userImageView }>
                  <Image
                    source = { user.img }
                    style = { style.imageStyle }
                  />
                </View>
                <View style = { style.userNameView }>
                  <Text style = { style.userName } numberOfLines = { 1 }>
                    { user.userName }
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View style = { style.timeView }>
            <Text style = { style.time }>
              { time }
            </Text>
          </View>
        </View>
        <View style = { style.textButtonView }>
          <TouchableOpacity style = { style.container } onPress = { data.event.bind(this) }>
            <View style = { style.textView }>
              <View style = { style.textTitleView }>
                <Text style = { style.textTitle } numberOfLines = { 1 }>
                  { data.title }
                </Text>
              </View>
              <View style = { style.textTextView }>
                <Text style = { style.textText } numberOfLines = { 3 }>
                  { data.text }
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
