/**
 * CommonNavigatorListIconButtonItemView zhuyu 2018/5/17
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

import style from '../css/CommonNavigatorListIconButtonItemViewStyle';
import Icon from 'react-native-vector-icons/FontAwesome';


const PAGE_WORD = {};

export default class CommonNavigatorListIconButtonItemView extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const {
      img = require('../components/img/test.jpg'),
        text = '',
        event = () => {
          alert('OK');
        },
    } = this.props;
    return (
      <View style = { style.container }>
        <TouchableOpacity style = { style.container } onPress = { event.bind(this) }>
          <View style = { style.mainView }>
            <View style = { style.imageAndTextView }>
              <View style = { style.imageView }>
                <Image
                  style = { style.image }
                  source = { img }
                />
              </View>
              <View style = { style.textView }>
                <Text style = { style.text }>
                  { text }
                </Text>
              </View>
            </View>
            <View style = { style.iconView }>
              <Icon name="angle-right" style={ style.icon }/>
            </View>
          </View>
        </TouchableOpacity>
      </View>

    );
  }
}
