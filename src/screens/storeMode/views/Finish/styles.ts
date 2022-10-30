import {StyleSheet} from 'react-native';

import {
  BACKGROUND_COLOR,
  BLACK,
  ERROR_COLOR,
  PRIMARY,
  WHITE_30,
  WHITE_80,
} from '../../../../identity';

export const FinishOrderStyle = StyleSheet.create({
  scrollContainer: {
    padding: 15,
    backgroundColor: BACKGROUND_COLOR,
    marginBottom: 30,
  },
  titleContainer: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    position: 'absolute',
    fontStyle: 'normal',
    fontFamily: 'Roboto-Regular',
    fontSize: 20,
    color: WHITE_80,
  },
  buttonClose: {
    width: 25,
    height: 25,
    marginTop: -35,
    marginBottom: 40,
  },
  subtitleText: {
    fontStyle: 'normal',
    fontFamily: 'Roboto-Bold',
    fontSize: 20,
    color: BLACK,
  },
  sectionContainer: {marginBottom: 30},
  innformationContainerText: {
    fontStyle: 'normal',
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    color: WHITE_80,
  },
  estimatedValueText: {
    fontStyle: 'normal',
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    color: WHITE_30,
  },
  totalBuyText: {
    /*   font-style: normal; */
    fontFamily: 'Roboto-Bold',
    fontSize: 20,
    color: PRIMARY,
  },
  serviceChargeText: {
    /* font-style: normal; */
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    color: WHITE_30,
  },
  sectionTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 10,
  },
  sectionSpanFinishContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 5,
  },
  spanContainer: {width: 150},
  spanTermText: {
    fontStyle: 'normal',
    fontFamily: 'Roboto-Regular',
    fontSize: 12,
    textAlign: 'justify',
    color: BLACK,
  },
});
