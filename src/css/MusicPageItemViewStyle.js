/**
 * About MusicPageItemViewStyle css file zhuyu 2018/5/28
 */

import {
  StyleSheet,
} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  imageView: {
    flex: 7,
    padding: 30,
    // backgroundColor: 'blue',
  },
  wordView: {
    flex: 3,
    padding: 30,
    // backgroundColor: 'red',
  },
  image: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: null,
    height: null,
  },
  titleView: {
    flex: 1,
    // backgroundColor: 'green',
  },
  summaryView: {
    flex: 2,
    // backgroundColor: 'brown',
  },
  title: {
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  summary: {
    fontSize: 14,
    color: '#000',
    textAlign: 'center',
  },
})
