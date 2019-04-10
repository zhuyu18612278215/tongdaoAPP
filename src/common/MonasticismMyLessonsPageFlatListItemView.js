/**
 * MonasticismMyLessonsPageFlatListItemView zhuyu 2018/5/15
 */

import React, {
  Component
} from 'react';
import {
  TouchableOpacity,
  Text,
  View,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import style from '../css/MonasticismMyLessonsPageFlatListItemViewStyle';

const PAGE_WORD = {};

export default class MonasticismMyLessonsPageFlatListItemView extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const {
      text = '',
        event = () => {
          alert('OK');
        },
    } = this.props;
    return (
      <View style = { style.container }>
        <TouchableOpacity style = { style.container } onPress = { event.bind(this) }>
          <View style = { style.mainView }>
            <View style = { style.textView }>
              <Text style = { style.text }>
                { text }
              </Text>
            </View>
            <View style = { style.iconView }>
              <Icon name="angle-right" style={ style.icon }/>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
