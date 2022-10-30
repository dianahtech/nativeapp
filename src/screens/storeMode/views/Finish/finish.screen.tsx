import React, {useCallback, useContext} from 'react';
import {useNavigation} from '@react-navigation/native';

import {ScrollView, Text, TouchableOpacity, View} from 'react-native';

import Button from '../../../components/Button';
import {FinishOrderStyle} from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {DataContext} from '../../../../contexts';

import {formatCash} from '../../../../services/transformers/formatCash';
import api from '../../../../services/axios';
import {useUser} from '../../../../contexts/user.context';
const FinishPage: React.FC = () => {
  const navigation = useNavigation();
  const {sendOrder} = useContext(DataContext);
  const {credentials} = useUser();

  const estimatedValue = 16;

  const sendFinalOrder = useCallback(() => {
    try {
      api.post('/ordered_item/', {
        final_value: '00,00',
        date: '00/00/00000',
        status: 'Enviado pelo app',
        native_user_id: credentials.userId,
        stored_id: '1',
      });
      sendOrder();
    } catch (error) {
    } finally {
      navigation.navigate('Orders');
    }
  }, []);

  /*   const estimatedCartPrice = createSelector(
    (data: CartType) => data.ITEMS,
    (items) =>
      reduce(
        items,
        function sumApproximateValue(sum, item) {
          return sum + item.value;
        },
        0
      )
  );


  const estimatedValue = estimatedCartPrice(cart);
  */
  /*
  const renderTaxs = useMemo(() => {
    if (cart.information.delivery && cart.information.payment?.due) {
      return (
        <>
          <InformationContainer>
            <InformationContainerText>
              Taxas de Entrega
            </InformationContainerText>
          </InformationContainer>
          <View>
            <ServiceChargeText>
              {cart.information.payment?.due.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </ServiceChargeText>
          </View>
        </>
      );
    }
    if (!cart.information.delivery && store.config.drivethruInfo?.storeFee) {
      return (
        <>
          <InformationContainer>
            <InformationContainerText>
              Taxas de Serviço da Loja
            </InformationContainerText>
          </InformationContainer>
          <View>
            <ServiceChargeText>
              {store.config.drivethruInfo.storeFee.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </ServiceChargeText>
          </View>
        </>
      );
    }
    return null;
  }, [cart.information.delivery, cart.information.payment, store.config]);

  const renderServiceCharge = useMemo(() => {
    if (cart.information.delivery && store.config.deliveryInfo?.pglvFee) {
      return (
        <>
          <InformationContainer>
            <InformationContainerText>
              Taxas de Serviço
            </InformationContainerText>
          </InformationContainer>
          <View>
            <ServiceChargeText>
              {store.config.deliveryInfo.pglvFee.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </ServiceChargeText>
          </View>
        </>
      );
    }
    if (!cart.information.delivery && store.config.drivethruInfo?.pglvFee) {
      return (
        <>
          <InformationContainer>
            <InformationContainerText>
              Taxas de Serviço
            </InformationContainerText>
          </InformationContainer>
          <View>
            <ServiceChargeText>
              {store.config.drivethruInfo.pglvFee.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </ServiceChargeText>
          </View>
        </>
      );
    }
    return null;
  }, [cart.information.delivery, store.config]);

  const renderDeliveryMode = useMemo(() => {
     if (cart.information.delivery) {
      return <SubtitleText>Entrega</SubtitleText>;
    }
    return <SubtitleText>Retirada</SubtitleText>;
  }, [cart.information.delivery]);

  const renderDeliveryModeOptions = useMemo(() => {
    if (cart.information.delivery && cart.information.address) {
      return (
        <InformationContainer>
          <InformationContainerText>
            Entregar em {cart.information.address.alias}
          </InformationContainerText>
          <InformationContainerText>
            {`${
              cart.information.address.street || 'logradouro indisponível'
            }, `}
            {`${cart.information.address.number || 'numero indisponível'}, `}
            {`${cart.information.address.complement || ''} - `}
            {cart.information.address.borough.name},{' '}
            {cart.information.address.city} - {cart.information.address.state},{' '}
            {cart.information.address.cep}, {cart.information.address.reference}
            .
          </InformationContainerText>
          <InformationContainerText>
            Agendada para {format(cart.information.scheduledTo || 0, 'HH:mm')}
          </InformationContainerText>
        </InformationContainer>
      );
    }
    return (
      <InformationContainer>
        <InformationContainerText>
          Retirar em{' '}
          {store.id === '-MWU_RVtaT1Pp3jc__Fk'
            ? cart.pickup?.fantasyName
            : store.fantasyName}
        </InformationContainerText>
        <InformationContainerText>
          {store.id === '-MWU_RVtaT1Pp3jc__Fk'
            ? cart.pickup?.address
            : store.address}
        </InformationContainerText>
        <InformationContainerText>
          Agendada para {format(cart.information.scheduledTo || 0, 'HH:mm')}
        </InformationContainerText>
      </InformationContainer>
    );
  }, [
    cart.information.address,
    cart.information.delivery,
    cart.information.scheduledTo,
    cart.pickup,
    store.address,
    store.fantasyName,
    store.id,
  ]);

  const renderPaymentMode = useMemo(() => {
    if (
      cart.information.payment?.card &&
      cart.information.payment?.card.company
    ) {
      return (
        <>
          <InformationContainerText>
            Pagamento na maquineta
          </InformationContainerText>
          <InformationContainerText>
            {`Cartão ${cart.information.payment.card.company} - ${cart.information.payment.card.operation}`}
          </InformationContainerText>
        </>
      );
    }
    if (cart.information.payment?.channel === 'online') {
      return (
        <>
          <InformationContainerText>Pagamento Online</InformationContainerText>
          <InformationContainerText>
            Cartão com final {cart.card?.last4}
          </InformationContainerText>
        </>
      );
    }
    if (
      cart.information.payment?.money?.change &&
      cart.information.payment?.money?.change > 0
    ) {
      return (
        <>
          <InformationContainerText>
            Pagamento em Dinheiro
          </InformationContainerText>
          <InformationContainerText>
            Troco para{' '}
            {Number(cart.information.payment?.money?.change).toLocaleString(
              'pt-BR',
              {
                style: 'currency',
                currency: 'BRL',
                maximumFractionDigits: 2,
              },
            )}
          </InformationContainerText>
        </>
      );
    }
    return (
      <>
        <InformationContainerText>
          Pagamento em Dinheiro
        </InformationContainerText>
        <InformationContainerText>
          Não preciso de troco.
        </InformationContainerText>
      </>
    );
  }, [cart.card, cart.information.payment]);

  const renderFinishButton = useMemo(() => {
    if (loading) {
      return <ActivityIndicator />;
    }
    return (
      <Button
        type="button"
        text="FINALIZAR"
        disabled={loading}
        onPress={handleFinish}
      />
    );
  }, [handleFinish, loading]); */

  return (
    <ScrollView style={FinishOrderStyle.scrollContainer}>
      <View style={FinishOrderStyle.titleContainer}>
        <Text style={FinishOrderStyle.titleText}>Finalizar Pedido</Text>
      </View>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('ListaProdutos');
        }}
        style={FinishOrderStyle.buttonClose}>
        <Icon name="close" size={25} color={'black'} />
      </TouchableOpacity>

      <View style={FinishOrderStyle.sectionContainer}>
        <View style={FinishOrderStyle.sectionTitleContainer}>
          <Text style={FinishOrderStyle.subtitleText}>Entrega/Retirada</Text>
          <Button
            disabled={true}
            type="outline"
            text="Alterar"
            onPress={() => navigation.navigate('')}
          />
        </View>
        <Text>Pagamento no cartão</Text>
        <Text>logica pra mostrar a opcao do pedido.</Text>
      </View>

      <View style={FinishOrderStyle.sectionContainer}>
        <View style={FinishOrderStyle.sectionTitleContainer}>
          <Text style={FinishOrderStyle.subtitleText}>Pagamento</Text>
          <Button
            disabled={true}
            type="outline"
            text="Alterar"
            onPress={() => navigation.navigate('')}
          />

          {/*  <Button
            type="clear"
            text="Alterar"
            disabled={loading}
            onPress={() => navigation.navigate('SetupOrderPageDeliveryMode')}
          /> */}
        </View>
        <Text>Pagamento no cartão</Text>
        <Text>logica pra mostrar a opcao do pedido.</Text>
      </View>

      <View style={FinishOrderStyle.sectionContainer}>
        <View style={FinishOrderStyle.sectionTitleContainer}>
          <Text style={FinishOrderStyle.informationContainerText}>
            Valor Estimado
          </Text>
          <Text style={FinishOrderStyle.informationContainerText}>
            {estimatedValue.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
              maximumFractionDigits: 2,
            })}
          </Text>
        </View>
        <View style={FinishOrderStyle.sectionTitleContainer}>
          <Text style={FinishOrderStyle.informationContainerText}>
            Taxa de entrega
          </Text>
          <Text style={FinishOrderStyle.informationContainerText}>
            {estimatedValue.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
              maximumFractionDigits: 2,
            })}
          </Text>
        </View>
      </View>

      <View style={FinishOrderStyle.sectionTitleContainer}>
        <Text style={FinishOrderStyle.informationContainerText}>
          <Text style={FinishOrderStyle.subtitleText}>Total das Compras</Text>
        </Text>

        <View>
          <Text style={FinishOrderStyle.totalBuyText}>
            {formatCash(estimatedValue + estimatedValue)}
          </Text>
        </View>
      </View>

      <View style={FinishOrderStyle.sectionSpanFinishContainer}>
        <View style={FinishOrderStyle.spanContainer}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Webview', {
                title: 'Termos e Condições',
                url: 'https://pegueleve.com/termos-e-condicoes/',
              });
            }}>
            <Text style={FinishOrderStyle.spanTermText}>
              Ao finalizar o pedido você confirma que concorda com os Termos de
              Serviço e com a Política de Privacidade
            </Text>
          </TouchableOpacity>
        </View>

        <View style={FinishOrderStyle.spanContainer}>
          <Button disabled={true} text="Finalizar" onPress={sendFinalOrder} />
        </View>

        {/*     {renderFinishButton} */}
      </View>
    </ScrollView>
  );
};

export default FinishPage;
