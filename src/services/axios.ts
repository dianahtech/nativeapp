import axios from 'axios';
import { Alert } from 'react-native';
//import AsyncStorage from '@react-native-community/async-storage';

import AsyncStorage from '@react-native-async-storage/async-storage';
import setUserTokenIntoStorage from './asyncStorages/setUserTokenIntoStorage';

//Deixar dinamico com ambientes, lembral do localhost/10.0.2.2
const api = axios.create({
  /* baseURL: 'http://dianatech.herokuapp.com', */
  baseURL: 'http://10.0.2.2:3000',

});

/* api.interceptors.request.use(request => {
  return request;
});

api.interceptors.response.use(
  response => {
    return response;
  },
  async error => {
    const originalRequest = error.config;
    if (!error.response) {
      Alert.alert('Erro de conexão! Verifique sua internet.');
    }

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      const [[, refreshToken], [, userId]] = await AsyncStorage.multiGet([
        '@refreshToken',
        '@userId',
      ]);

      console.log(userId);

      if (!userId) {
        // desloga o usuário
        await setUserTokenIntoStorage({
          userId: '',
          idToken: '',
          refreshToken: '',
        });

        //dispatch(clearUser());
        // dispatch(clearCart());
        //dispatch(signOut());

        return Promise.reject(error);
      }

      //@@@@@@@@@@@@@@@@@@@@@@@@@@
      //@@@@@@@@@@@@@@@@@@@@@@@@@@@

      if (refreshToken) {
        const tokenResponse = await api.post<ITokenResponse>(
          '/userFunctions/user-api/refresh-token',
          {
            refreshToken,
          },
        );
        if (tokenResponse.status >= 200 && tokenResponse.status < 300) {
          const {idToken} = tokenResponse.data;
          await setUserTokenIntoStorage({
            idToken,
            refreshToken,
            userId,
          });

          dispatch(refreshTokenSuccess(idToken, refreshToken as string));

          originalRequest.headers.Authorization = `Bearer ${tokenResponse.data.idToken}`;
          return axios(originalRequest);
        }
      }

      //@@@@@@@@@@@@@@@@@@@@@@@@@@
      //@@@@@@@@@@@@@@@@@@@@@@@@@@@
    }

    return Promise.reject(error);
  },
); */

export default api;
