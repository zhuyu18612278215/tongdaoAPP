/**
 * LectureVideoPage zhuyu 2018 / 7 / 12
 */


import React, {
  Component
} from 'react';
import {
  Text,
  View,
  FlatList,
  Dimensions,
  TouchableOpacity,
  Slider,
} from 'react-native';
import {
  observer
} from 'mobx-react';

import Video from 'react-native-video';
import style from '../../css/LectureVideoPageStyle';
import EnlightenDetailPageItemView from '../../common/EnlightenDetailPageItemView';
import Icon from 'react-native-vector-icons/FontAwesome';

const {
  width,
  height,
} = Dimensions.get('window');

@observer
export default class LectureVideo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isNotPlay: true,
      currentTime: 0,
      duration: 0,
      fullScreen: false,
      toolBarShow: true,
      videoStyle: {
        width: width,
        height: width * 9 / 16,
        zIndex: 1,
        // flex: 1,
        // width: 50,
        // height: 50,
      },
      videoStyleView: {
        width: width,
        height: width * 9 / 16,
        backgroundColor: '#000',
        // flex: 1,
        // width: height,
        // height: width,
      },
      viedoCover: {
        width: width,
        height: width * 9 / 16,
        position: 'absolute',
        top: 0,
        left: 0,
        backgroundColor: 'rgba(0,0,0,0)',
        zIndex: 50,
      },
      toolBarShowButton: {
        width: width,
        height: width * 9 / 16,
        position: 'absolute',
        top: 0,
        left: 0,
        backgroundColor: 'rgba(0,0,0,0)',
        zIndex: 90,
      },
      videoToolBar: {
        height: 30,
        width: width,
        backgroundColor: 'rgba(0,0,0,0)',
      }
    };
  }

  static navigationOptions = ({
    navigation
  }) => {
    return {
      title: navigation.getParam('title', ''),
    };
  };

  flatListData = () => {
    let type = this.props.navigation.getParam('type', '');
    let store = this.props.navigation.getParam('store', '');
    let title = this.props.navigation.getParam('title', '');
    let data = store[`${type}Data`].filter(value => {
      return value.title === title;
    });
    return data;
  };

  renderItem = ({
    item,
  }) => {
    let type = this.props.navigation.getParam('type', '');
    let store = this.props.navigation.getParam('store', '');
    let title = this.props.navigation.getParam('title', '');
    let text = `${ item.summary } ${ item.summary } ${ item.summary } ${ item.summary }`;
    let returnData = (
      <View style = { style.introductionView }>
        <Text style = { style.introductionText }>{ text }</Text>
      </View>);
    return returnData;
  };

  listHeaderComponent = ({
    listHeaderComponentText
  }) => {
    return (
      <View>
        <View style = { style.listHeaderComponentView }>
          <EnlightenDetailPageItemView
            img = { this.props.navigation.getParam('img','') }
            title = { this.props.navigation.getParam('title','') }
            summary = { this.props.navigation.getParam('summary','') }
          />
        </View>
        <View style = { style.listHeaderComponentTextView }>
          <Text style = { style.listHeaderComponentText }>
            { listHeaderComponentText }
          </Text>
        </View>
      </View>
    );
  };

  formatSecond = ({
    time
  }) => {
    time = parseInt(time);
    let hour = Math.floor(time / 3600);
    let min = Math.floor(time / 60) % 60;
    let sec = time % 60;
    hour = hour < 10 ? `0${hour}` : hour;
    min = min < 10 ? `0${min}` : min;
    sec = sec < 10 ? `0${sec}` : sec;

    if (hour === '00') {
      return `${min}:${sec}`;
    } else {
      return `${hour}:${min}:${sec}`;
    }
  };
  videoCoverOnPress = () => {
    this.setState((state) => ({
      isNotPlay: !state.isNotPlay,
    }));
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      this.setState((state) => {
        if (state.toolBarShow === true) {
          return {
            toolBarShow: false,
          }
        }
      });
    }, 5000);
  };
  onProgressEvent = (data) => {
    this.setState((state) => ({
      currentTime: data.currentTime,
    }));
  };
  loadFinishEvent = (data) => {
    this.setState((state) => ({
      duration: data.duration,
    }));
  };
  onSlidingEvent = (data) => {
    this.setState((state) => ({
      currentTime: data.currentTime,
    }));
  };
  fullScreenOnPress = () => {
    this.setState((state) => ({
      fullScreen: !state.fullScreen,
    }));
  };
  toolBarShowOnPress = () => {
    this.setState((state) => ({
      toolBarShow: !state.toolBarShow,
    }));
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      this.setState((state) => {
        if (state.toolBarShow === true) {
          return {
            toolBarShow: false,
          }
        }
      });
    }, 5000);
  };
  getSourceData = () => {
    let type = this.props.navigation.getParam('type', '');
    let store = this.props.navigation.getParam('store', '');
    let title = this.props.navigation.getParam('title', '');
    let data = store[`${type}Data`].filter(value => {
      return value.title === title;
    });
    return data[0];
  };


  render() {
    let listHeaderComponentText = '讲座简介';
    let data = this.flatListData.call(this);
    let icon = this.state.isNotPlay === true ? 'play' : 'pause';
    let currentTime = this.formatSecond.call(this, {
      time: this.state.currentTime
    });
    let duration = this.formatSecond.call(this, {
      time: this.state.duration
    });
    let controlIcon = this.state.fullScreen === true ? 'compress' : 'expand';
    // let videopalyer = this.videoView.call(this, require('../video/test.mp4'));
    let toolBarView = this.state.toolBarShow === true ?
      (
        <View style = { this.state.viedoCover }>
          <View style = { style.infoBarView }>
          </View>
          <View style = { style.playButton }>
            <TouchableOpacity onPress = { this.videoCoverOnPress }>
              <Icon name = { icon } style = { style.icon }/>
            </TouchableOpacity>
          </View>
          <View style = { style.videoToolBarView }>
            <View style = { this.state.videoToolBar }>
              <View style = { style.toolBar }>
                <View style = { style.sliderBarView }>
                  <View style = { style.textLocal }>
                    <Text style = { style.text }>
                      { currentTime }
                    </Text>
                  </View>
                  <View style = { style.sliderView }>
                    <Slider
                      style = { style.slider }
                      maximumTrackTintColor = { 'gray' }
                      minimumTrackTintColor = { 'green' }
                      // thumbImage
                      minimumValue = { 0 }
                      maximumValue = { this.state.duration }
                      onSlidingComplete = { this.onSlidingEvent }
                      onValueChange = { this.onSlidingEvent }
                      step = { 1 }
                      value = { this.state.currentTime }
                    />
                  </View>
                  <View style = { style.textLocal }>
                    <Text style = { style.text }>
                      { duration }
                    </Text>
                  </View>
                </View>
                <View style = { style.screenControlButtonView }>
                  <TouchableOpacity onPress = { this.fullScreenOnPress }>
                    <Icon name = { controlIcon } style = { style.controlIcon }/>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>) :
      null;
    let sourceData = this.getSourceData.call();
    if (sourceData === undefined) {
      sourceData = {
        source: require('../video/test.mp4'),
      }
    };
    return (
      <View style = { style.container }>
        <View style = { this.state.videoStyleView }>
          <Video
            source = { sourceData.source }
            ref = 'player'
            rate = { 0 }
            volume = { 1.0 }
            muted = { false }
            paused = { this.state.isNotPlay }
            resizeMode = 'contain'
            repeat = { false }
            playInBackground = { false }
            onLoad = { this.loadFinishEvent }
            onProgress = { this.onProgressEvent }
            style = { this.state.videoStyle }
          />
          <View style = { this.state.viedoCover }>
            <TouchableOpacity onPress = { this.toolBarShowOnPress } style = { this.state.toolBarShowButton }>
              { toolBarView }
            </TouchableOpacity>
          </View>
        </View>
        <FlatList
          data = { data }
          renderItem = { this.renderItem }
          ListHeaderComponent = { this.listHeaderComponent.bind(this,{ listHeaderComponentText:listHeaderComponentText }) }
        />
      </View>
    );
  }
}
