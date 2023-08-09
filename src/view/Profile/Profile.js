import {Image, Pressable, Text, View, StyleSheet} from 'react-native';
import React, {Component} from 'react';
import {iProfile} from '../../assets/img';

const Profile = ({navigation}) => {
  return (
    <View style={styles.app}>
      <Image source={iProfile} style={styles.imgProfile} />
      <Text style={styles.labelProfile}>Username</Text>

      <Pressable style={styles.btnEdit}>
        <Text style={styles.labelEdit}>Edit Profile</Text>
      </Pressable>
      <Pressable
        style={styles.btnLogout}
        onPress={() => navigation.navigate('Login')}>
        <Text style={styles.labelLogout}>Logout</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  app: {
    alignItems: 'center',
    justifyContent: 'c',
  },
  imgProfile: {
    width: '50%',
    resizeMode: 'contain',
  },
  conImg: {
    height: '30%',
    alignItems: 'center',
  },
  labelProfile: {
    fontSize: 24,
    color: '#000',
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
});

export default Profile;
