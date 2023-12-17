import {Image, Pressable, Text, View, StyleSheet} from 'react-native';
import React, {Component} from 'react';
import {iProfile} from '../../assets/img';
import {UserConsumer} from '../../context/context';
import axios from '../../API/axios';

const Profile = ({navigation}) => {
  const optionContext = UserConsumer();
  const {username} = optionContext;
  const {id} = optionContext
  const {token} = optionContext
  console.log("🚀 ~ file: Profile.js:10 ~ Profile ~ id:", id)

  const btnLogout = () =>{
    axios.delete('/auth/api/logout',
      {
        headers:{
          Authorization: `Bearer ${token}`
        },
        data:{
          id_user: id
        }
      }
    ).then((res) => {
      console.log("🚀 ~ file: Profile.js:25 ~ ).then ~ res:", res.data)
      navigation.navigate('Login')
    }).catch(err => {
      console.log("🚀 ~ file: Profile.js:28 ~ ).then ~ err:", err)
    })
  }
  return (
    <View style={styles.app}>
        <Image source={iProfile} style={styles.imgProfile} />
        <Text style={styles.labelProfile}>{username}</Text>

      {/* <Pressable style={styles.btnEdit}>
        <Text style={styles.labelEdit}>Edit Profile</Text>
      </Pressable> */}
      <Pressable
        style={styles.btnLogout}
        onPress={() => btnLogout()}>
        <Text style={styles.labelLogout}>Logout</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  app: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  imgProfile: {
    width: '50%',
    resizeMode: 'contain',
    marginBottom: -100
  },
  conImg: {
    height: '30%',
    alignItems: 'center',
  },
  labelProfile: {
    fontSize: 24,
    color: '#000',
    marginBottom: 15
  },
  btnEdit: {
    backgroundColor: '#45B3E6',
    width: '35%',
    borderRadius: 15,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnLogout: {
    backgroundColor: '#FF0000',
    width: '50%',
    borderRadius: 15,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  labelLogout: {
    color: '#fff',
  },
  labelEdit: {
    color: '#fff',
  },
  conProfile:{
    width: '80%',
    height: '70%',
  }
});

export default Profile;
