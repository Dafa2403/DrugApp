import {Image, Pressable, Text, View, StyleSheet} from 'react-native';
import React, {Component} from 'react';
import {iProfile} from '../../assets/img';
import {UserConsumer} from '../../context/context';
import axios from '../../API/axios';

const Profile = ({ navigation }) => {
  const optionContext = UserConsumer();
  const { username, token, id, img } = optionContext;

  const btnLogout = () => {
    axios
      .delete('/auth/api/logout', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: {
          id_user: id,
        },
      })
      .then((res) => {
        console.log('Logout success:', res.data);
        navigation.navigate('Login');
      })
      .catch((err) => {
        console.error('Logout error:', err);
      });
  };

  return (
    <View style={styles.app}>
      <View style={styles.conProfile}>
        <Pressable style={styles.conImg}>
          <Image
            source={{ uri: `http://10.0.2.2:8080/upload/profile/1704506787279-mercy.jpg` }}
            style={styles.imgProfile}
          />
        </Pressable>
        <Text style={styles.labelProfile}>{username}</Text>
      {/* <Pressable style={styles.btnEdit}>
        <Text style={styles.labelEdit}>Edit Profile</Text>
      </Pressable> */}
      <Pressable style={styles.btnLogout} onPress={btnLogout}>
        <Text style={styles.labelLogout}>Logout</Text>
      </Pressable>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  app: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
  },
  imgProfile: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 75,
  },
  conImg: {
    height: 150,
    width: 150,
    borderRadius: 75,
    overflow: 'hidden',
    marginBottom: 20,
  },
  labelProfile: {
    fontSize: 24,
    color: '#000',
    textAlign: 'center',
    marginTop: 15,
    marginBottom: 20,
  },
  btnEdit: {
    backgroundColor: '#45B3E6',
    width: '70%',
    borderRadius: 15,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  btnLogout: {
    backgroundColor: '#FF0000',
    width: '70%',
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
  conProfile: {
    width: '80%',
    height: '70%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 15,
    backgroundColor: '#fff',
    padding: 20,
  },
});

export default Profile;
