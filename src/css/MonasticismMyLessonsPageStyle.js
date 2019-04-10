/**
 * About MonasticismMyLessonsPage css file zhuyu 2018/5/15
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
  swiperView: {
    height: 150,
    width: width,
  },
  swiperStyle: {
    flex: 1,
  },
  swiperItemView: {
    flex: 1,
  },
  swiperImage: {
    height: 150,
    width: width,
  },
  listHeaderComponentView: {
    flex: 1,
    height: 30,
    backgroundColor: '#acacac',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  listRenderButtonView: {
    marginLeft: 15,
    width: 150,
  },
  listRenderButton: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  buttonTextView: {
    marginLeft: 15,
  },
  icon: {
    fontSize: 22,
    color: '#000',
  },
  flatListItemView: {
    flex: 1,
    height: 60,
    paddingTop: 10,
    paddingRight: 15,
    paddingBottom: 10,
    paddingLeft: 15,
    borderBottomWidth: 1,
    borderColor: '#acacac',
    backgroundColor: '#fff',
  },
})
