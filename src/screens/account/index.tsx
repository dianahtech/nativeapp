import React, { useState, useCallback, useMemo } from 'react';
import { Linking } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { useDispatch, useSelector } from 'react-redux';
import { clearUser, signOut } from '~/store/modules/user/actions';

import {
  Container,
  List,
  SectionContainer,
  TitleContainer,
  Title,
  LineDivider,
  ButtonContainer,
  Button,
  ItemText,
  Icon,
} from './styles';
import setUserTokenIntoStorage from '~/utils/setUserTokenIntoStorage';
import Alert from '~/Components/Alert';
import { useLoading } from '~/hooks/useLoading';
import { ApplicationState } from '~/store';

export default function AccountSection() {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const { showLoading, closeLoading } = useLoading();

  const PegueleveClubTesters = useSelector(
    (state: ApplicationState) => state.stores.PegueleveClubTesters
  );

  const userId = useSelector((state: ApplicationState) => state.user.data.id);

  // TODO: Substituir por CF que busca seções do firebase
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
      title: 'Clube Pegue Leve',
      items: [
        {
          name: 'Detalhes da assinatura',
          key: 'SubscriptionDetails',
        },
        {
          name: 'Gerenciar recorrência automática',
          key: 'ManageRecurrence',
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

  const handleSignOut = useCallback(() => {
    Alert.confirm({
      text: 'Deseja realmente sair?',
      onConfirm: () => {
        setUserTokenIntoStorage({
          userId: '',
          idToken: '',
          refreshToken: '',
        }).then(() => {
          showLoading();
          dispatch(clearUser());
          dispatch(signOut());
          setTimeout(() => {
            closeLoading();
          }, 800);
        });
      },
    });
  }, [closeLoading, dispatch, showLoading]);

  async function handleOpenExternalLink(key: string) {
    if (key === 'Phone') {
      const url =
        'https://api.whatsapp.com/send?l=pt-BR&phone=+5585984129284&text=Estou%20precisando%20de%20ajuda%20com%20o%20meu%20pedido';

      Linking.canOpenURL(url).then((supported) => {
        if (supported) {
          Linking.openURL(url);
        } else {
          console.log(`Não sei como abrir URI: ${url}`);
        }
      });
    }
    if (key === 'Email') {
      Alert.confirm({
        text:
          'Este canal de comunicação é apenas para elogios, sugestões, críticas ou dúvidas sobre como o serviço funciona. Se você deseja tratar sobre um pedido, aperte cancelar e escolha a opção "Problema com um pedido".',
        onConfirm: () => {
          const email = `mailto:suporte@pegueleve.com`;

          Linking.canOpenURL(email).then((suported) => {
            if (suported) {
              Linking.openURL(email);
            }
          });
        },
        okButtonText: 'Continuar',
      });
    }
    if (key === 'Signout') {
      handleSignOut();
    }
    return null;
  }

  const handleNavigate = useCallback(
    (page: string) => {
      navigation.navigate(page, { data: '' });
    },
    [navigation]
  );

  const renderSections = useCallback(
    ({ title, items }) => {
      if (title === 'Ajuda') {
        return items.map((option:any) => (
          <ButtonContainer key={option.name}>
            <Button
              onPress={() => {
                if (option.key === 'FAQ') {
                  handleNavigate(option.key);
                } else {
                  handleOpenExternalLink(option.key);
                }
              }}
            >
              <ItemText>{option.name}</ItemText>
              <Icon name="navigate-next" size={20} />
            </Button>
          </ButtonContainer>
        ));
      }
      if (title === 'Sair') {
        return (
          <ButtonContainer>
            <Button onPress={() => handleSignOut()}>
              <ItemText>{title}</ItemText>
              <Icon name="navigate-next" size={20} />
            </Button>
          </ButtonContainer>
        );
      }
      return items.map((option:any) => (
        <ButtonContainer key={option.name}>
          <Button onPress={() => handleNavigate(option.key)}>
            <ItemText>{option.name}</ItemText>
            <Icon name="navigate-next" size={20} />
          </Button>
        </ButtonContainer>
      ));
    },
    [handleNavigate, handleOpenExternalLink, handleSignOut]
  );

  const renderItem = useCallback(
    ({ item }) => {
      if (item.title === 'Clube Pegue Leve') {
        if (PegueleveClubTesters.includes(userId || '')) {
          return (
            <SectionContainer>
              <TitleContainer>
                <Title>{item.title}</Title>
              </TitleContainer>
              {renderSections(item)}
              <LineDivider />
            </SectionContainer>
          );
        }
        return null;
      }
      return (
        <SectionContainer>
          {item.title !== 'Sair' && (
            <TitleContainer>
              <Title>{item.title}</Title>
            </TitleContainer>
          )}
          {renderSections(item)}
          {item.title !== 'Sair' && <LineDivider />}
        </SectionContainer>
      );
    },
    [PegueleveClubTesters, renderSections, userId]
  );

  return (
    <Container>
      <List
        keyExtractor={(item:any) => item.title}
        data={accountSections}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
      />
    </Container>
  );
}
