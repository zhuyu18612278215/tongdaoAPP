/**
 * About MusicPage css file zhuyu 2018/5/21
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
    backgroundColor: '#fff',
  },
  headerView: {
    flex: 4,
  },
  tailView: {
    flex: 1,
  },
  musicimgView: {
    flex: 1,
  },
  musicCtrlView: {
    flex: 1,
  },

})
