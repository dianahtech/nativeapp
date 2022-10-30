import {useNavigation} from '@react-navigation/native';
import * as React from 'react';
import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {PRIMARY} from '../../../../../../../../identity';
import {Sacola} from '../../../../../../components/bag/bag.component';

export const Background: React.FC = () => {
  const imgSrc = require('../../../../../../assets/images/bgimg.jpg');
  const navigation = useNavigation();

  return (
    <View style={styles.bgContainer}>
      <ImageBackground
        resizeMode="cover"
        source={imgSrc}
        style={styles.imagemFundo}>
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon
              style={styles.imagemSeta}
              name="arrow-back"
              size={30}
              color={PRIMARY}
            />
          </TouchableOpacity>
          <View style={styles.containerSacola}>
            <Sacola />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  bgContainer: {
    // 6/10 da view anterior
    flex: 5,
  },
  imagemFundo: {
    //  100% dos 60% da view anterior
    width: Dimensions.get('window').width,
    height: '100%',
  },
  headerContainer: {
    //icone e botao em row
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imagemSeta: {
    width: 24,
    height: 24,
    marginTop: 36,
    marginLeft: 24,
  },
  containerSacola: {
    padding: 18,
  },
});
