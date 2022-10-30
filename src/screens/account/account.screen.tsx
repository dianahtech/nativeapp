import React, {useCallback, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Text, View, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {BLACK_50, PRIMARY, PRIMARYDARKER} from '../../identity';
import {useUser} from '../../contexts/user.context';

export const AccountScreen = () => {
  const {refreshCredentials} = useUser();
  const navigation = useNavigation();

  const [accountSections] = useState([
    {
      title: 'Cadastro',
      items: [
        {
          name: 'Perfil',
          key: 'Profile',
        },
        {
          name: 'Cartões',
          key: 'CreditCards',
        },
        {
          name: 'Endereços',
          key: 'Addresses',
        },
      ],
    },
    {
      title: 'Ajuda',
      items: [
        {
          name: 'Perguntas frequentes',
          key: 'FAQ',
        },
        {
          name: 'Elogios, sugestões e críticas',
          key: 'Email',
        },
        {
          name: 'Problema com um pedido',
          key: 'Phone',
        },
      ],
    },
    {
      title: 'Sair',
      items: [
        {
          name: 'Sair',
          key: 'SignOut',
        },
      ],
    },
  ]);

  const handleNavigate = useCallback(
    (page: string) => {
      navigation.navigate(page, {data: ''});
    },
    [navigation],
  );

  const renderSections = useCallback(
    ({title, items}) => {
      if (title === 'Sair') {
        return (
          <View>
            <TouchableOpacity
              style={styles.touchableOpacity}
              onPress={() => {
                refreshCredentials({
                  credential: {
                    userId: '',
                    tokenId: '',
                    refreshToken: '',
                    oneSignalPLayerId: '',
                  },
                });
                navigation.navigate('Account', {});
              }}>
              <Text style={styles.itemText}>{title}</Text>
              <Icon name="navigate-next" size={25} color={PRIMARY} />
            </TouchableOpacity>
          </View>
        );
      }
      return items.map((option: any) => (
        <View style={styles.buttonContainer} key={option.name}>
          <TouchableOpacity
            style={styles.touchableOpacity}
            onPress={() => handleNavigate(option.key)}>
            <Text style={styles.itemText}>{option.name}</Text>
            <Icon name="navigate-next" size={25} color={PRIMARY} />
          </TouchableOpacity>
        </View>
      ));
    },
    [handleNavigate, navigation, refreshCredentials],
  );

  const renderItem = useCallback(({item}) => {
    return (
      <View>
        {item.title !== 'Sair' && (
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{item.title}</Text>
          </View>
        )}
        {renderSections(item)}
        {item.title !== 'Sair' && <View style={styles.lineDivider} />}
      </View>
    );
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item: any) => item.title}
        data={accountSections}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
  },
  flatList: {
    flex: 1,
    paddingTop: 6,
  },
  titleContainer: {
    paddingTop: 16,
    paddingBottom: 16,
  },
  title: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    fontWeight: '700',
    color: PRIMARYDARKER,
  },
  lineDivider: {
    height: 0.5,
    backgroundColor: PRIMARY,
  },
  buttonContainer: {
    flex: 1,
    height: 60,
  },
  touchableOpacity: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 48,
  },
  itemText: {
    flex: 1,
    fontFamily: 'Roboto-Regular',
    fontSize: 14,
    color: BLACK_50,
  },
});
