import * as React from 'react';

import {View, Text, Image, StyleSheet} from 'react-native';
import {
  FONT_FAMILY_LIGHT,
  FONT_FAMILY_REGULAR,
  FONT_FAMILY_SEMI_BOLD,
  FONT_SIZE_MEDIUM,
  FONT_SIZE_SMALL,
  WHITE,
} from '../../../../../identity';
import {formatCash} from '../../../../../services/transformers/formatCash';

export const CheckoutItem: React.FC = ({name, durl, value, preco, qty}) => {
  console.log(name, durl, value, preco, qty);
  return (
    <View style={styles.containerItem}>
      <View style={styles.imagemContainer}>
        <Image source={{uri: durl}} style={styles.imagem} />
      </View>
      <View style={styles.descContainer}>
        <Text style={styles.descTextoSuperior}>{name}</Text>
        <Text style={styles.descTextoInferior}>{name}</Text>
      </View>
      <View style={styles.itemPrecoContainer}>
        <Text style={styles.precoTexto}>{formatCash(preco * qty)}</Text>
        <Text style={styles.precoTexto}>Qtd: {qty}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerItem: {
    backgroundColor: WHITE,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 4,
  },
  imagemContainer: {
    flex: 20,
    backgroundColor: 'transparent',
    padding: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagem: {
    width: 50,
    height: 50,
  },
  descContainer: {
    flex: 25,
    padding: 18,
    justifyContent: 'center',
  },
  descTextoSuperior: {
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: FONT_SIZE_MEDIUM,
  },
  descTextoInferior: {
    fontFamily: FONT_FAMILY_LIGHT,
    fontSize: FONT_SIZE_SMALL,
  },
  itemPrecoContainer: {
    flex: 35,
    padding: 18,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  textoQuantidade: {
    textAlign: 'center',
    padding: 4,
    fontSize: 10,
    fontFamily: FONT_FAMILY_SEMI_BOLD,
    color: WHITE,
  },
  precoTexto: {
    fontFamily: FONT_FAMILY_REGULAR,
  },
});
