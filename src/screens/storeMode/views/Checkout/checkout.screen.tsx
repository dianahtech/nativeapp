import {useNavigation} from '@react-navigation/native';
import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {useStore} from '../../../../contexts/store.context';
import {
  FONT_FAMILY_BOLD,
  FONT_FAMILY_SEMI_BOLD,
  FONT_SIZE_LARGE,
  FONT_SIZE_SMALL,
  FONT_SIZE_XX_LARGE,
  LIGHTBLUE,
} from '../../../../identity';

import {CheckoutItem} from './component/checkoutItem';
import Button from '../../../components/Button';
import {formatCash} from '../../../../services/transformers/formatCash';

export const Checkout: React.FC = () => {
  const navigation = useNavigation();

  const {itensCheckout} = useStore();

  const valorTotal = itensCheckout.reduce(
    (acumulado, atual) => acumulado + atual.qty * atual.value,
    0,
  );

  const Titulo = ({children}) => (
    <Text style={styles.titulo}> {children} </Text>
  );
  const Total = ({children}) => <Text style={styles.total}>{children}</Text>;

  console.log(itensCheckout);

  return (
    <View style={styles.container}>
      <Titulo>Checkout</Titulo>

      {itensCheckout.map(item => (
        <CheckoutItem key={item.id} {...item} />
      ))}

      <Text style={styles.total}> Total: {formatCash(valorTotal)} </Text>

      <Button
        type="button-block"
        text={'Finalizar Compra'}
        onPress={() => navigation.navigate('DeliveryMode')}
      />

      <Button
        type="outline-gray"
        text={'Continuar comprando'}
        onPress={() => navigation.navigate('ProductList')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    margin: 24,
  },
  titulo: {
    fontFamily: FONT_FAMILY_SEMI_BOLD,
    fontSize: FONT_SIZE_XX_LARGE,
    marginBottom: 10,
  },
  total: {
    padding: 10,
    fontSize: FONT_SIZE_LARGE,
    fontFamily: FONT_FAMILY_SEMI_BOLD,
  },
  continuarTexto: {
    fontFamily: FONT_FAMILY_BOLD,
    fontSize: FONT_SIZE_SMALL,
    color: LIGHTBLUE,
    marginTop: 20,
    textAlign: 'center',
  },
});
