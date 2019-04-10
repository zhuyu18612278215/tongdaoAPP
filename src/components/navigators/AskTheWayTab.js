/**
 * AskTheWayTab zhuyu 2018/5/10
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

import AskTheWayInteractionPage from '../forms/AskTheWayInteractionPage';
import AskTheWaySpeakPage from '../forms/AskTheWaySpeakPage';
import style from '../../css/AskTheWayTabStyle';
import TabNavigatorTopBarButton from '../../common/TabNavigatorTopBarButton';

const {
  width
} = Dimensions.get('window');

const PAGE_WORD = {
  Interaction: '道长互动',
  Speak: '道长说法',
};

const TabRouteConfigs = {
  Interaction: {
    screen: AskTheWayInteractionPage,
  },
  Speak: {
    screen: AskTheWaySpeakPage,
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
  initialRouteName: 'Interaction',
  tabBarComponent: tabBarComponent,
}

const AskTheWayTab = createMaterialTopTabNavigator(TabRouteConfigs, TabNavigatorConfigs);

export default AskTheWayTab;
