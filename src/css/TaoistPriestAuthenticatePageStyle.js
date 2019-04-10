/**
 * About TaoistPriestAuthenticatePage css file zhuyu 2018/7/18
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
  inputBlockView: {
    flex: 1,
    // backgroundColor: 'green',
    padding: 20,
  },
  resultBlockView: {
    flex: 3,
    // backgroundColor: 'red',
  },
  textInputStyle: {
    fontSize: 16,
  },
  inputView: {
    flex: 1,
    justifyContent: 'center',
    // backgroundColor: 'red',
  },
  buttonView: {
    flex: 1,
    justifyContent: 'center',
    // backgroundColor: 'gray',
  },
  buttonStyle: {
    borderColor: '#007AFF',
    marginTop: 10,
  },
  buttonTextStyle: {
    fontSize: 16,
    color: '#007AFF',
    marginLeft: 16,
    marginRight: 16
  },
  introductionView: {
    padding: 15,
  },
  introductionText: {
    fontSize: 16,
    color: '#000',
  },
  listHeaderComponentView: {
    flex: 1,
    height: 180,
    padding: 15,
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

})
