import React, {useEffect, useState} from 'react';
import {View, TextInput, SafeAreaView, Alert, Text} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '../../services/axios';
import {validateEmail} from '../../services/validations/emailValidator';
import {useNavigation} from '@react-navigation/native';
import {useUser} from '../../contexts/user.context';

import {PRIMARY, WHITE_50} from '../../identity';
import Button from '../components/Button';

interface SignInFormData {
  email: string;
  password: string;
}

interface ISignInProps {
  hideGoToStoreButton?: boolean;
}

import {LoginStyle} from '../login/login.style';

const Register: React.FC<ISignInProps> = () => {
  const navigation = useNavigation();
  const {credentials, refreshCredentials} = useUser();
  //Fazer logica pra ver se há usuario e redirecionar para outra pagina

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [inputEmailFocus, setEmailFocus] = useState(false);
  const [inputPasswordFocus, setPasswordFocus] = useState(false);
  const [inputConfirmPasswordFocus, setConfirmPasswordFocus] = useState(false);
  const inputColors = [
    {width: 300, height: 40, borderWidth: 1, borderColor: WHITE_50},
    {width: 300, height: 40, borderWidth: 1, borderColor: PRIMARY},
  ];

  useEffect(() => {
    if (credentials.userId) {
      navigation.goBack();
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

  const onRegisterSubmit = async () => {
    const isRealEmail = validateEmail(email);

    if (!isRealEmail) {
      Alert.alert('Por favor, preencha um e-mail valido');
      return;
    }
    if (!password || !confirmPassword) {
      Alert.alert('Please fill Password');
      return;
    } else if (password !== confirmPassword) {
      Alert.alert('As senhas não coincidem!');
    }
    try {
      const response = await api.post('/native/', {
        email: email,
        password: password,
        password_confirmation: password,
      });

      console.log(response);

      const creds = response.headers;
      const accessToken = creds['access-token'];
      const authorization = creds.authorization;

      const uid = response.data.data.uid;

      if (!uid) {
        throw new Error(
          'Não foi possível fazer login no momento. Tente novamente mais tarde',
        );
      } else {
        refreshCredentials({
          credential: {
            userId: uid,
            tokenId: '',
            refreshToken: '',
            oneSignalPLayerId: '',
          },
        });
      }
    } catch (err) {
      const errMsg = err;
      console.log(errMsg);
      return;
    } finally {
      navigation.navigate('AccountTab');
    }
  };

  return (
    <SafeAreaView style={LoginStyle.content}>
      <View style={LoginStyle.view}>
        <TextInput
          autoCorrect={false}
          autoCapitalize="none"
          keyboardType="email-address"
          style={inputEmailFocus ? inputColors[1] : inputColors[0]}
          onChangeText={Text => setEmail(Text)}
          placeholder="E-mail"
          returnKeyType="next"
          onBlur={() => setEmailFocus(false)}
          onFocus={() => setEmailFocus(true)}
        />
        <TextInput
          style={inputPasswordFocus ? inputColors[1] : inputColors[0]}
          onChangeText={text => setPassword(text)}
          placeholder="Senha"
          secureTextEntry
          returnKeyType="send"
          onBlur={() => setPasswordFocus(false)}
          onFocus={() => setPasswordFocus(true)}
        />
        <TextInput
          style={inputConfirmPasswordFocus ? inputColors[1] : inputColors[0]}
          onChangeText={text => setConfirmPassword(text)}
          placeholder="Confirme a senha"
          secureTextEntry
          returnKeyType="send"
          onBlur={() => setConfirmPasswordFocus(false)}
          onFocus={() => setConfirmPasswordFocus(true)}
        />

        <Button
          onPress={() => {
            onRegisterSubmit();
          }}
          text="Criar Conta"
          type="button-block"
        />

        <Button
          text="Voltar"
          onPress={() => {
            navigation.goBack();
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

export default Register;
