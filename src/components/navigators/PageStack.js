/**
 * PageStack zhuyu 2018/5/5
 */


import React, {
  Component
} from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  createStackNavigator,
} from 'react-navigation';

import Icon from 'react-native-vector-icons/FontAwesome';

import IndexPage from '../forms/IndexPage';
import LoginPage from '../forms/LoginPage';
import RegisterPage from '../forms/RegisterPage';
import IndexTab from './IndexTab';

import EnlightenChannelListPage from '../forms/EnlightenChannelListPage';
import EnlightenDetailPage from '../forms/EnlightenDetailPage';
import EnlightenChapterContentPage from '../forms/EnlightenChapterContentPage';
import MusicPage from '../forms/MusicPage';
import LectureVideoPage from '../forms/LectureVideoPage';
import TaoistPriestAuthenticatePage from '../forms/TaoistPriestAuthenticatePage';


const style = StyleSheet.create({
  headerTitleStyle: {
    // alignSelf: 'center', 需修改react-navigator/src/views/header/header.js title组件的justifyContent 为 center
    fontSize: 18,
    color: '#fff',
  },
  headerStyle: {
    borderWidth: 0,
    backgroundColor: '#464646',
    height: 50,
  },
  iconStyle: {
    fontSize: 30,
    color: '#fff',
    marginLeft: 20,
  },
  headerRight: {
    height: 44,
    width: 55,
    justifyContent: 'center',
    paddingRight: 15
  },
});

const headerBackImage = () => {
  return (
    <Icon name="angle-left" style={ style.iconStyle }/>
  );
};


const StackRouteConfigs = {
  Index: {
    screen: IndexPage,
  },
  Login: {
    screen: LoginPage,
    navigationOptions: ({
      navigation
    }) => ({
      title: '',
    }),
  },
  Register: {
    screen: RegisterPage,
  },
  IndexTab: {
    screen: IndexTab,
    navigationOptions: ({
      navigation
    }) => ({
      header: null,
    }),
  },
  EnlightenChannelListPage: {
    screen: EnlightenChannelListPage,
  },
  EnlightenDetailPage: {
    screen: EnlightenDetailPage,
  },
  EnlightenChapterContentPage: {
    screen: EnlightenChapterContentPage,
  },
  MusicPage: {
    screen: MusicPage,
  },
  LectureVideoPage: {
    screen: LectureVideoPage,
  },
  TaoistPriestAuthenticate: {
    screen: TaoistPriestAuthenticatePage,
  },

};

const StackNavigatorConfigs = {
  initialRouteName: 'Index',
  navigationOptions: {
    headerStyle: style.headerStyle,
    headerTitleStyle: style.headerTitleStyle,
    headerBackImage: headerBackImage,
    headerRight: (<View style={ style.headerRight }/>), //用于处理有箭头情况下标题不居中问题
    gesturesEnabled: true,
  },

};

const PageStack = createStackNavigator(StackRouteConfigs, StackNavigatorConfigs);

export default PageStack;
