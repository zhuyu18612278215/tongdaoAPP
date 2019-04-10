/**
 * MusicVideoView zhuyu 2018/5/25
 */

import React, {
  Component
} from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  Slider,
} from 'react-native';
import {
  observer
} from 'mobx-react';
import Video from 'react-native-video';

import Icon from 'react-native-vector-icons/FontAwesome';

import style from '../css/MusicVideoViewStyle';

@observer
export default class MusicVideoView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isNotPlay: true,
      currentTime: 0,
      duration: 0,
    };
  }

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

  onPressEvent = () => {
    this.setState((state) => ({
      isNotPlay: !state.isNotPlay,
    }));
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

  render() {
    let icon = this.state.isNotPlay === true ? 'play' : 'pause';
    let currentTime = this.formatSecond.call(this, {
      time: this.state.currentTime
    });
    let duration = this.formatSecond.call(this, {
      time: this.state.duration
    });
    const {
      source = require('../components/music/test.mp3'),
    } = this.props;
    return (
      <View style = { style.container }>
        <View style = { style.sliderAndTimeView }>
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
            <Video
              source = { source }
              ref = 'player'
              rate = { 0 }
              volume = { 1.0 }
              muted = { false }
              paused = { this.state.isNotPlay }
              resizeMode = "contain"
              repeat = { false }
              playInBackground = { false }
              // onloadStart = { this.loadStartEvent }
              onLoad = { this.loadFinishEvent }
              onProgress = { this.onProgressEvent }
              // onEnd = { this.onEndEvent }
              // onError = { this.onErrorEvent }
              style = { style.video }
            />
          </View>
        </View>
        <View style = { style.musicButtonView }>
          <View style = { style.iconView }>

          </View>
          <View style = { style.iconView }>

          </View>
          <View style = { style.iconView }>
            <View style = { style.playButton }>
              <TouchableOpacity
                style = { style.iconButton }
                onPress = { this.onPressEvent }
              >
                <Icon name = { icon } style = { style.icon }/>
              </TouchableOpacity>
            </View>
          </View>
          <View style = { style.iconView }>

          </View>
          <View style = { style.iconView }>

          </View>
        </View>
      </View>
    );
  }
}
