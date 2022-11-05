import React, {useEffect, useState} from 'react';
import {StyleSheet, SectionList, SafeAreaView} from 'react-native';

import {FONT_SIZE_X_LARGE} from '../../../../identity';
import {Item} from '../../components/item/item.component';

import SectionName from './Components/SectionName';
import {useStore} from '../../../../contexts/store.context';

export const ProductLists = () => {
  const {getItemsFromStore, itemsBySection} = useStore();
  const [sections, setSections]: {
    name: string;
    id: string;
    data: {
      name: string;
      durl: string;
      itemDesc?: string;
      value: number;
      id: any;
      section?: string;
      qty: number;
    }[];
  }[] =useState([
    {
      id: '0000',
      name: 'Main dishes',
      data: [
        {
          name: 'pizza',
          id: '128973456',
          value: 123,
          durl: '',
        },
        {
          name: 'Cachorro quente',
          id: '456123789',
          value: 123,
          durl: '',
        },
      ],
    },
    {
      id: '111',
      name: 'Sides',
      data: [
        {
          name: 'Cachorro quente',
          id: '456778989',
          value: 123,
          durl: '',
        },
        {
          name: 'Cachorro quente',
          ids: '12378456',
          value: 123,
          durl: '',
        },
      ],
    },
  ]);

  useEffect(() => {
    const items =  getItemsFromStore()

    setSections
  }, []);


  return (
    <SafeAreaView style={styles.container}>
      <SectionList
        sections={itemsBySection}
        keyExtractor={item => item.id}
      
        renderItem={({item}) => <Item {...item} />}
        renderSectionHeader={({section}) => (
          <SectionName
            section={{
              name: section.name,
              id: section.id,
              loaded: true,
              isHided: false,
            }}
         
          />
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 30,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
  },
  header: {
    fontSize: 32,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
  },
  flatListView: {
    marginHorizontal: 24,
  },
  text: {
    fontSize: FONT_SIZE_X_LARGE,
    fontWeight: 'bold',
  },
});
