import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Pressable,
  ImageBackground,
} from 'react-native';
import { lBg } from '../../assets/img';
import axios from '../../API/axios';

const Signup = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [nama, setNama] = useState('');
  const [uname, setUname] = useState('');
  const [pass, setPass] = useState('');

  const btnSubmit = () => {
    axios
      .post('/auth/api/register', {
        name: nama,
        username: uname,
        email: email,
        password: pass,
      })
      .then((res) => {
        console.log(res.data);
        navigation.navigate('Login');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <View style={styles.app}>
      <View style={styles.container}>
        <SafeAreaView style={styles.form}>
          <Text style={styles.labelInput}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            onChangeText={(e) => setEmail(e)}
            value={email}
          />
          <Text style={styles.labelInput}>Nama</Text>
          <TextInput
            style={styles.input}
            placeholder="Nama"
            onChangeText={(e) => setNama(e)}
            value={nama}
          />
          <Text style={styles.labelInput}>Username</Text>
          <TextInput
            style={styles.input}
            placeholder="Username"
            onChangeText={(e) => setUname(e)}
            value={uname}
          />
          <Text style={styles.labelInput}>Password</Text>
          <TextInput
            style={styles.input}
            onChangeText={(e) => setPass(e)}
            value={pass}
            placeholder="Password"
            secureTextEntry={true}
          />
          <View style={styles.conBtn}>
            <Pressable style={styles.btnSignup} onPress={btnSubmit}>
              <Text style={styles.labelSignup}>Signup</Text>
            </Pressable>
          </View>
        </SafeAreaView>
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
    backgroundColor: '#ffffff',
  },
  container: {
    flex: 1,
    padding: 30,
    justifyContent: 'center',
  },
  form: {
    flex: 1,
    justifyContent: 'center',
  },
  labelInput: {
    fontSize: 18,
    color: '#000',
    fontWeight: '400',
    marginTop: 10,
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#45B3E6',
    borderRadius: 10,
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 10,
    color: '#000',
  },
  conBtn: {
    alignItems: 'center',
  },
  btnSignup: {
    width: '100%',
    height: 40,
    backgroundColor: '#40B246',
    borderRadius: 10,
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  labelSignup: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  footer: {
    backgroundColor: '#45B3E6',
    padding: 20,
    width: '100%',
    justifyContent: 'center',
    bottom: 0,
    position: 'absolute',
  },
  labelFooter: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Signup;
