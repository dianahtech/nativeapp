import { Text, View } from 'react-native';
import {
  BLACK,
  FONT_FAMILY_REGULAR,
  FONT_SIZE_X_SMALL,
  PRIMARYDARKER,
  WHITE,

  WHITE_80,
} from '../../../identity';
import { StyleSheet } from 'react-native';
import { userOrder } from '../../../@types';


const OrderCard: React.FC<userOrder> = ({
  store_user_id,
  items,
  status,
  id,
  created_at,
  final_value,
}) => {
  return (
    <View style={orderCardStyle.cardContainer}>
      <View style={orderCardStyle.cardHeaderContainer}>
        <Text>{store_user_id || 'CARDHEADER'}</Text>
        <Text>{status || 'Status'}</Text>
      </View>

      <View style={orderCardStyle.lineDivider} />
      <Text style={orderCardStyle.cardCodeText}>{id ? id : 123}</Text>

      <View style={orderCardStyle.cartContentContainer}>
        <View style={orderCardStyle.products}>

          <Text>ESTE È O CART CONTENT'</Text>


        </View>
        <View style={orderCardStyle.prices}>
          <Text> {'R$: 25,00'}</Text>
        </View>
      </View>

      <View style={orderCardStyle.lineDivider} />

      <View style={orderCardStyle.cardBottomContainer}>
        <Text>{created_at}</Text>
        <Text>{final_value}</Text>
      </View>
    </View >
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
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: FONT_SIZE_X_SMALL,
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
  products: { flex: 3, padding: 5 },
  prices: { flex: 1 },
});
