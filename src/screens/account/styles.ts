import styled from 'styled-components/native';
import { ms } from 'react-native-size-matters';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Colors from '~/whitelabel/Colors';

export const Container = styled.View`
  flex: 1;
  padding: 0 ${ms(16)}px ;
`;
  
  export const List = styled.FlatList`
  flex: 1;
  padding-top: ${ms(4)}px;
`;
  
export const SectionContainer = styled.View`
`;

export const TitleContainer = styled.View`
  padding-top:${ms(16)}px;
`;

export const Title = styled.Text`
  font-family: 'Roboto-Regular';
  font-size: ${ms(14, 1)};
  font-weight: 700;
  color: ${Colors.greyDark1};
`;

export const LineDivider = styled.View`
  height: ${ms(1, 1)};
  background: ${Colors.greyLight};
`;

export const ButtonContainer = styled.View`
  flex: 1;
  height: ${ms(48)}px;
`;

export const Button = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  height: ${ms(48)}px;
`;

export const ItemText = styled.Text`
  flex: 1;
  font-family: 'Roboto-Regular';
  font-size: ${ms(14, 1)};
  color: ${Colors.greyDark1};
`;

export const Icon = styled(MaterialIcons)`
  color: ${Colors.greyDark1};
`;
