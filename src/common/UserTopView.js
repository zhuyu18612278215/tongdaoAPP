/**
 * UserTopView zhuyu 2018/5/17
 */


import React, {
  Component
} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

import style from '../css/UserTopViewStyle';
import Icon from 'react-native-vector-icons/FontAwesome';


const PAGE_WORD = {};

export default class UserTopView extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const {
      img = require('../components/img/test.jpg'),
        userName = '',
        event = () => {
          alert('OK');
        },
    } = this.props;
    return (
      <View style = { style.container }>
        <View style = { style.imageView }>
          <Image
            style = { style.image }
            source = { img }
          />
        </View>
        <View style = { style.buttonView }>
          <TouchableOpacity style = { style.container } onPress = { event.bind(this) }>
            <View style = { style.textView }>
              <Text style = { style.userNameText }>
                { userName }
              </Text>
            </View>
            <View style = { style.iconView }>
              <Icon name="angle-right" style={ style.icon }/>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
