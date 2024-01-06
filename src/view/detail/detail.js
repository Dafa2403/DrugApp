import {View, Text, Image, ScrollView, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import {UserConsumer} from '../../context/context';
import axios from '../../API/axios';

const Detail = ({navigation}) => {
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [deskripsi, setDeskripsi] = useState('');
  const [image, setImage] = useState('');
  const optionContext = UserConsumer();
  const {option} = optionContext;
  const arr = [];
  useEffect(() => {
    axios.get(`/drugs/${option}`).then(res => {
      arr.push(...res.data);
      for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        setTitle(element.drugs_name);
        setSubtitle(element.subTitle);
        setDeskripsi(element.deskripsi);
        setImage(element.image);
      }
    });
  }, []);

  return (
    <ScrollView style={styles.app}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
        <View style={styles.line}></View>
        <View style={styles.conImage}>
          <Image source={{ uri: `http://10.0.2.2:8080/upload/drugs/${image}` }} style={styles.image} />
        </View>
        <View style={styles.conDeskripsi}>
          <Text style={styles.deskripsi}>{deskripsi}</Text>
        </View>
      </View>

      {/* <View style={styles.footer}>
        <Text style={styles.labelFooter}>© Copyright 2023</Text>
      </View> */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  app: {
    width: '100%',
    height: '100vh',
    flex: 1,

  },
  content: {
    marginLeft: 10,
    marginTop: 10,

  },
  header: {
    height: 80,
  },
  title: {
    fontSize: 42,
    fontWeight: 'bold',
    color: '#000',
  },
  subtitle: {
    fontSize: 16,
    color: '#bdbdbd',
  },
  line: {
    borderColor: '#bdbdbd',
    borderBottomWidth: 2,
    width: '95%',
    marginBottom: 10,
  },
  conImage: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  conDeskripsi: {
    marginBottom: 20,
  },
  deskripsi: {
    color: '#000',
    textAlign: 'justify',
    fontSize: 18,
  },
  footer: {
    backgroundColor: '#45B3E6',
    padding: 20,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  labelFooter: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Detail;
