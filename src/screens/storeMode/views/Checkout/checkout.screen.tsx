import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import { useStore } from '../../../../contexts/store.context';
import {
  FONT_FAMILY_SEMI_BOLD,
  FONT_SIZE_LARGE,
  FONT_SIZE_XX_LARGE,
} from '../../../../identity';

import { CheckoutItem } from './component/checkoutItem';
import Button from '../../../components/Button';
import { formatCash } from '../../../../services/transformers/formatCash';

export const Checkout: React.FC = () => {
  const navigation = useNavigation();

  const { itensCheckout } = useStore();

  const valorTotal = itensCheckout.reduce(
    (acumulado, atual) => acumulado + atual.qty * atual.value,
    0,
  );

  console.log(typeof itensCheckout[0]?.value);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Checkout</Text>
      {itensCheckout.map(item => (
        <CheckoutItem key={item.id} {...item} />
      ))}
      <Text style={styles.total}> Total: {formatCash(valorTotal)} </Text>
      <Button
        type="button-block"
        text={'Finalizar Compra'}
        onPress={() => navigation.navigate('DeliveryMode', {})}
      />
      <Button
        type="outline-gray"
        text={'Continuar comprando'}
        onPress={() => navigation.navigate('ProductList', {})}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    /* alignItems: 'center', */
    margin: 15,
  },
  title: {
    fontFamily: FONT_FAMILY_SEMI_BOLD,
    fontSize: FONT_SIZE_XX_LARGE,
    marginBottom: 20,
  },
  total: {
    margin: 10,
    padding: 10,
    fontSize: FONT_SIZE_LARGE,
    fontFamily: FONT_FAMILY_SEMI_BOLD,
  },
});
