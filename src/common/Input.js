/**
 * Input zhuyu 2018/5/05
 */

import React, {
  Component
} from 'react';
import {
  Text,
  View,
  TextInput,
} from 'react-native';

export default class UserDefInput extends Component {
  render() {
    return (
      <TextInput
        { ...this.props }
        autoCapitalize={ 'none' }
        // clearButtonMode={ 'while-editing' }
      />
    );
  }
}
