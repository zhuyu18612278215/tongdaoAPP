/**
 * About SwiperImage css file zhuyu 2018/5/10
 */

import {
  StyleSheet,
  Dimensions,
} from 'react-native';

const {
  width
} = Dimensions.get('window');

export default StyleSheet.create({
  swiperItemView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    flex: 1,
    borderWidth: 0,
  },
  imageView: {
    flex: 1,
  },
  swiperImageStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: null,
    height: null,
  },
})
