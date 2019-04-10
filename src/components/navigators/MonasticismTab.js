/**
 * MonasticismTab zhuyu 2018/5/15
 */


import React, {
  Component
} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native';
import {
  createMaterialTopTabNavigator,
} from 'react-navigation';

import MonasticismSpeakingExercisesPage from '../forms/MonasticismSpeakingExercisesPage';
import MonasticismMyLessonsPage from '../forms/MonasticismMyLessonsPage';
import style from '../../css/MonasticismTabStyle';
import TabNavigatorTopBarButton from '../../common/TabNavigatorTopBarButton';

const {
  width
} = Dimensions.get('window');

const PAGE_WORD = {
  SpeakingExercises: '道长讲功法',
  MyLessons: '我的功课',
};

const TabRouteConfigs = {
  SpeakingExercises: {
    screen: MonasticismSpeakingExercisesPage,
  },
  MyLessons: {
    screen: MonasticismMyLessonsPage,
  },
}

const tabBarComponent = ({
  navigation,
}) => {
  return (
    <View style = { style.headerTitleView }>
      <View style = { style.headerTitleItemView }>
        <View style = { style.headerTitleSpaceView } />
        <View style = { style.headerTitleItem }>
          <View style = { style.tabNavigatorTopBarButton }>
            <TabNavigatorTopBarButton
              event = { ()=>{ navigation.navigate(navigation.state.routes[0].routeName); } }
              text = { PAGE_WORD[navigation.state.routes[0].routeName] }
              active = { navigation.state.index === 0 ? true : false }
            />
          </View>
          <View style = { style.tabNavigatorTopBarButton }>
            <TabNavigatorTopBarButton
              event = { ()=>{ navigation.navigate(navigation.state.routes[1].routeName); } }
              text = { PAGE_WORD[navigation.state.routes[1].routeName] }
              active = { navigation.state.index === 1 ? true : false }
            />
          </View>
        </View>
        <View style = { style.headerTitleSpaceView } />
      </View>
    </View>
  );
};

const TabNavigatorConfigs = {
  initialRouteName: 'SpeakingExercises',
  tabBarComponent: tabBarComponent,
}

const MonasticismTab = createMaterialTopTabNavigator(TabRouteConfigs, TabNavigatorConfigs);

export default MonasticismTab;
