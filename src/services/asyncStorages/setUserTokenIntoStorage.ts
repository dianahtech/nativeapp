import AsyncStorage from '@react-native-async-storage/async-storage';

interface ITokenDTO {
  idToken: string;
  refreshToken: string;
  userId: string;
}

export default async function ({
  idToken,
  refreshToken,
  userId,
}: ITokenDTO): Promise<void> {
  return new Promise((resolve, _reject) => {
    AsyncStorage.multiSet([
      ['idToken', idToken],
      ['refreshToken', refreshToken],
      ['userId', userId],
    ]);
    resolve();
  });
}
