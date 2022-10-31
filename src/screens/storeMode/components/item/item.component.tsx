import {useNavigation} from '@react-navigation/native';
import * as React from 'react';
import {TouchableOpacity, Image, StyleSheet, Text} from 'react-native';
import {Product} from '../../../../@types';
import {
  FONT_FAMILY_SEMI_BOLD,
  FONT_SIZE_MEDIUM,
  WHITE,
} from '../../../../identity';
import {formatCash} from '../../../../services/transformers/formatCash';

export const Item: React.FC<Product> = ({name, durl, value, id}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.containerItem}
      onPress={() =>
        navigation.navigate('ProductDetails', {
          name,
          durl,
          value,
          id,
        })
      }>
      <Image
        resizeMode="stretch"
        style={styles.imagem}
        key={id}
        source={{uri: `${durl}`}}
      />
      <Text style={styles.texto}>{name}</Text>
      <Text style={styles.texto}>{formatCash(value)}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  containerItem: {
    height: 168,
    backgroundColor: WHITE,
    borderRadius: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
  },
  texto: {
    marginTop: 8,
    fontFamily: FONT_FAMILY_SEMI_BOLD,
    fontSize: FONT_SIZE_MEDIUM,
    color: '#848486',
  },
  imagem: {width: 50, height: 50},
});
