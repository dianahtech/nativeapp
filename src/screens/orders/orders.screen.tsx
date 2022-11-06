import React, { useEffect, useMemo, useState } from 'react';
import { Text, View, StyleSheet, ScrollView, FlatList } from 'react-native';
import { ItensCheckoutType, userOrder } from '../../@types';
import { useUser } from '../../contexts/user.context';
import { FONT_SIZE_LARGE } from '../../identity';
import api from '../../services/axios';
import OrderCard from './components/orderCard.component';

export const OrdersScreen = () => {
  const { credentials } = useUser();
  const [ordersHistoryApi, setOrdersHistoryApi] = useState<userOrder[]>();

  useMemo(() => {
    if (credentials.userId) {
      api
        .get(`/api/orders/${credentials?.userId || 1}`)
        .then(response => {
          const productsLists = response.data.data;
          if (productsLists) {
            console.log(productsLists);
            setOrdersHistoryApi(productsLists);
          } else {
          }
        })
        .catch(err => { });
    }
  }, [credentials.userId]);

  return (
    <>
      {credentials.userId ? (
        <View style={styles.flatListView}>
          <Text style={styles.text}>MEUS PEDIDOS</Text>
          <FlatList
            numColumns={1}
            data={ordersHistoryApi}
            renderItem={({ item }) => <OrderCard {...item} />}
            keyExtractor={item => item.id}
          />
        </View>
      ) : (
        <View style={styles.noUserView}>
          <Text style={styles.text}>
            Realize o login para ver seus pedidos.
          </Text>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: FONT_SIZE_LARGE,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 25
  },
  noUserView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flatListView: {
    width: '90%',
    marginHorizontal: 15,
    alignItems: 'center',
  },
});
