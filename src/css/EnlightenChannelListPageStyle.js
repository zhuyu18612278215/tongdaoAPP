/**
 * About EnlightenChannelListPage css file zhuyu 2018/5/21
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
  flatListItemView: {
    flex: 1,
    height: 180,
    padding: 15,
    borderBottomWidth: 1,
    borderColor: '#acacac',
    backgroundColor: '#fff',
  },
})
