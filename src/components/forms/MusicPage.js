/**
 * MusicPage zhuyu 2018 / 5 / 28
 */


import React, {
  Component
} from 'react';
import {
  Text,
  View,
} from 'react-native';
import {
  observer
} from 'mobx-react';

import Video from 'react-native-video';
import style from '../../css/MusicPageStyle';
import MusicVideoView from '../../common/MusicVideoView';
import MusicPageItemView from '../../common/MusicPageItemView';

@observer
export default class MusicPage extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  static navigationOptions = ({
    navigation
  }) => {
    return {
      title: navigation.getParam('title', ''),
    };
  };

  getSourceData = () => {
    let type = this.props.navigation.getParam('type', '');
    let store = this.props.navigation.getParam('store', '');
    let title = this.props.navigation.getParam('title', '');
    let data = store[`${type}Data`].filter(value => {
      return value.title === title;
    })[0];
    return data;
  };

  render() {
    let data = this.getSourceData.call(this);
    return (
      <View style = { style.container }>
        <View style = { style.headerView }>
          <View style = { style.musicimgView }>
            <MusicPageItemView
              img = { this.props.navigation.getParam('img','') }
              title = { this.props.navigation.getParam('title','') }
              summary = { this.props.navigation.getParam('summary','') }
            />
          </View>
        </View>
        <View style = { style.tailView }>
          <View style = { style.musicCtrlView }>
            <MusicVideoView
              source = { data.source }
            />
          </View>
        </View>
      </View>
    );
  }
}
