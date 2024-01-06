import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Pressable,
  ScrollView,
  Alert,
} from 'react-native';
import { lDrug } from '../../assets/img';
import { UserConsumer } from '../../context/context';
import axios from '../../API/axios';

const Login = ({ navigation }) => {
  const optionContext = UserConsumer();
  const { setUsername, setId, setToken, setImg } = optionContext;
  const [uname, setUname] = useState('');
  const [pass, setPass] = useState('');

  const btnSubmit = () => {
    axios
      .post('/auth/api/login', {
        username: uname,
        password: pass,
      })
      .then((res) => {
        const success = res.data?.success;
        if (success) {
          setId(res.data.currUser);
          setUsername(res.data.username);
          setToken(res.data.token);
          setImg(res.data.imgProfile);
          setUname('');
          setPass('');
          navigation.navigate('Home');
        } else {
          Alert.alert('Login Failed', 'Username atau Password salah');
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <ScrollView style={styles.app}>
      <View style={styles.container}>
        <View style={styles.conImg}>
          <Image source={lDrug} style={styles.logo} />
        </View>
        <SafeAreaView style={styles.form}>
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
            placeholder="Password"
            onChangeText={(e) => setPass(e)}
            value={pass}
            secureTextEntry={true}
          />
          <View style={styles.conBtnlog}>
            <Pressable style={styles.btnLogin} onPress={() => btnSubmit()}>
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
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
  container: {
    paddingHorizontal: 30,
    paddingTop: 20,
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  form: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  labelInput: {
    fontSize: 18,
    color: '#000',
    marginBottom: 5,
  },
  input: {
    borderWidth: 2,
    borderRadius: 15,
    marginTop: 5,
    paddingLeft: 20,
    marginBottom: 15,
    borderColor: '#45B3E6',
    backgroundColor: '#fff',
  },
  conBtnlog: {
    alignItems: 'center',
  },
  conBtn: {
    alignItems: 'center',
    marginTop: 20,
  },
  btnLogin: {
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
    marginTop: 20,
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
    alignItems: 'center',
    marginTop: 15
  },
  labelFooter: {
    color: '#fff',
    fontWeight: 'bold',
  },
  conImg: {
    backgroundColor: '#45B3E6',
    width: 150,
    height: 150,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 75,
    marginTop: 20,
    marginBottom: 20,
  },
});

export default Login;
