import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Pressable,
  ImageBackground,
} from 'react-native';
import React, {useState} from 'react';
import {lBg} from '../../assets/img';
import axios from 'axios';

const Signup = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [nama, setNama] = useState('');
  const [uname, setUname] = useState('');
  const [pass, setPass] = useState('');

  const baseUrl = 'http://10.0.2.2:8080/auth/api/register';
  const btnSubmit = () => {
    console.log('test', uname);
    console.log('test', nama);
    console.log('test', email);
    console.log('test', pass);

    axios
      .post(baseUrl, {
        name: nama,
        username: uname,
        email: email,
        password: pass,
      })
      .then(res => {
        console.log(res.data);
        navigation.navigate('Login');
      })
      .catch(err => {
        console.log(err);
      });
  };
  return (
    <View style={styles.app}>
      {/* <ImageBackground style={styles.bgImage} source={lBg}></ImageBackground> */}
      <View style={styles.container}>
        <SafeAreaView style={styles.form}>
          <Text style={styles.labelInput}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            onChangeText={e => setEmail(e)}
            value={email}
          />
          <Text style={styles.labelInput}>Nama</Text>
          <TextInput
            style={styles.input}
            placeholder="Nama"
            onChange={e => setNama(e)}
            value={nama}
          />
          <Text style={styles.labelInput}>Username</Text>
          <TextInput
            style={styles.input}
            placeholder="Username"
            onChange={e => setUname(e)}
            value={uname}
          />
          <Text style={styles.labelInput}>Password</Text>
          <TextInput
            style={styles.input}
            onChangeText={e => setPass(e)}
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
    height: '100%',
    backgroundColor: '#ffff',
    // justifyContent: 'center',
  },
  //   bgImage: {
  //     width: '50%',
  //     height: '50%',
  //     left: 0,
  //     right: 0,
  //     margin: 'auto',
  //     marginRight: '10%',
  //     marginBottom: 20,
  //     resizeMode: 'contain',
  //     justifyContent: 'center',
  //     position: 'absolute',
  //   },
  container: {
    padding: 30,
  },
  form: {
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
    width: 300,
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
    width: 300,
    height: 40,
  },
  btnSignup: {
    width: 300,
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
