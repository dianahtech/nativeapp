import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  BACKGROUND_COLOR,
  FONT_FAMILY_BOLD,
  FONT_FAMILY_REGULAR,
  FONT_SIZE_MEDIUM,
  FONT_SIZE_XX_LARGE,
  PRIMARY,
} from '../../../../identity';
import {Sacola} from '../bag/bag.component';

import {useStore} from '../../../../contexts/store.context';
import Dropdown from '../../../components/dropdownMenu/dropdown.component';

const Header: React.FC = () => {
  const {
    storeInfo,
    selectedCategorie,
    storeCategories,
    filterInstaceOfAllItemsBySection,
  } = useStore();

  return (
    <>
      <View style={styles.containerTitulo}>
        <Text style={styles.titulo}>{storeInfo.storeName}</Text>
        <Sacola />
      </View>
      <View>
        <View style={styles.separador} />

        {/*  <View style={styles.containerTexto}>
          <Text style={styles.textoDescricao}>{selectedCategorie}</Text>
        </View> */}

        <Dropdown label={selectedCategorie} data={storeCategories} />
      </View>
    </>
  );
};
export default Header;

const styles = StyleSheet.create({
  containerTitulo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 16,
  },
  titulo: {
    fontFamily: FONT_FAMILY_BOLD,
    fontSize: FONT_SIZE_XX_LARGE,
  },
  separador: {
    borderWidth: 0.5,
    borderColor: '#A1A5AA',
  },
  containerTexto: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: -46,
  },
  textoDescricao: {
    borderRadius: 10,
    borderWidth: 2,
    borderColor: PRIMARY,
    padding: 15,
    backgroundColor: BACKGROUND_COLOR,
    fontSize: FONT_SIZE_MEDIUM,
    fontFamily: FONT_FAMILY_REGULAR,
    color: '#A1A5AA',
  },
});
