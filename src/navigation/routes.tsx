import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useStore } from '../contexts/store.context';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

///@ROUTES
import StoreRoutes from './stacks/storeStackNavigation';
import AccountRoutes from './stacks/accountStackNavigation';

///@STYLES
import { PRIMARY, PRIMARYDARKER, WHITE, WHITE_80 } from '../identity';
import { ProductLists } from '../screens/storeMode/views/sectionList/sectionList.screen';
import { HomeScreen } from '../screens/home/home.screen';
import { OrdersScreen } from '../screens/orders/orders.screen';

const Tab = createBottomTabNavigator();

const Routes = () => {
  const { itensCheckout } = useStore();
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="AccountTab"
        screenOptions={{
          //unmountonblur reseta as stacks ao sair da tab
          tabBarHideOnKeyboard: true,
          unmountOnBlur: true,
          headerShown: false,
          tabBarActiveTintColor: PRIMARY,
          tabBarInactiveTintColor: WHITE_80,
          tabBarBadgeStyle: { backgroundColor: PRIMARYDARKER },
          tabBarStyle: {
            backgroundColor: WHITE,
            position: 'relative',
            height: 60,
            justifyContent: 'space-around',
            elevation: 5,
            borderRadius: 5,
          },
        }}>
        <Tab.Screen
          name="Store"
          component={StoreRoutes}
          options={{
            tabBarBadge: itensCheckout.length > 0 ? itensCheckout.reduce(
              (acumulado, atual) => acumulado + atual.qty,
              0,
            ) : 0,
            tabBarLabel: 'Loja',
            tabBarAccessibilityLabel: 'Loja',
            tabBarIcon: ({ color }) => (
              <Icon name="add-shopping-cart" size={40} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Orders"
          component={OrdersScreen}
          options={{
            tabBarLabel: 'Orders',
            tabBarIcon: ({ color }) => (
              <Icon name="source" color={color} size={40} />
            ),
          }}
        />
        <Tab.Screen
          name="AccountTab"
          component={AccountRoutes}
          options={{
            tabBarLabel: 'Conta',
            tabBarAccessibilityLabel: 'Conta',
            tabBarIcon: ({ color }) => (
              <Icon name="account-circle" size={40} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
