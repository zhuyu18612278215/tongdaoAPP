/**
 * MonasticismSpeakingExercisesPageFlatListItemView zhuyu 2018/5/15
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

import style from '../css/MonasticismSpeakingExercisesPageFlatListItemViewStyle';

const PAGE_WORD = {
  taoist: '道长',
};

export default class MonasticismSpeakingExercisesPageFlatListItemView extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const {
      user = '',
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
              <View style = { style.taoistView }>
                <Text style = { style.taoist }>
                  { `${ user }  ${ PAGE_WORD.taoist }` }
                </Text>
              </View>
              <View style = { style.exercisesView }>
                <Text style = { style.exercises }>
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
        </TouchableOpacity>
      </View>
    );
  }
}
