import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {Product} from '../../../../../../@types';

import {Background} from './components/background/background.component';
import {ProductDescription} from './components/productDescription/productDescription.component';

const ProductDetails: React.FC<Product> = ({route}) => {
  const {name, durl, value, id} = route.params;

  return (
    <View style={styles.container}>
      <Background />
      <ProductDescription
        name={name}
        durl={durl}
        itemDesc={name}
        value={value}
        id={id}
      />
    </View>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
});
