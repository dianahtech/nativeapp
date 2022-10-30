import React, {useEffect, useState} from 'react';
import {View, FlatList, StyleSheet} from 'react-native';

import api from '../../../../services/axios';
import Header from '../../components/header/header.component';
import {Item} from '../../components/item/item.component';

//import {StoreContext} from '../../../../contexts/store.context';

export const ProductList = () => {
  const [newlist, setNewlist] = useState();

  /*   const {setSelectedCategorie} = React.useContext(StoreContext);
  const sections = [...new Set(productsLists.map(item => item.section))];
  const result = productsLists.filter(
    word => word.section === sections[0],
  );
  setSelectedCategorie(sections[0]) */

  useEffect(() => {
    api
      .get('/items/1')
      .then(response => {
        const productsLists = response.data.data;
        if (productsLists) {
          setNewlist(productsLists);
        } else {
        }
      })
      .catch(err => {
        console.log('Nao ta enviando');
      });
  }, []);

  return (
    <>
      <View style={styles.flatListView}>
        <FlatList
          numColumns={2}
          data={newlist}
          renderItem={({item}) => <Item {...item} />}
          keyExtractor={item => item.id}
          ListHeaderComponent={<Header />}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  flatListView: {
    marginHorizontal: 24,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
  },
});
