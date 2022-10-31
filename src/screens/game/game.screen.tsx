import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {FONT_SIZE_XX_LARGE} from '../../identity';
import Button from '../components/Button';

export const GameScreen = () => {
  const navigation = useNavigation();
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.text}>Game screen!</Text>

        <Text>Bem vindo usuario! </Text>
        <Button
          text="INICIAR JOGO"
          type="button"
          onPress={() => navigation.navigate('Appy')}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: FONT_SIZE_XX_LARGE,
    fontWeight: 'bold',
  },
});
