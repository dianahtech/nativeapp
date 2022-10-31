import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {useUser} from '../../contexts/user.context';
import {FONT_SIZE_X_LARGE} from '../../identity';

export const HomeScreen = () => {
  const {credentials} = useUser();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Página para Home</Text>
      {credentials.userId ? (
        <Text>Bem vindo usuario! </Text>
      ) : (
        <Text>'Não há usuario!'</Text>
      )}
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
