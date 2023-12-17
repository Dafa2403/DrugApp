import {View, Image, StyleSheet} from 'react-native';
import React from 'react';
import {lSplash} from '../../assets/img';
import {iCircle} from '../../assets/img';

const SplashScreen = ({navigation}) => {
  React.useEffect(() => {
    setTimeout(() => {
      navigation.replace('Login');
    }, 1000);
  }, []);
  return (
    <View style={styles.container}>
      <Image source={lSplash} style={styles.logo} />
      <Image source={iCircle} style={styles.ilustrasi} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#45B3E6',
  },
  logo: {
    width: 150,
    height: 300,
    resizeMode: 'contain',
  },
  ilustrasi: {
    width: 100,
    height: 90,
    resizeMode: 'contain',
  },
});

export default SplashScreen;
