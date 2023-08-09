import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Pressable,
  ImageBackground,
} from 'react-native';
import React from 'react';
import {lBg} from '../../assets/img';

const Signup = ({navigation}) => {
  return (
    <View style={styles.app}>
      {/* <ImageBackground style={styles.bgImage} source={lBg}></ImageBackground> */}
      <View style={styles.container}>
        <SafeAreaView style={styles.form}>
          <Text style={styles.labelInput}>Email</Text>
          <TextInput style={styles.input} placeholder="Email" />
          <Text style={styles.labelInput}>Nama</Text>
          <TextInput style={styles.input} placeholder="Nama" />
          <Text style={styles.labelInput}>Username</Text>
          <TextInput style={styles.input} placeholder="Username" />
          <Text style={styles.labelInput}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
          />
          <View style={styles.conBtn}>
            <Pressable style={styles.btnSignup}>
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
    color: '#fff',
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
