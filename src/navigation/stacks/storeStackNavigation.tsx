import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

////@ROTAS
import ProductDetails from '../../screens/storeMode/views/ProductList/component/ProductDetails/productDetails.component';
import {ProductList} from '../../screens/storeMode/views/ProductList/productList.screen';
import {Checkout} from '../../screens/storeMode/views/Checkout/checkout.screen';
import DeliveryMode from '../../screens/storeMode/views/DeliveryMode/deliveryMode.screen';
import PaymentMode from '../../screens/storeMode/views/PaymentMode/paymanet.screen';
import FinishPage from '../../screens/storeMode/views/Finish/finish.screen';

const Stack = createNativeStackNavigator();

const StoreRoutes: React.FC = () => {
  return (
    <>
      <Stack.Navigator initialRouteName="ProductList">
        <Stack.Screen
          name="ProductList"
          component={ProductList}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ProductDetails"
          component={ProductDetails}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Checkout"
          component={Checkout}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DeliveryMode"
          component={DeliveryMode}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PaymentMode"
          component={PaymentMode}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="FinishPage"
          component={FinishPage}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </>
  );
};

export default StoreRoutes;
