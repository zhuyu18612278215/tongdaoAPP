/**
 * TaoistPriestAuthenticatePage zhuyu 2018 / 7 / 18
 */


import React, {
  Component
} from 'react';
import {
  Text,
  View,
  FlatList,
  ScrollView,
} from 'react-native';
import {
  observer
} from 'mobx-react';

import style from '../../css/TaoistPriestAuthenticatePageStyle';
import UserDefButton from '../../common/Button';
import UserDefInput from '../../common/Input';
import EnlightenDetailPageItemView from '../../common/EnlightenDetailPageItemView';

const PAGE_WORD = {
  inputPlaceholder: '请输入身份证号/道长认证码',
  find: '查询',
};

@observer
export default class TaoistPriestAuthenticatePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isHide: true,
      id: '',
      taoistData: '',
    };
  };

  static navigationOptions = ({
    navigation
  }) => {
    return {
      title: navigation.getParam('title', ''),
    };
  };

  findEvent = () => {
    let store = this.props.navigation.getParam('store', '');
    let data = store[`findTaoistData`];
    this.setState((state) => ({
      isHide: false,
      taoistData: data,
    }));
  };

  getId = (id) => {
    this.setState((state) => ({
      id: id,
    }));
  };

  renderItem = ({
    item,
  }) => {
    let returnData = (
      <View style = { style.introductionView }>
        <Text style = { style.introductionText }>{ item.introduction }</Text>
      </View>
    );
    return returnData;
  };

  listHeaderComponent = ({
    listHeaderComponentText,
    data,
  }) => {
    return (
      <View>
        <View style = { style.listHeaderComponentView }>
          <EnlightenDetailPageItemView
            img = { data.img }
            title = { data.title }
            summary = { data.summary }
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
  render() {
    let listHeaderComponentText = '道长简介';
    let detailInfoData = (this.state.isHide === false && this.state.taoistData !== '') ? (
      <View style = { style.resultView }>
        <FlatList
          data = { this.state.taoistData }
          renderItem = { this.renderItem }
          ListHeaderComponent = { this.listHeaderComponent.bind(this,{ listHeaderComponentText:listHeaderComponentText,data:this.state.taoistData[0] }) }
        />
      </View>
    ) : null;
    return (
      <View style = { style.container }>
        <View style = { style.inputBlockView }>
          <ScrollView  keyboardDismissMode='on-drag'>
            <View style = { style.inputView }>
              <UserDefInput
                placeholder = { PAGE_WORD.inputPlaceholder }
                placeholderTextColor = { 'gray' }
                // underlineColorAndroid = { 'transparent' }
                style = { style.textInputStyle }
                keyboardType = { 'numeric' }
                maxLength = { 18 }
                onChangeText = { this.getId.bind(this) }
              />
            </View>
            <View style = { style.buttonView }>
              <UserDefButton
                text = { PAGE_WORD.find }
                buttonStyle = { style.buttonStyle }
                buttonTextStyle = { style.buttonTextStyle }
                event = { this.findEvent }
              />
            </View>
          </ScrollView>
        </View>
        <View style = { style.resultBlockView }>
          { detailInfoData }
        </View>
      </View>
    );
  };
}
