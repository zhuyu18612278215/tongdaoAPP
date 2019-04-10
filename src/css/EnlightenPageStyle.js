/**
 * About EnlightenPage css file zhuyu 2018/5/5
 */

import {
  StyleSheet,
  Dimensions,
} from 'react-native';

const {
  width
} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  headerTitleView: {
    borderWidth: 0,
    backgroundColor: '#464646',
    height: 50,
  },
  headerTitleTextView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitleText: {
    flex: 1,
    textAlign: 'center',
    fontSize: 18,
    color: '#fff',
  },
  sectionHeader: {
    flex: 1,
    flexDirection: 'row',
    height: 40,
    backgroundColor: '#fff',
  },
  sectionHeaderLeftView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingLeft: 15,
    alignItems: 'center',
    // paddingTop: 5,
    // paddingBottom: 5,
  },
  sectionHeaderRightView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    // paddingTop: 10,
    paddingRight: 15,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  itemView: {
    flex: 1,
    height: 165,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 15,
  },
  item: {
    flex: 1,
  },
  itemSpace: {
    width: 5,
  },

  swiperView: {
    height: 150,
    width: width,
  },
  swiperStyle: {
    flex: 1,
  },
  swiperItemView: {
    flex: 1,
  },
  swiperImage: {
    height: 150,
    width: width,
  }


})
