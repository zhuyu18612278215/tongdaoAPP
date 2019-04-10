/**
 * About SelectListHeaderButton css file zhuyu 2018/5/8
 */

import {
  StyleSheet,
} from 'react-native';

export default StyleSheet.create({
  container: {
    height: 30,
    width: 60,
  },
  button: {
    flex: 1,
    borderWidth: 0,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  buttonText: {
    fontFamily: 'sans-serif',
    textAlign: 'right',
    fontSize: 14,
    color: '#acacac',

  },
  buttonIcon: {
    fontSize: 22,
    color: '#acacac',
    marginLeft: 5,
  },
});
