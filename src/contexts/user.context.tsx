//import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {
  createContext,
  useContext,
  ReactNode,
  useState,
  useCallback,
} from 'react';

interface CredentialsType {
  userId?: string;
  tokenId?: string;
  refreshToken?: string;
  oneSignalPLayerId: string;
}

interface RefreshCredentialsDTO {
  credential: CredentialsType;
}

//Usuario,
interface UserContextData {
  credentials: CredentialsType;
  refreshCredentials: (data: RefreshCredentialsDTO) => void;
}

interface UserProviderProps {
  children: ReactNode;
}

const UserContext = createContext<UserContextData>({} as UserContextData);

export const UserProvider = ({children}: UserProviderProps) => {
  //const user = AsyncStorage.getAllKeys;
  const [credentials, setCredentials] = useState({
    userId: '',
    tokenId: '',
    refreshToken: '',
    oneSignalPLayerId: '',
  } as CredentialsType);

  const refreshCredentials = useCallback(
    //VAI RECEBER UM CREDENCIAL, do TIPO "REFRESH...", que vou chamar de RIDICULO.
    async ({credential: updatedCredential}: RefreshCredentialsDTO) => {
      try {
        setCredentials(updatedCredential);
        //AsyncStorage.setItem('user_id', updatedCredential.uid);
      } catch (error) {
        console.log('Sei Nao MANOOOOOOO');
      }
      //return;
    },
    [],
  );

  return (
    <UserContext.Provider value={{credentials, refreshCredentials}}>
      {children}
    </UserContext.Provider>
  );
};

export function useUser(): UserContextData {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within an UserProvider');
  }
  return context;
}
