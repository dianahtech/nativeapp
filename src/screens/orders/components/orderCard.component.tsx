import {Text, View} from 'react-native';
import {
  BLACK,
  PRIMARYDARKER,
  WHITE,
  WHITE_30,
  WHITE_80,
} from '../../../identity';
import {StyleSheet} from 'react-native';

interface GenericCartProps {
  id: string;
  store_id: string;
  status: string;
  products: string;
  date: string;
  final_value: string;
}

const OrderCard: React.FC<GenericCartProps> = ({
  store_id,
  products,
  status,
  id,
  date,
  final_value,
}) => {
  return (
    <View style={orderCardStyle.cardContainer}>
      <View style={orderCardStyle.cardHeaderContainer}>
        <Text>{store_id || 'CARDHEADER'}</Text>
        <Text>{status}</Text>
      </View>

      <View style={orderCardStyle.lineDivider} />
      <Text style={orderCardStyle.cardCodeText}>{id}</Text>

      <View style={orderCardStyle.cartContentContainer}>
        <View style={orderCardStyle.products}>
          <Text> {products || 'ESTE È O CART CONTENT'}</Text>
        </View>
        <View style={orderCardStyle.prices}>
          <Text> {'R$: 25,00'}</Text>
        </View>
      </View>

      <View style={orderCardStyle.lineDivider} />

      <View style={orderCardStyle.cardBottomContainer}>
        <Text>{date}</Text>
        <Text>{final_value}</Text>
      </View>
    </View>
  );
};

export default OrderCard;

const orderCardStyle = StyleSheet.create({
  lineDivider: {
    height: 1,
    backgroundColor: BLACK,
    opacity: 0.2,
  },
  cardContainer: {
    borderRadius: 10,
    boxShadow: 20,
    shadowColor: PRIMARYDARKER,
    elevation: 10,
    margin: 5,
    width: 300,
    backgroundColor: WHITE,
    padding: 5,
  },
  cardHeaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: 60,
    padding: 10,
  },
  cardCodeText: {
    color: WHITE_80,
    fontFamily: 'Roboto-Regular',
    fontSize: 10,
    textAlign: 'center',
    padding: 16,
  },
  cartContentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  },
  cardBottomContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: 50,
    padding: 0,
  },
  products: {flex: 3, padding: 5},
  prices: {flex: 1},
});
