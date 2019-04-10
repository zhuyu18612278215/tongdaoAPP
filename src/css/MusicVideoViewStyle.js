/**
 * About EnlightenDetailPage css file zhuyu 2018/5/21
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
    flexDirection: 'column',
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: 'blue',
    paddingTop: 15,
    paddingRight: 15,
    paddingBottom: 20,
    paddingLeft: 15,
  },
  sliderAndTimeView: {
    flex: 1,
    flexDirection: 'row',
    // backgroundColor: 'red',
  },
  musicButtonView: {
    flex: 1,
    flexDirection: 'row',
    // justifyContent: 'center',
    // backgroundColor: 'green',
  },
  sliderView: {
    flex: 8,
    // backgroundColor: 'pink',
    justifyContent: 'center',
    paddingTop: 10,
    paddingBottom: 10,
  },
  textLocal: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'gray',
  },
  slider: {
    height: 20,
  },
  text: {
    textAlign: 'center',
    fontSize: 12,
    color: '#000',
  },
  iconView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    // backgroundColor: 'brown',
  },
  playButton: {
    width: 30,
    height: 30,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 15,
  },
  iconButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  icon: {
    fontSize: 20,
    color: '#000',
  },
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
