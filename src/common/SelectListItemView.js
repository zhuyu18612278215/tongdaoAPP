/**
 * SelectListItemView zhuyu 2018/5/9
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

import style from '../css/SelectListItemViewStyle';

export default class SelectListItemView extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  onPressEvent = () => {
    const {
      event = () => {
        alert('OK');
      },
    } = this.props;
    event();
  };

  render() {
    const {
      text = 'ok',
        img = require('../components/img/test.jpg'),
    } = this.props;
    return (
      <View style = { style.container }>
        <TouchableOpacity style = { style.container } onPress = { this.onPressEvent }>
          <View style = { style.imageView }>
            <Image
              source = { img }
              style = { style.imageStyle }
            />
          </View>
          <View style = { style.textView }>
            <Text style = { style.textStyle }>
              { text }
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
