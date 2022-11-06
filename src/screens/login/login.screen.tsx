import React, { useEffect, useState } from 'react';
import { View, TextInput, SafeAreaView, Alert, Image } from 'react-native';
/* import {
  LoginManager,
  AccessToken,
  GraphRequestManager,
  GraphRequest,
} from 'react-native-fbsdk'; */
import Icon from 'react-native-vector-icons/MaterialIcons';

//import Loader from '../loader/loader.screen';
import api from '../../services/axios';
import { validateEmail } from '../../services/validations/emailValidator';
import { useNavigation } from '@react-navigation/native';
import { useUser } from '../../contexts/user.context';

import { PRIMARY, WHITE_50 } from '../../identity';
import Button from '../components/Button';

interface SignInFormData {
  email: string;
  password: string;
}

interface ISignInProps {
  hideGoToStoreButton?: boolean;
}

import { LoginStyle } from './login.style';

const LogIn: React.FC<ISignInProps> = () => {
  const storeIcon = require('../../../android/app/src/main/res/drawable/icon.png');
  const navigation = useNavigation();
  const { credentials, refreshCredentials } = useUser();
  //Fazer logica pra ver se há usuario e redirecionar para outra pagina

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [inputEmailFocus, setEmailFocus] = useState(false);
  const [inputPasswordFocus, setPasswordFocus] = useState(false);
  const inputColors = [
    { width: 300, height: 40, borderWidth: 1, borderColor: WHITE_50 },
    { width: 300, height: 40, borderWidth: 1, borderColor: PRIMARY },
  ];

  useEffect(() => {
    if (credentials.userId) {
      navigation.navigate('Store', {});
    }
  }, [navigation, credentials.userId]);

  /*   useEffect(() => {
    if (email && password) {
      setIsFieldsFilled(true);
    } else {
      setIsFieldsFilled(false);
    }
  }, [email, password]); */

  /*   const openForgotPasswordModal = useCallback(() => {
    navigation.navigate('ForgotPassword');
  }, [navigation]); */

  /*  const facebookApiRequest = useCallback(
    async (facebookToken: string) => {
      showLoading();
      try {
        const response = await api.post(
          '/userFunctions/user-api/facebook-sign-in',
          {
            facebookToken,
          }
        );

        const { idToken, refreshToken, userId } = response.data;

        await setUserTokenIntoStorage({ idToken, refreshToken, userId });

        dispatch(saveToken(idToken, refreshToken, userId));
      } catch (err) {
        closeLoading();
      }

      // verificar a necessidade de um loading.
    },
    [dispatch, showLoading, closeLoading]
  ); */
  /*
  const handleFacebookLogin = useCallback(() => {
    LoginManager.logInWithPermissions(['public_profile', 'email']).then(
      result => {
        if (result.isCancelled) {
          // do something
        } else {
          AccessToken.getCurrentAccessToken().then(token => {
            const infoRequest = new GraphRequest(
              '/me',
              {
                httpMethod: 'GET',
                version: 'v9.0',
                accessToken: token?.accessToken,
                parameters: {
                  fields: {
                    string: 'email,name,friends',
                  },
                },
              },
              (err, res: any) => {
                if (res && res.email && res.name) {
                  dispatch(
                    setUser({
                      ...user,
                      information: {
                        ...user.information,
                        email: res.email,
                        name: res.name,
                      },
                    }),
                  );
                  facebookApiRequest(token?.accessToken);
                }
              },
            );
            // Start the graph request.
            new GraphRequestManager().addRequest(infoRequest).start();
          });
        }
      },
      error => {
        // do something
      },
    );
  }, [dispatch, facebookApiRequest, user]); */

  const onLoginSubmit = async () => {
    const isRealEmail = validateEmail(email);

    if (!isRealEmail) {
      Alert.alert('Por favor, preencha um e-mail valido');
      return;
    }
    if (!password) {
      Alert.alert('Please fill Password');
      return;
    }

    try {
      /*     console.log(`Este é o valor do email: ${email}`); */
      const response = await api.post('api/native/sign_in', {
        email: email,
        password: password,
      });

      //const creds = response.headers;
      //const accessToken = creds['access-token'];
      //const authorization = creds.authorization;

      const sessionCredentials = response.data.data;

      console.log(
        `Este é o valor do sessionCredentials: ${JSON.stringify(
          sessionCredentials,
        )}`,
      );

      if (!sessionCredentials.uid) {
        throw new Error(
          'Não foi possível fazer login no momento. Tente novamente mais tarde',
        );
      } else {
        refreshCredentials({
          credential: {
            userId: sessionCredentials.id,
            tokenId: sessionCredentials.uid,
            refreshToken: sessionCredentials.uid,
            oneSignalPLayerId: sessionCredentials.uid,
          },
        });
      }
    } catch (err) {
      if (
        err.response?.status === 400 &&
        (err.response.data.name === ResponseResult.WRONG_PASSWORD ||
          err.response.data.name === ResponseResult.USER_NOT_FOUND)
      ) {
        Alert.alert(
          'O email ou a senha digitados não estão corretos. Verifique as informações e tente novamente.',
        );
      }
      console.log(err);
      return;
    } finally {
      navigation.navigate('AccountTab', {});
    }
  };

  return (
    <SafeAreaView style={LoginStyle.content}>
      <View style={LoginStyle.view}>
        <Image
          source={storeIcon}
          resizeMode="stretch"
          style={{ height: 100, width: 100, marginBottom: 10 }}
        />
        <TextInput
          autoCorrect={false}
          autoCapitalize="none"
          keyboardType="email-address"
          style={inputEmailFocus ? inputColors[1] : inputColors[0]}
          onChangeText={email => setEmail(email)}
          placeholder="E-mail"
          returnKeyType="next"
          onBlur={() => setEmailFocus(false)}
          onFocus={() => setEmailFocus(true)}
        />
        <TextInput
          style={inputPasswordFocus ? inputColors[1] : inputColors[0]}
          onChangeText={text => setPassword(text)}
          placeholder="Password"
          secureTextEntry
          returnKeyType="send"
          onBlur={() => setPasswordFocus(false)}
          onFocus={() => setPasswordFocus(true)}
        />

        <Button
          onPress={() => {
            onLoginSubmit();
          }}
          text="Entrar"
          type="button-block"
        />

        <Button text="Entrar com facebook" onPress={() => { }} type="fb" />

        <Button
          text="Criar Conta"
          onPress={() => {
            navigation.navigate('Register');
          }}
          type="outline-gray"
        />

        {/*
          <TextContainer>
            <ForgotPasswordButton onPress={openForgotPasswordModal}>
              <ForgotPasswordText>Esqueceu a senha?</ForgotPasswordText>
            </ForgotPasswordButton>

            <SignUpButton onPress={() => handleOpenSignUp()}>
              <SignUpText>Ainda não tenho uma conta</SignUpText>
            </SignUpButton>

            <TermContainer>
              <TermInfoText>
                Ao criar conta ou fazer Login você concorda com o nossos
              </TermInfoText>
              <TermButton
                onPress={() => {
                  navigation.navigate('Webview', {
                    title: 'Termos e Condições',
                    url: 'https://pegueleve.com/termos-e-condicoes/',
                  });
                }}>
                <TermText>Termos e Condições</TermText>
              </TermButton>
            </TermContainer>
          </TextContainer> */}
      </View>
    </SafeAreaView>
  );
};

export default LogIn;
