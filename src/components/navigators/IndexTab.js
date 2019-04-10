/**
 * IndexTab zhuyu 2018/5/5
 */


import React, {
  Component
} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import {
  createBottomTabNavigator,
} from 'react-navigation';

import EnlightenPage from '../forms/EnlightenPage';
import MoralPage from '../forms/MoralPage';

import AskTheWayTab from './AskTheWayTab';
import MonasticismTab from './MonasticismTab';

const style = StyleSheet.create({
  style: {
    backgroundColor: '#fff',
    height: 60,
    borderTopWidth: 1,
    borderTopColor: '#464646',
  },
  labelStyle: {
    fontSize: 14,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainView: {
    height: 40,
    width: 40,
  },
  img: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: null,
    height: null,
  },
});

const PAGE_WORD = {
  tabBarLabelAskTheWay: '问道',
  tabBarLabelMonasticismTab: '修道',
};

const tabBarIcon = (page, navigate, ) => {
  let img;
  switch (page.page) {
    case 'Enlighten':
      img = navigate.focused === true ? require('../img/tabBarIcon/EnlightenActive.png') : require('../img/tabBarIcon/Enlighten.png');
      break;
    case 'AskTheWay':
      img = navigate.focused === true ? require('../img/tabBarIcon/AskTheWayActive.png') : require('../img/tabBarIcon/AskTheWay.png');
      break;
    case 'Monasticism':
      img = navigate.focused === true ? require('../img/tabBarIcon/MonasticismActive.png') : require('../img/tabBarIcon/Monasticism.png');
      break;
    case 'Moral':
      img = navigate.focused === true ? require('../img/tabBarIcon/MoralActive.png') : require('../img/tabBarIcon/Moral.png');
      break;
  };
  return (
    <View style = { style.container }>
      <View style = { style.mainView }>
        <Image
          source = { img }
          style = { style.img }
        />
      </View>
    </View>
  );
};

const TabRouteConfigs = {
  Enlighten: {
    screen: EnlightenPage,
    navigationOptions: {
      tabBarIcon: tabBarIcon.bind(this, {
        page: 'Enlighten',
      }),
    },
  },
  AskTheWay: {
    screen: AskTheWayTab,
    navigationOptions: {
      tabBarIcon: tabBarIcon.bind(this, {
        page: 'AskTheWay',
      }),
    },
  },
  Monasticism: {
    screen: MonasticismTab,
    navigationOptions: {
      tabBarIcon: tabBarIcon.bind(this, {
        page: 'Monasticism',
      }),
    },
  },
  Moral: {
    screen: MoralPage,
    navigationOptions: {
      tabBarIcon: tabBarIcon.bind(this, {
        page: 'Moral',
      }),
    },
  },
}

const TabNavigatorConfigs = {
  initialRouteName: 'Enlighten',
  tabBarOptions: {
    // activeTintColor: 'blue',
    // inactiveTintColor: '#acacac',
    showIcon: true,
    showLabel: false,
    style: style.style,
    labelStyle: style.labelStyle,
  },

}

const IndexTab = createBottomTabNavigator(TabRouteConfigs, TabNavigatorConfigs);

export default IndexTab;
