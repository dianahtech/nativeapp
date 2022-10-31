import {StyleSheet} from 'react-native';
import {
  BACKGROUND_COLOR,
  WHITE_30,
  BLACK_30,
  BLACK_50,
  WHITE_50,
  WHITE,
  FONT_FAMILY_REGULAR,
  FONT_FAMILY_SEMI_BOLD,
  FONT_SIZE_MEDIUM,
  FONT_SIZE_LARGE,
  FONT_SIZE_SMALL,
} from '../../../../identity';

export const DeliveryModeStyle = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    background: BACKGROUND_COLOR,
    justifyContent: 'flex-start',
  },
  sectionTitle: {
    fontSize: FONT_SIZE_MEDIUM,
    marginBottom: 20,
    marginTop: 20,
    color: BLACK_30,
    fontFamily: FONT_FAMILY_REGULAR,
  },
  sectionCard: {
    flexDirection: 'row',
    background: BACKGROUND_COLOR,
    borderWidth: 1,
    borderColor: WHITE_30,
    borderRadius: 5,
    height: 150,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
    paddingLeft: 15,
    paddingRight: 10,
    /*  opacity: ${(props) => (props.unavailable ? 0.5 : 1)}; */
  },
  selectionTitle: {
    fontSize: FONT_SIZE_LARGE,
    color: BLACK_30,
    fontFamily: FONT_FAMILY_SEMI_BOLD,
  },
  selectionSubtitle: {
    fontSize: FONT_SIZE_SMALL,
    color: WHITE_30,
    fontFamily: FONT_FAMILY_REGULAR,
  },
});
