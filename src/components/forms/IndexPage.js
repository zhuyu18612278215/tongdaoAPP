/**
 * IndexPage zhuyu 2018/5/3
 */


import React, {
  Component
} from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import UserDefButton from '../../common/Button';
import style from '../../css/IndexPageStyle';
import UserDefStatusBar from '../../common/StatusBar';

const PAGE_WORD = [{
  title: '五龙圣境',
  register: '注册',
  login: '登录'
}];

export default class IndexPage extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  static navigationOptions = {
    header: null,
  };

  loginEvent = () => {
    this.props.navigation.navigate('Login');
  };

  registerEvent = () => {
    this.props.navigation.navigate('Register');
  };

  render() {
    return (
      <View style = { style.container }>
        <UserDefStatusBar/>
        <ImageBackground
          style = { style.indexImage }
          source = { require('../img/index_bg.jpg') }
        >
        <View style = { style.index }>
          <View style = { style.indexLeftNullView }/>
          <View style = { style.indexView }>
            <View style = { style.indexTopNullView }/>
            <View style = { style.indexCenterNullView }>
              <View style = { style.indexTextView }>
                <Text style = { style.indexText }></Text>
              </View>
              <View style = { style.indexBetweenNullView }/>
              <View style = { style.indexButtonView }>
                <View style = { style.indexButtonTopView }/>
                <UserDefButton
                  text = { PAGE_WORD[0].login }
                  buttonStyle = { style.buttonStyle }
                  buttonTextStyle = { style.buttonTextStyle }
                  event = { this.loginEvent }
                />
                <View style = { style.indexButtonCenterView }/>
                <UserDefButton
                  text = { PAGE_WORD[0].register }
                  buttonStyle = { style.buttonStyle }
                  buttonTextStyle = { style.buttonTextStyle }
                  event = { this.registerEvent }
                />
                <View style = { style.indexButtonBottomView }/>
              </View>
            </View>
            <View style = { style.indexBottomNullView }/>
          </View>
          <View style = { style.indexRightNullView }/>
        </View>
        </ImageBackground>
      </View>
    );

  }
}
