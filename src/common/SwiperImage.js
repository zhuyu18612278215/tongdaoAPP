/**
 * SwiperImage zhuyu 2018/5/10
 */

import React, {
  Component
} from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  Image,
  Dimensions,
} from 'react-native';

import style from '../css/SwiperImageStyle';

const {
  width
} = Dimensions.get('window');

export default class SwiperImage extends Component {
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
      image = require('../components/img/test.jpg'),
        imageStyle = {
          height: 150,
          width: width,
        },
    } = this.props;
    return (
      <View style = { style.swiperItemView }>
        <TouchableOpacity
          style = { style.button }
          onPress = { this.onPressEvent }
        >
          <View style = { [style.imageView,imageStyle] }>
            <Image
              source = { image }
              style = { style.swiperImageStyle }
            />
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
