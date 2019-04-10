/**
 * LoginPage zhuyu 2018/5/5
 */


import React, {
  Component
} from 'react';
import {
  View,
  Text,
  ScrollView,
} from 'react-native';


import Icon from 'react-native-vector-icons/FontAwesome';

import Card from '../../common/Card';
import CardSection from '../../common/CardSection';
import UserDefButton from '../../common/Button';
import UserDefInput from '../../common/Input';
import style from '../../css/LoginPageStyle';
import UserDefStatusBar from '../../common/StatusBar';

const PAGE_WORD = {
  loginTitle: '手机号登录',
  headerButtonsTitle: '注册',
  accountPlaceholder: '请输入手机号',
  passWDPlaceholder: '请输入密码',
  login: '登录',
  changePW: '忘记密码',
  account: '手机号',
  passWD: '密码',
};

export default class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      phone: '',
      password: '',
      secureTextEntry: true,
    }
  }

  // static navigationOptions = {
  //   title: '123',
  // };

  getPhone = (phone) => {
    this.setState({
      phone,
    });
  };

  getPassword = (password) => {
    this.setState({
      password,
    });
  };

  onSignIn = () => {
    const {
      phone,
      password,
    } = this.state;

    console.info("usr login In: " + phone + password);

    if (phone === password) {
      alert("enter failed !");
    } else {
      this.props.navigation.navigate('IndexTab');
    }
  }

  render() {

    return (
      <ScrollView  keyboardDismissMode='on-drag'>
        <Card>
          <UserDefStatusBar/>
          <CardSection>
            <View style = { style.inputViewStyle }>
              <Text style = { style.textStyle }>{ PAGE_WORD.account }</Text>
              <UserDefInput
                placeholder = { PAGE_WORD.accountPlaceholder }
                placeholderTextColor = { 'gray' }
                // underlineColorAndroid = { 'transparent' }
                style = { style.textInputStyle }
                keyboardType = { 'numeric' }
                maxLength = { 11 }
                onChangeText = { this.getPhone.bind(this) }
              />
            </View>
          </CardSection>

          <CardSection>
            <View style = { style.inputViewStyle }>
              <Text style = { style.textStyle }>{ PAGE_WORD.passWD }</Text>
              <UserDefInput
                placeholder = { PAGE_WORD.passWDPlaceholder }
                placeholderTextColor = { 'gray' }
                // underlineColorAndroid = { 'transparent' }
                style = { style.textInputStyle }
                secureTextEntry = { this.state.secureTextEntry }
                clearTextOnFocus = { true }
                maxLength = { 18 }
                onChangeText = { this.getPassword.bind(this) }
              />
            </View>
          </CardSection>

           <CardSection style = { style.buttonCardView }>
               <View style={style.buttonView}>
                  <UserDefButton
                    text = { PAGE_WORD.login }
                    buttonStyle = { style.buttonStyle }
                    buttonTextStyle = { style.buttonTextStyle }
                    event = { this.onSignIn }
                  />
               </View>
           </CardSection>
        </Card>
      </ScrollView>
    )
  }
}
