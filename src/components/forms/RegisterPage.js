/**
 * RegisterPage zhuyu 2018/5/5
 */


import React, {
  Component
} from 'react';
import {
  View,
  Text,
} from 'react-native';


import Icon from 'react-native-vector-icons/FontAwesome';

import Card from '../../common/Card';
import CardSection from '../../common/CardSection';
import UserDefButton from '../../common/Button';
import UserDefInput from '../../common/Input';
import style from '../../css/RegisterPageStyle';
import UserDefStatusBar from '../../common/StatusBar';

const PAGE_WORD = {
  headerTitle: '新用户注册',
  close: '关闭',
  register: '注册账号',
  placeholderPhone: '请输入手机号',
  inputPhoneError: '手机号格式错误',
  buttonRegister: '立即注册',
  promptVerifySMS: '我们已发送验证短信至',
  promptPleaseInputSMS: '请输入短信验证码',
  placeholderSMS: '请输入短信验证码',
  resend: '重新发送',
  nextStep: '下一步',
  backing: '返回',
  inputSMSError: '验证码错误或过期',
  promptPhone: '您注册的手机号为',
  promptPassWD: '请设置密码',
  placeholderPassWD: '请输入密码',
  placeholderConfirmPassWD: '请输入重复密码',
  promptCheckPassWD: '密码应为8-16位数字、字母、字符',
  promptLackPassWD: '请输入密码',
  // promptLackConfirmPassWD: '请输入确认密码',
  promptPassWDSameError: '两次输入的密码不同',
  buttonFinish: '注册并登录',

  rewritePassWD: '重复密码',
  login: '登录',
  changePW: '忘记密码',
  account: '手机号',
  passWD: '密码',
}

export default class RegisterPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      phone: '',
      password: '',
      passwordRepeat: '',
      secureTextEntry: true,
    }
  }

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

  getPasswordRepeat = (passwordRepeat) => {
    this.setState({
      passwordRepeat,
    });
  };

  onSignUp() {
    const {
      phone,
      password,
      passwordRepeat,
    } = this.state;

    console.info("usr login UP: " + email + password + passwordRepeat)

    this.props.navigation.navigate('IndexTab');
  }

  render() {

    return (
      <Card>
        <UserDefStatusBar/>
        <CardSection>
          <View style = { style.inputViewStyle }>
            <Text style = { style.textStyle }>{ PAGE_WORD.account }</Text>
            <UserDefInput
              placeholder = { PAGE_WORD.placeholderPhone }
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
              placeholder = { PAGE_WORD.placeholderPassWD }
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

        <CardSection>
          <View style = { style.inputViewStyle }>
            <Text style = { style.textStyle }>{ PAGE_WORD.rewritePassWD }</Text>
            <UserDefInput
              placeholder = { PAGE_WORD.placeholderConfirmPassWD }
              placeholderTextColor = { 'gray' }
              // underlineColorAndroid = { 'transparent' }
              style = { style.textInputStyle }
              secureTextEntry = { this.state.secureTextEntry }
              clearTextOnFocus = { true }
              maxLength = { 18 }
              onChangeText = { this.getPasswordRepeat.bind(this) }
            />
          </View>
        </CardSection>

         <CardSection style = { style.buttonCardView }>
             <View style={style.buttonView}>
                <UserDefButton
                  text = { PAGE_WORD.buttonFinish }
                  buttonStyle = { style.buttonStyle }
                  buttonTextStyle = { style.buttonTextStyle }
                  event = { this.onSignIn }
                />
             </View>
         </CardSection>
      </Card>
    )
  }
}
