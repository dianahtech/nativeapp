import {StyleSheet} from 'react-native';

import {BLACK_50, FONT_SIZE_SMALL, WHITE} from '../../identity';

export const LoginStyle = StyleSheet.create({
  content: {
    /* display: 'flex', */
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  view: {
    width: '85%',
    /*     height: '75%', */
    backgroundColor: WHITE,
    alignItems: 'center',
    borderRadius: 15,
    padding: 20,
    justifyContent: 'space-evenly',
    shadowColor: 'red',
  },
  logo: {height: 100, resizeMode: 'contain', margin: 30},
  inputs: {
    width: 250,
    height: 50,
    backgroundColor: WHITE,
    marginBottom: 2,
    borderRadius: 3,
    background: WHITE,
    marginTop: 20,
    borderWidth: 1,
    borderColor: WHITE,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    width: 250,
    color: BLACK_50,
    fontSize: FONT_SIZE_SMALL,
    lineHeight: 20,
    height: 40,
    marginLeft: 15,
    fontWeight: 'normal',
    background: WHITE,
  },
});
