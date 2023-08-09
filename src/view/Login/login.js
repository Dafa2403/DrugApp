import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Button,
  Pressable,
} from 'react-native';
import React from 'react';
import {lDrug} from '../../assets/img';

const Login = ({navigation}) => {
  return (
    <View style={styles.app}>
      <View style={styles.container}>
        <Image source={lDrug} style={styles.logo} />
        <SafeAreaView style={styles.form}>
          <Text style={styles.labelInput}>Username</Text>
          <TextInput style={styles.input} placeholder="Username" />
          <Text style={styles.labelInput}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
          />
          <View style={styles.conBtn}>
            <Pressable
              style={styles.btnLogin}
              onPress={() => navigation.navigate('Home')}>
              <Text style={styles.labelLogin}>Login</Text>
            </Pressable>
          </View>
        </SafeAreaView>
        <View style={styles.conBtn}>
          <Pressable
            style={styles.btnSigUp}
            onPress={() => navigation.navigate('Signup')}>
            <Text style={styles.labelSignUp}>Sign Up</Text>
          </Pressable>
        </View>
      </View>

      <View style={styles.footer}>
        <Text style={styles.labelFooter}>© Copyright 2023</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  app: {
    flex: 1,
  },
  container: {
    padding: 30,
  },
  logo: {
    width: 300,
    height: 150,
    marginRight: '10%',
    marginBottom: 20,
    resizeMode: 'contain',
  },
  form: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  labelInput: {
    fontSize: 18,
    color: '#000',
  },
  input: {
    borderWidth: 2,
    borderRadius: 15,
    marginTop: 20,
    paddingLeft: 20,
    marginBottom: 20,
    borderColor: '#45B3E6',
  },
  conBtn: {
    alignItems: 'center',
  },
  btnLogin: {
    marginTop: 40,
    borderRadius: 15,
    backgroundColor: '#45B3E6',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
  },
  labelLogin: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  btnSigUp: {
    marginTop: 40,
    borderRadius: 15,
    backgroundColor: '#40B246',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    width: '70%',
  },
  labelSignUp: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  footer: {
    backgroundColor: '#45B3E6',
    padding: 20,
    width: '100%',
    justifyContent: 'center',
  },
  labelFooter: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Login;
