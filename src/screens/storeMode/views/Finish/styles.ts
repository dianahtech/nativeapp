import {StyleSheet} from 'react-native';

import {
  BACKGROUND_COLOR,
  BLACK,
  ERROR_COLOR,
  FONT_FAMILY_BOLD,
  FONT_FAMILY_REGULAR,
  FONT_SIZE_LARGE,
  FONT_SIZE_MEDIUM,
  FONT_SIZE_SMALL,
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
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: FONT_SIZE_LARGE,
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
    fontFamily: FONT_FAMILY_BOLD,
    fontSize: FONT_SIZE_LARGE,
    color: BLACK,
  },
  sectionContainer: {padding: 8,marginBottom: 30},
  innformationContainerText: {
    fontStyle: 'normal',
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: FONT_SIZE_MEDIUM,
    color: WHITE_80,
  },
  estimatedValueText: {
    fontStyle: 'normal',
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: FONT_SIZE_MEDIUM,
    color: WHITE_30,
  },
  totalBuyText: {
    /*   font-style: normal; */
    fontFamily: FONT_FAMILY_BOLD,
    fontSize: FONT_SIZE_LARGE,
    color: PRIMARY,
  },
  serviceChargeText: {
    /* font-style: normal; */
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: FONT_SIZE_MEDIUM,
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
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: FONT_SIZE_SMALL,
    textAlign: 'justify',
    color: BLACK,
  },
});
