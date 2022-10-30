import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {GameScreen} from '../../screens/game/game.screen';
import Appy from '../../screens/game/src/App';

////@ROTAS
const Stack = createNativeStackNavigator();

const GameRoutes: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="GameScreen">
      <Stack.Screen
        name="GameScreen"
        component={GameScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Appy"
        component={Appy}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default GameRoutes;
