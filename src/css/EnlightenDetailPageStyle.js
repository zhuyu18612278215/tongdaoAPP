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
    backgroundColor: '#fff',
  },
  listHeaderComponentView: {
    flex: 1,
    height: 180,
    padding: 15,
    borderBottomWidth: 1,
    borderColor: '#acacac',
    backgroundColor: '#fff',
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
  listHeaderComponentTextView: {
    flex: 1,
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
  // videoView: {
  //   padding: 15,
  // },
  // musicView: {
  //   flex: 1,
  //   height: 100,
  //   padding: 15,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
  // video: {
  //   position: 'absolute',
  //   top: 0,
  //   left: 0,
  //   bottom: 0,
  //   right: 0,
  // },
})
