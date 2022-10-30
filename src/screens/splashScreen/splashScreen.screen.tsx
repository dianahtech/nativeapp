import React, {useState, useEffect} from 'react';
import {ActivityIndicator, View, Image} from 'react-native';
import {Splashstyles} from './splashScreen.style';

//import AsyncStorage from '@react-native-community/async-storage';

const SplashScreen = ({navigation}) => {
  //State for ActivityIndicator animation
  const [animating, setAnimating] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAnimating(false);

      navigation.navigate('Home');
      //Check if user_id is set or not
      //If not then send for Authentication
      //else send to Home Screen

      //AsyncStorage.getItem('user_id').then(value =>
      //  navigation.replace(value === null ? 'Auth' : 'DrawerNavigationRoutes'),
      // );
    }, 5000);
  }, []);

  return (
    <View style={Splashstyles.container}>
      <Image
        source={require('../../assets/logos/perfil.png')}
        style={Splashstyles.logo}
      />
      <ActivityIndicator
        animating={animating}
        color="#FFFFFF"
        size="large"
        style={Splashstyles.activityIndicator}
      />
    </View>
  );
};

export default SplashScreen;
