import React, {useEffect} from 'react';
import {View, FlatList, StyleSheet} from 'react-native';

import Header from '../../components/header/header.component';
import {Item} from '../../components/item/item.component';
import {useStore} from '../../../../contexts/store.context';
import {FONT_SIZE_X_LARGE} from '../../../../identity';

export const ProductList = () => {
  const {istanceOfAllItems, getItemsFromStore} = useStore();

  useEffect(() => {
    getItemsFromStore();
  }, []);

  return (
    <>
      <View style={styles.flatListView}>
        <FlatList
          numColumns={2}
          data={istanceOfAllItems}
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
    fontSize: FONT_SIZE_X_LARGE,
    fontWeight: 'bold',
  },
});
