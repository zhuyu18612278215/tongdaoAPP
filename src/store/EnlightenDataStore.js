/**
 * EnlightenDataStore zhuyu 2018/5/22
 */

import {
  observable,
  action,
  computed,
} from 'mobx';
import {
  EnlightenData,
} from '../data/EnlightenData';

export default class EnlightenDataStore {
  @observable wulonggongData = EnlightenData.wulonggongData;
  @observable classicData = EnlightenData.classicData;
  @observable characterData = EnlightenData.characterData;
  @observable musicData = EnlightenData.musicData;
  @observable lectureData = EnlightenData.lectureData;
  @observable sanctumData = EnlightenData.sanctumData;
  @observable classicDetailData = EnlightenData.classicDetailData;

  @action changeWulonggongData = ({
    data
  }) => {
    this.wulonggongData = data;
  };
  @action changeClassicData = ({
    data
  }) => {
    this.classicData = data;
  };
  @action changeCharacterData = ({
    data
  }) => {
    this.characterData = data;
  };
  @action changeMusicData = ({
    data
  }) => {
    this.musicData = data;
  };
  @action changeLectureData = ({
    data
  }) => {
    this.lectureData = data;
  };
  @action changeSanctumData = ({
    data
  }) => {
    this.sanctumData = data;
  };
  @action changeClassicDetailData = ({
    data
  }) => {
    this.classicDetailData = data;
  };
}
