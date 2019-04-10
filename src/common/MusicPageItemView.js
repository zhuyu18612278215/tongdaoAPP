/**
 * MusicPageItemView zhuyu 2018/5/28
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

import style from '../css/MusicPageItemViewStyle';

export default class MusicPageItemView extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const {
      img = require('../components/img/test.jpg'),
        title = '',
        summary = '',
    } = this.props;
    return (
      /*<View style = { style.container }>
        <View style = { style.mainView }>
          <View style = { style.imageView }>
            <Image
              style = { style.image }
              source = { img }
            />
          </View>
          <View style = { style.wordView }>
            <View style = { style.exercisesView }>
              <Text style = { style.exercises } numberOfLines = { 1 }>
                { title }
              </Text>
            </View>
            <View style = { style.summaryView }>
              <Text style = { style.summary } numberOfLines = { 3 }>
                { summary }
              </Text>
            </View>
          </View>
        </View>
      </View>*/
      <View style = { style.container }>
        <View style = { style.imageView }>
          <Image
            style = { style.image }
            source = { img }
          />
        </View>
        <View style = { style.wordView }>
          <View style = { style.titleView }>
            <Text style = { style.title } numberOfLines = { 1 }>
              { title }
            </Text>
          </View>
          <View style = { style.summaryView }>
            <Text style = { style.summary } numberOfLines = { 4 }>
              { summary }
            </Text>
          </View>
        </View>
      </View>
    );
  }
}
