import {StyleSheet} from 'react-native';

import {BLACK} from '../../identity';

export const Splashstyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: BLACK,
  },
  activityIndicator: {
    alignItems: 'center',
    height: 80,
  },
  logo: {width: '90%', resizeMode: 'contain', margin: 30},
});
