import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Button,
  Pressable,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {lDrug} from '../../assets/img';
import axios from 'axios';
import {UserConsumer} from '../../context/context';

const Login = ({navigation}) => {
  const optionContext = UserConsumer();
  const {setUsername} = optionContext;
  const {setId} = optionContext
  const {setToken} = optionContext
  const [uname, setUname] = useState('');
  const [pass, setPass] = useState('');
  const baseUrl = 'http://10.0.2.2:8080/auth/api/login';
  const btnSubmit = () => {
    console.log('test', uname);
    axios
      .post(baseUrl, {
        username: uname,
        password: pass,
      })
      .then(res => {
        const success = res.data?.success
        if(success){
          setId(res.data.currUser)
          setUsername(res.data.username);
          setToken(res.data.token)
          navigation.navigate('Home');
          setUname('')
          setPass('')
        }else{
          console.log('Username atau Password salah')
        }
      })
      .catch(err => {
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
            onChangeText={e => setUname(e)}
            value={uname}
          />
          <Text style={styles.labelInput}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Password"
            onChangeText={e => setPass(e)}
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
  },
  container: {
    paddingHorizontal: 30,
    paddingTop: 0,
  },
  logo: {
    width: 200,
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
  },
  input: {
    borderWidth: 2,
    borderRadius: 15,
    marginTop: 20,
    paddingLeft: 20,
    marginBottom: 20,
    borderColor: '#45B3E6',
  },
  conBtnlog: {
    alignItems: 'center',
  },
  conBtn: {
    alignItems: 'center',
    paddingBottom: 25,
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
  conImg:{
    backgroundColor: '#45B3E6',
    width: 150,
    height: 150,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    marginTop: 20,
    alignSelf: 'center'
  }
});

export default Login;
