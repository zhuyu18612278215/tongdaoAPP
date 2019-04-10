/**
 * MortalDataStore zhuyu 2018/7/18
 */

import {
  observable,
  action,
  computed,
} from 'mobx';
import {
  MortalData,
} from '../data/MortalData';

export default class EnlightenDataStore {
  @observable findTaoistData = MortalData.findTaoistData;


  @action changeFindTaoistData = ({
    data
  }) => {
    this.findTaoistData = data;
  };
}
