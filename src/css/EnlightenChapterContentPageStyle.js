/**
 * About EnlightenChapterContentPage css file zhuyu 2018/5/24
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
    padding: 15,
  },
  content: {
    fontSize: 16,
    color: '#000',
  },
})
