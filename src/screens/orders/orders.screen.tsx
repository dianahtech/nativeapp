import React, {useEffect, useMemo, useState} from 'react';
import {Text, View, StyleSheet, ScrollView, FlatList} from 'react-native';
import {useUser} from '../../contexts/user.context';
import api from '../../services/axios';
import OrderCard from './components/orderCard.component';

export interface userOrder {
  id: string;
  store_id: string;
  status: string;
  products: string;
  date: string;
  final_value: string;
}

export const OrdersScreen = () => {
  const {credentials} = useUser();

  const ordersHistory: userOrder[] = [
    {
      store_id: 'Alder',
      products: '2 - X-FILE BACON',
      id: '7897894561',
      status: 'Finalizado',
      date: '29/10/2022',
      final_value: 'R$:123,56',
    },
    {
      store_id: 'Alder',
      products: '2 - X-FILE BACON',
      id: '7897894789561',
      status: 'Finalizado',
      date: '29/10/2022',
      final_value: 'R$:123,56',
    },
  ];

  const [ordersHistoryApi, setOrdersHistoryApi] = useState();

  useMemo(() => {
    if (credentials.userId) {
      api
        .get(`/ordered_item/${credentials.userId}`)
        .then(response => {
          const productsLists = response.data.data;
          if (productsLists) {
            console.log(productsLists);
            setOrdersHistoryApi(productsLists);
          } else {
          }
        })
        .catch(err => {});
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
            renderItem={({item}) => <OrderCard {...item} />}
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
    fontSize: 20,
    fontWeight: 'bold',
  },
  noUserView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flatListView: {
    width: '80%',
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 24,
    alignItems: 'center',
  },
});
