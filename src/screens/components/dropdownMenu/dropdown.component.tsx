import React, {FC, ReactElement, useRef, useState} from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  Modal,
  View,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import {useStore} from '../../../contexts/store.context';
import {PRIMARY} from '../../../identity';

interface Props {
  label: string;
  data: Array<{label: string; value: string}>;
}

const Dropdown: FC<Props> = ({label, data}) => {
  const {filterInstaceOfAllItemsBySection} = useStore();

  const DropdownButton = useRef();
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState(undefined);
  const [dropdownTop, setDropdownTop] = useState(0);

  const toggleDropdown = (): void => {
    visible ? setVisible(false) : openDropdown();
  };

  const openDropdown = (): void => {
    DropdownButton.current.measure((_fx, _fy, _w, h, _px, py) => {
      setDropdownTop(py + h);
    });
    setVisible(true);
  };

  const onItemPress = (item): void => {
    setSelected(item);
    filterInstaceOfAllItemsBySection(item);
    setVisible(false);
  };

  const renderItem = ({item}): ReactElement<any, any> => (
    <TouchableOpacity style={styles.item} onPress={() => onItemPress(item)}>
      <Text>{item}</Text>
    </TouchableOpacity>
  );

  const renderDropdown = (): ReactElement<any, any> => {
    return (
      <Modal visible={visible} transparent animationType="none">
        <TouchableOpacity
          style={styles.overlay}
          onPress={() => setVisible(false)}>
          <View style={[styles.dropdown, {top: dropdownTop}]}>
            <FlatList
              data={data}
              renderItem={renderItem}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    );
  };

  return (
    <View style={styles.containerButton}>
      <TouchableOpacity
        ref={DropdownButton}
        style={styles.button}
        onPress={toggleDropdown}>
        {renderDropdown()}
        <Text>{selected || label}</Text>
        <Icon style={styles.icon} name="arrow-drop-down" size={35} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  containerButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 16,
  },

  button: {
    justifyContent: 'space-between',
    width: 150,
    marginTop: -46,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#efefef',
    borderRadius: 20,
    borderWidth: 3,
    borderColor: PRIMARY,
    padding: 10,
    zIndex: 1,
  },
  icon: {
    marginRight: 10,
  },
  dropdown: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: -46,
    borderRadius: 5,
    alignItems: 'center',
    position: 'relative',
    backgroundColor: '#fff',
    width: '40%',
    shadowColor: '#000000',
    shadowRadius: 4,
    shadowOffset: {height: 4, width: 0},
    shadowOpacity: 0.5,
  },
  overlay: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 30,
    width: '100%',
  },
  item: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderBottomWidth: 1,
  },
  textItem: {},
});

export default Dropdown;
