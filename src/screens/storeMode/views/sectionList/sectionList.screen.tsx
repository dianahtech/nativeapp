import React, {useEffect} from 'react';
import {StyleSheet, SectionList, SafeAreaView} from 'react-native';

import {FONT_SIZE_X_LARGE} from '../../../../identity';
import {Item} from '../../components/item/item.component';

import SectionName from './Components/SectionName';

export const ProductList = () => {
  useEffect(() => {
    getItemsFromStore();
  }, []);

  const sections: {
    name: string;
    id: string;
    data: readonly {
      name: string;
      id: string;
      value: number;
      durl: string;
    }[];
  }[] = [
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
  ];

  /*   const renderItem = useCallback(({item}) => {
    return (
      <View>
        <Text>{item.title}</Text>
      </View>
    );
  }, []); */

  /*   const handleSectionPress = useCallback(({item}) => {}, []);

  const renderSectionList = useMemo(() => {
    return (
      <SectionList
        stickySectionHeadersEnabled
        extraData={DATA}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        keyboardDismissMode="on-drag"
        keyboardShouldPersistTaps="always"
        sections={DATA}
        keyExtractor={section => section.id}
        keyExtractor={section => section.title}
        renderItem={renderItem}
        renderSectionHeader={({section}) => (
          <SectionName
            section={{
              name: section.title.toUpperCase(),
               id: section.id,
              loaded: section.loaded,
              exhibitionMode: section.exhibitionMode as ExhibitionMode,
              isHided: section.isHided,
              color: section.color,
            }}
            onPress={handleSectionPress}
          />
        )}
      />
    );
  }, []);
 */

  /*   const renderItem = useCallback(({name}) => {
    console.log(`Este é o valor do title:${name}`);
    return (
      <View style={styles.item}>
        <Text style={styles.title}>{name || 'Ta sem titulo'}</Text>
      </View>
    );

  }, []); */

  return (
    <SafeAreaView style={styles.container}>
      <SectionList
        sections={sections}
        keyExtractor={item => item.id}
        /* renderItem={renderItem} */
        renderItem={({item}) => <Item {...item} />}
        renderSectionHeader={({section}) => (
          /*  <Text style={styles.header}>{section.name}</Text> */
          <SectionName
            section={{
              name: section.name,
              id: section.id,
              loaded: true,
              isHided: false,
            }}
            /* onPress={handleSectionPress} */
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
