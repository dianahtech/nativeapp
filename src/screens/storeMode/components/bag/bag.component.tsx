import {useNavigation} from '@react-navigation/native';
import * as React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Image, View} from 'react-native';
import {DataContext} from '../../../../contexts/index';

import {
  FONT_FAMILY_SEMI_BOLD,
  PRIMARYDARKER,
  WHITE,
} from '../../../../identity';

export const Sacola: React.FC = () => {
  const navigation = useNavigation();
  const {itensCheckout} = React.useContext(DataContext);

  return (
    <TouchableOpacity onPress={() => navigation.navigate('Checkout')}>
      <View style={styles.containerSacola}>
        <Image
          style={styles.image}
          source={require('../../assets/images/icone-sacola.png')}
        />

        {itensCheckout.length > 0 ? (
          <View style={styles.containerQuantidade}>
            <Text style={styles.textoQuantidade}>
              {itensCheckout.reduce(
                (acumulado, atual) => acumulado + atual.quantidade,
                0,
              )}
              {''}
            </Text>
          </View>
        ) : null}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  containerSacola: {
    backgroundColor: WHITE,
    padding: 18,
    borderRadius: 30,
  },
  image: {
    height: 30,
    width: 30,
  },
  containerQuantidade: {
    backgroundColor: PRIMARYDARKER,
    borderRadius: 100,
    marginTop: -22,
    marginLeft: 11,
  },
  textoQuantidade: {
    textAlign: 'center',
    padding: 4,
    fontSize: 10,
    fontFamily: FONT_FAMILY_SEMI_BOLD,
    color: WHITE,
  },
});