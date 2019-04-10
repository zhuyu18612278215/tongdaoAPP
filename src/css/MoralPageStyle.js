/**
 * About MoralPage css file zhuyu 2018/5/5
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
  },
  headerTitleView: {
    borderWidth: 0,
    backgroundColor: '#464646',
    height: 50,
  },
  headerTitleTextView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitleText: {
    flex: 1,
    textAlign: 'center',
    fontSize: 18,
    color: '#fff',
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
  listHeaderComponentText: {
    fontSize: 16,
    color: '#000',
    textAlign: 'center',
  },
  userTopBlockView: {
    height: 150,
    width: width,
    padding: 15,
    backgroundColor: '#464646',
  },

})
