/**
 * MortalPage zhuyu 2018/5/5
 */


import React, {
  Component
} from 'react';
import {
  Text,
  View,
  Image,
  FlatList,
} from 'react-native';
// import {
//   StackNavigator,
// } from 'react-navigation';

import style from '../../css/MoralPageStyle';
import UserDefStatusBar from '../../common/StatusBar';
import UserTopView from '../../common/UserTopView';
import CommonNavigatorListIconButtonItemView from '../../common/CommonNavigatorListIconButtonItemView';
import MortalDataStore from '../../store/MortalDataStore';

const PAGE_WORD = {
  tabBarLabel: '得道',
};

const Store = new MortalDataStore();

export default class MortalPage extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  static navigationOptions = ({
    navigation,
  }) => {
    // const params = navigation.state.params || {};

    return {
      tabBarLabel: PAGE_WORD.tabBarLabel,
    };
  };

  flatListData = () => {
    data = [{
      text: '我的发愿',
      img: require('../img/mortalListIcon/RuYi.png'),
      event: () => {
        alert('OK1');
      },
    }, {
      text: '我的功课',
      img: require('../img/mortalListIcon/PlumBlossom.png'),
      event: () => {
        alert('OK1');
      },
    }, {
      text: '我的收获',
      img: require('../img/mortalListIcon/Reel.png'),
      event: () => {
        alert('OK1');
      },
    }, {
      text: '功德无量',
      img: require('../img/mortalListIcon/Koi.png'),
      event: () => {
        alert('OK1');
      },
    }, {
      text: '广结善缘',
      img: require('../img/mortalListIcon/CopperMoney.png'),
      event: () => {
        alert('OK1');
      },
    }, {
      text: '道家法物',
      img: require('../img/mortalListIcon/Gourd.png'),
      event: () => {
        alert('OK1');
      },
    }, {
      text: '等级积分',
      img: require('../img/mortalListIcon/Inngots.png'),
      event: () => {
        alert('OK1');
      },
    }, {
      text: '道长认证',
      img: require('../img/mortalListIcon/Check.png'),
      event: () => {
        this.props.navigation.navigate('TaoistPriestAuthenticate', {
          title: '道长认证',
          store: Store,
        });
      },
    }];
    return data;
  };

  renderItem = ({
    item,
  }) => {
    return (
      <View style = { style.flatListItemView }>
        <CommonNavigatorListIconButtonItemView
          img = { item.img }
          event = { item.event }
          text = { item.text }
        />
      </View>
    );
  };

  listHeaderComponent = () => {
    return (
      <View>
        <View style = { style.userTopBlockView }>
          <UserTopView
            img = { require('../img/material/UserHeaderPic.jpg') }
            // event = {}
            userName = { '居士' }
          />
        </View>
      </View>
    );
  };


  render() {
    const data = this.flatListData.call(this);
    return (
      <View style = { style.container }>
        <UserDefStatusBar/>
        <View style = { style.headerTitleView }>
          <View style = { style.headerTitleTextView }>
            <Text style = { style.headerTitleText }>
              { PAGE_WORD.tabBarLabel }
            </Text>
          </View>
        </View>

        <View style = { style.container }>
          <FlatList
            data = { data }
            renderItem = { this.renderItem }
            ListHeaderComponent = { this.listHeaderComponent }
          />
        </View>

      </View>
    );
  }
}
