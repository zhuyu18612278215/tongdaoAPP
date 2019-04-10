/**
 * About EnlightenDetailPageItemViewStyle css file zhuyu 2018/5/22
 */

import {
  StyleSheet,
} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  mainView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  imageView: {
    flex: 1,
    marginRight: 5,
  },
  wordView: {
    flex: 2,
    justifyContent: 'space-around',
    marginLeft: 10
  },
  image: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: null,
    height: null,
  },
  exercisesView: {
    flex: 1,
  },
  summaryView: {
    flex: 3,
  },
  exercises: {
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
  },
  summary: {
    fontSize: 16,
    color: '#000',
  },

})
