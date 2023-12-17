import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  Pressable,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {UserConsumer} from '../../context/context';
import axios from '../../API/axios';

const Directory = ({navigation}) => {
  const optionContext = UserConsumer();
  const {option, setOption} = optionContext;
  console.log('option', option);
  const [drugs, setDrugs] = useState([]);
  const [id, setId] = useState('0');
  const arr = [];

  useEffect(() => {
    axios.get('/drugs').then(res => {
      arr.push(...res.data);

      for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        setDrugs(oldArray => [...oldArray, element]);
      }
      console.log('tetst ', drugs);
    });
  }, []);
  return (
    <View style={styles.app}>
      <View style={styles.header}>
        <TextInput placeholder="search" style={styles.input} />
      </View>
      <ScrollView>
        {drugs.map((item, index) => (
          <Pressable
            key={index}
            onPress={() => {
              setOption(item.id_drugs);
              // console.log(item.id_drugs);
              navigation.navigate('Detail');
            }}>
            <View style={styles.item}>
              <Text style={styles.fontItem}>{item.drugs_name}</Text>
            </View>
            <View
              style={{
                borderBottomColor: 'black',
                borderBottomWidth: StyleSheet.hairlineWidth,
              }}
            />
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  app: {
    // flex: 1,
  },
  header: {
    backgroundColor: '#40B246',
    height: '20vh',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    backgroundColor: '#fff',
    width: '80%',
    borderRadius: 15,
    padding: 10,
  },
  item: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    paddingLeft: 20,
  },
  fontItem: {
    color: '#000',
  },
});
export default Directory;
