import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {FONT_SIZE_X_LARGE} from '../../identity';

export const NotificationScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Página para notificações</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: FONT_SIZE_X_LARGE,
    fontWeight: 'bold',
  },
});
