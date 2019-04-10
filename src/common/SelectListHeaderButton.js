/**
 * SelectListHeaderButton zhuyu 2018/5/8
 */

import React, {
  Component
} from 'react';
import {
  TouchableOpacity,
  Text,
  View,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import style from '../css/SelectListHeaderButtonStyle';

export default class SelectListHeaderButton extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  onPressEvent = () => {
    const {
      event = () => {
        alert('OK');
      },
    } = this.props;
    event();
  };

  render() {
    const {
      text = 'OK',
        buttonStyle = {
          backgroundColor: 'rgba(255, 255, 255, 0)',
        },
    } = this.props;

    return (
      <View style = { style.container }>
        <TouchableOpacity style = { [style.button,buttonStyle] } onPress = { this.onPressEvent }>
          <Text
            style = { [style.buttonText] }
          >
            { text }
          </Text>
          <Icon name="angle-right" style={ style.buttonIcon }/>
        </TouchableOpacity>
      </View>
    );
  }

}
