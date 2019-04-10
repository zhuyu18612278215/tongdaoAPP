/**
 * EnlightenClassicDetailFlatListItemView zhuyu 2018/5/22
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
  observer
} from 'mobx-react';

import style from '../css/EnlightenClassicDetailFlatListItemViewStyle';

const PAGE_WORD = {};

@observer
export default class EnlightenClassicDetailFlatListItemView extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const {
      text = '',
        event = () => {
          alert('OK');
        },
    } = this.props;
    return (
      <View style = { style.container }>
        <TouchableOpacity style = { style.container } onPress = { event.bind(this) }>
          <View style = { style.mainView }>
            <View style = { style.textView }>
              <Text style = { style.text }>
                { text }
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
