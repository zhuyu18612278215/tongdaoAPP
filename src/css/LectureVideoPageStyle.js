/**
 * About LectureVideoPage css file zhuyu 2018/7/12
 */

import {
  StyleSheet,
  Dimensions,
} from 'react-native';

const {
  width,
  height,
} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  listHeaderComponentView: {
    // flex: 1,
    height: 180,
    padding: 15,
    borderBottomWidth: 1,
    borderColor: '#acacac',
    backgroundColor: '#fff',
  },
  listHeaderComponentTextView: {
    // flex: 1,
    height: 30,
    backgroundColor: '#acacac',
    justifyContent: 'center',
    alignItems: 'center',
  },
  listHeaderComponentText: {
    fontSize: 16,
    color: '#000',
    textAlign: 'center',
  },
  introductionView: {
    padding: 15,
  },
  introductionText: {
    fontSize: 16,
    color: '#000',
  },

  infoBarView: {
    flex: 1,
  },
  playButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 100,
  },
  videoToolBarView: {
    flex: 1,
    justifyContent: 'flex-end',
    zIndex: 100,
  },
  iconButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    fontSize: 40,
    color: 'rgba(255,255,255,0.7)',
  },
  sliderBarView: {
    flex: 11,
    flexDirection: 'row',
    // backgroundColor: 'red',
  },
  screenControlButtonView: {
    flex: 1,
    // backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
  toolBar: {
    flex: 1,
    flexDirection: 'row',
  },

  sliderView: {
    flex: 8,
    // backgroundColor: 'pink',
    justifyContent: 'center',
    paddingTop: 5,
    paddingBottom: 5,
  },
  textLocal: {
    flex: 1,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 2,
    paddingRight: 2,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'gray',
  },
  slider: {
    height: 20,
  },
  text: {
    textAlign: 'center',
    fontSize: 10,
    color: '#fff',
  },
  controlIcon: {
    fontSize: 14,
    color: '#fff',
  },
});
