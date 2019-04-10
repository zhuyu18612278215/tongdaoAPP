/**
 * TabNavigatorTopBarButton zhuyu 2018/5/11
 */

import React, {
  Component
} from 'react';
import {
  TouchableOpacity,
  Text,
  View,
} from 'react-native';
import {
  withNavigation
} from 'react-navigation';

import style from '../css/TabNavigatorTopBarButtonStyle';

class TabNavigatorTopBarButton extends Component {
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
        buttonTextStyle = {
          color: '#fff',
        },
        active = false,
    } = this.props;
    buttonTextStyle.color = active === false ? '#acacac' : buttonTextStyle.color;

    return (
      <View style = { style.container }>
        <TouchableOpacity style = { [style.button,buttonStyle] }>
          <Text
            style = { [style.buttonText,buttonTextStyle] }
            onPress = { this.onPressEvent }
          >
            { text }
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default withNavigation(TabNavigatorTopBarButton);
