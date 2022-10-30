import React, {useCallback} from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {useNavigation} from '@react-navigation/native';

import {Text, TouchableOpacity, View} from 'react-native';
import {DeliveryModeStyle} from './styles';

import Button from '../../../components/Button';
import {PRIMARYDARKER} from '../../../../identity';

const PaymentMode = () => {
  const navigation = useNavigation();

  const handleNavigateToFinishPage = useCallback(async () => {
    return navigation.navigate('FinishPage');
  }, []);

  /*   const handleNavigateToCardModePage = useCallback(() => {
    navigate('SetupOrderPageCardMode');
  }, [navigate]);

  const handleNavigateToMoneyPage = useCallback(() => {
    if (
      (cart.information.delivery &&
        !store.config.deliveryInfo?.acceptCashPayment) ||
      (!cart.information.delivery &&
        !store.config.drivethruInfo?.acceptCashPayment)
    ) {
      Alert.alert('Pagamento em dinheiro não disponível!');
      return;
    }
    navigate('SetupOrderPageMoney');
  }, [
    cart.information.delivery,
    navigate,
    store.config.deliveryInfo,
    store.config.drivethruInfo,
  ]); */

  return (
    <>
      <View style={DeliveryModeStyle.container}>
        <Text style={DeliveryModeStyle.sectionTitle}>
          Qual será o modo de pagamento?
        </Text>

        <TouchableOpacity
          onPress={handleNavigateToFinishPage}
          style={DeliveryModeStyle.sectionCard}
          /*  unavailable={
            cart.information.estimatedValue < deliveryMinimumValue ||
            !store.config.deliveryInfo
          }
          onPress={handleNavigateToCardModePage}*/
        >
          <View>
            <Text style={DeliveryModeStyle.selectionTitle}>Cartão</Text>
            <Text style={DeliveryModeStyle.selectionSubtitle}>
              Vou de crédito ou débito dessa vez.
            </Text>
          </View>
          <Icon name="keyboard-arrow-right" size={25} color={PRIMARYDARKER} />
        </TouchableOpacity>

        <TouchableOpacity
          style={DeliveryModeStyle.sectionCard}
          /* unavailable={!store.config.drivethruInfo}
          onPress={handleNavigateToMoneyPage} */
        >
          <View>
            <Text style={DeliveryModeStyle.selectionTitle}>Dinheiro</Text>
            <Text style={DeliveryModeStyle.selectionSubtitle}>
              Vou definir meu troco
            </Text>
          </View>
          <Icon name="keyboard-arrow-right" size={25} color={PRIMARYDARKER} />
        </TouchableOpacity>

        <Button
          type="button-block"
          text="Voltar"
          onPress={() => navigation.goBack()}
        />
      </View>
    </>
  );
};

export default PaymentMode;
