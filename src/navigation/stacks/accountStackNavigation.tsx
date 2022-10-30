import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

////@ROTAS
import LogIn from '../../screens/login/login.screen';
import {AccountScreen} from '../../screens/account/account.screen';
import {useUser} from '../../contexts/user.context';
import Register from '../../screens/register/register.screen';

const Stack = createNativeStackNavigator();

const AccountRoutes: React.FC = () => {
  const {credentials} = useUser();

  return (
    <>
      <Stack.Navigator>
        {credentials.userId ? (
          <Stack.Screen
            name="Account"
            component={AccountScreen}
            options={{headerShown: false}}
          />
        ) : (
          <Stack.Screen
            name="Login"
            component={LogIn}
            options={{headerShown: false}}
          />
        )}
        <Stack.Screen
          name="Register"
          component={Register}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </>
  );
};

export default AccountRoutes;
