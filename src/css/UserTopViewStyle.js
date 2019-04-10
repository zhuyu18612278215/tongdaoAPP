/**
 * About UserTopView css file zhuyu 2018/5/17
 */

import {
  StyleSheet,
  Dimensions,
} from 'react-native';

const {
  width
} = Dimensions.get('window');


export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  imageView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  buttonView: {
    flex: 2,
  },
  textView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  userNameText: {
    fontSize: 18,
    color: '#fff',
  },
  iconView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  icon: {
    fontSize: 22,
    color: '#fff',
  },
})
