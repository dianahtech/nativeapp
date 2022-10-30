import React, {useCallback} from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
//import {useNavigation} from '@react-navigation/native';

import {Text, TouchableOpacity, View} from 'react-native';
import {DeliveryModeStyle} from './styles';
import {useNavigation} from '@react-navigation/native';
import Button from '../../../components/Button';
import {PRIMARYDARKER} from '../../../../identity';

const DeliveryMode = () => {
  const navigation = useNavigation();
  const handleNavigateToPaymentMode = useCallback(async () => {
    return navigation.navigate('PaymentMode');
  }, []);

  /* const handleNavigateToDeliveryPage = useCallback(async () => {
    if (cart.information.estimatedValue < deliveryMinimumValue) {
      Alert.alert(
        `O valor mínimo do carrinho para a realização do delivery é de ${deliveryMinimumValue.toLocaleString(
          'pt-BR',
          {
            style: 'currency',
            currency: 'BRL',
          }
        )}.`
      );
      return;
    }

    if (!store.config.deliveryInfo) {
      Alert.alert('Delivery não disponível!');
      return;
    }

    if (
      store.id !== '-MWU_RVtaT1Pp3jc__Fk' &&
      !(await areThereAvailableTimes())
    ) {
      Alert.alert(
        'Nenhum horário disponível! Por favor, tente finalizar amanhã.',
        () => {
          goBack();
        }
      );
      return;
    }

    dispatch(
      updateCart({
        ...cart,
        storeId: store.id,
        information: { ...cart.information, delivery: true },
      })
    );
    if (store.id === '-MWU_RVtaT1Pp3jc__Fk') {
      // TODO: chamar api de checar o pickup point mais próximo, salvar e depois navegar
    }
    navigate('SetupOderPageDelivery');
  }, [
    cart,
    deliveryMinimumValue,
    store.config.deliveryInfo,
    store.id,
    areThereAvailableTimes,
    dispatch,
    navigate,
    goBack,
  ]); */

  /*   const handleNavigateToDriveThruPage = useCallback(async () => {
    if (!store.config.drivethruInfo) {
      Alert.alert('Drive-thru não disponível!');
      return;
    }

    if (
      store.id !== '-MWU_RVtaT1Pp3jc__Fk' &&
      !(await areThereAvailableTimes())
    ) {
      Alert.alert(
        'Nenhum horário disponível! Por favor, tente finalizar amanhã.',
        () => {
          goBack();
        }
      );
      return;
    }

    dispatch(
      updateCart({
        ...cart,
        storeId: store.id,
        information: { ...cart.information, delivery: false },
      })
    );
    if (store.id === '-MWU_RVtaT1Pp3jc__Fk') {
      navigate('SetupOderPageSelectPickupPoint');
    } else {
      navigate('SetupOderPageDriveThru');
    }
  }, [
    store.config.drivethruInfo,
    store.id,
    areThereAvailableTimes,
    dispatch,
    cart,
    goBack,
    navigate,
  ]); */

  return (
    <>
      <View style={DeliveryModeStyle.container}>
        <Text style={DeliveryModeStyle.sectionTitle}>
          Qual será o modo de entrega?
        </Text>

        <TouchableOpacity
          style={DeliveryModeStyle.sectionCard}
          onPress={handleNavigateToPaymentMode}
          /*  unavailable={
            cart.information.estimatedValue < deliveryMinimumValue ||
            !store.config.deliveryInfo
            onPress={handleNavigateToPaymentMode}*/
        >
          <View>
            <Text style={DeliveryModeStyle.selectionTitle}>Delivery</Text>
            <Text style={DeliveryModeStyle.selectionSubtitle}>
              Aguardar o entregador em casa
            </Text>
          </View>
          <Icon name="keyboard-arrow-right" size={25} color={PRIMARYDARKER} />
        </TouchableOpacity>

        <TouchableOpacity
          style={DeliveryModeStyle.sectionCard}
          /* unavailable={!store.config.drivethruInfo}
          onPress={handleNavigateToDriveThruPage} */
        >
          <View>
            <Text style={DeliveryModeStyle.selectionTitle}>Drive-Thru</Text>
            <Text style={DeliveryModeStyle.selectionSubtitle}>
              Ir buscar na loja
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

export default DeliveryMode;
