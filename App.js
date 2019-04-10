/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 *
 * App by zhuyu 2018/5/3
 */

import React, {
  Component
} from 'react';
import {
  AppRegistry,
  View,
} from 'react-native';

import PageStack from './src/components/navigators/PageStack';

export default class IndexView extends Component {
  render() {
    return (
      <PageStack />
    );
  }
}

AppRegistry.registerComponent('tongdaoapp', () => IndexView);
