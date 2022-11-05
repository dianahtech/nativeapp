import {useNavigation} from '@react-navigation/native';
import * as React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

import {
  BLACK,
  FONT_FAMILY_BOLD,
  FONT_FAMILY_REGULAR,
  FONT_SIZE_LARGE,
  FONT_SIZE_MEDIUM,
  FONT_SIZE_SMALL,
  FONT_SIZE_XX_LARGE,
  WHITE,
  BLACK_50,
} from '../../../../../../../../identity';
import Button from '../../../../../../../components/Button';
import {formatCash} from '../../../../../../../../services/transformers/formatCash';
import {Product} from '../../../../../../../../@types';
import {useStore} from '../../../../../../../../contexts/store.context';

export const ProductDescription: React.FC<Product> = ({
  name,
  durl,
  value,
  id,
}) => {
  const {addItem} = useStore();
  const navigation = useNavigation();
  let newItem: Product = {};

  let itevaluetype = 4.98;

  return (
    <View style={styles.container}>
      <View style={styles.position}>
        <View style={styles.item}>
          <View style={styles.textoPosicao}>
            <View>
              {/* <Text style={styles.textoSuperior}>{name}</Text> */}
            <Text style={styles.textoMedio}>{name}</Text> 
              <Text style={styles.textoInferior}>{name}</Text>
            </View>
            <Image
              resizeMode="contain"
              style={styles.imagemItem}
              source={{uri: durl}}
            />
          </View>
          <Text style={styles.itemDescricao}>
            Descricao do item neste campo, como tempeiros, pesos, quantidades, etc.
          </Text>

          <View style={styles.rodape}>            
            <Text style={styles.moeda}>{formatCash(value*1)}</Text>
            <Button
              text="COMPRAR"
              type="button"
              onPress={() => {
                newItem = {
                  id,
                  name,
                  durl,
                  value,
                };

                addItem(newItem);
                navigation.navigate('Checkout');
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // 4/10 da view anterior
    flex: 5,
    marginTop: -160,
  },
  position: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  item: {
    backgroundColor: WHITE,
    borderRadius: 30,
    padding: 28,
    width: '80%',
    elevation: 4,
  },
  textoPosicao: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textoSuperior: {
    fontFamily: FONT_FAMILY_BOLD,
    fontSize: FONT_SIZE_MEDIUM,
    marginBottom: 4,
  },
  textoMedio: {
    fontFamily: FONT_FAMILY_BOLD,
    fontSize: FONT_SIZE_XX_LARGE,
    marginBottom: 4,
  },
  textoInferior: {
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: FONT_SIZE_SMALL,
    marginBottom: 12,
    color: '#CACACA',
  },
  imagemItem: {width: 30, height: 72},
  itemDescricao: {
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: FONT_SIZE_SMALL,
    marginTop: 10,
    color: '#CACACA',
  },
  rodape: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16,
  },
  buttonComprar: {
    color: BLACK_50,
  },
  moeda: {
    fontFamily: FONT_FAMILY_BOLD,
    fontSize: FONT_SIZE_LARGE,
    color: BLACK,
  },
});
