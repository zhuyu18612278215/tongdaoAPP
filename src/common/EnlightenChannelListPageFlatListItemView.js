/**
 * EnlightenChannelListPageFlatListItemView zhuyu 2018/5/21
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

import style from '../css/EnlightenChannelListPageFlatListItemViewStyle';

export default class EnlightenChannelListPageFlatListItemView extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const {
      img = require('../components/img/test.jpg'),
        title = '',
        summary = '',
        event = () => {
          alert('OK1');
        },
    } = this.props;
    return (
      <View style = { style.container }>
        <TouchableOpacity style = { style.container } onPress = { event.bind(this) }>
          <View style = { style.mainView }>
            <View style = { style.imageView }>
              <Image
                style = { style.image }
                source = { img }
              />
            </View>
            <View style = { style.wordView }>
              <View style = { style.exercisesView }>
                <Text style = { style.exercises }>
                  { title }
                </Text>
              </View>
              <View style = { style.summaryView }>
                <Text style = { style.summary } numberOfLines = { 5 }>
                  { summary }
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
