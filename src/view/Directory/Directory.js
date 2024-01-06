import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  Pressable,
  Image,
  Dimensions,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { UserConsumer } from '../../context/context';
import axios from '../../API/axios';

const Directory = ({ navigation }) => {
  const optionContext = UserConsumer();
  const { option, setOption } = optionContext;
  const [drugs, setDrugs] = useState([]);
  const [search, setSearch] = useState('');
  const arr = [];

  useEffect(() => {
    axios.get('/drugs').then((res) => {
      arr.push(...res.data);

      for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        setDrugs((oldArray) => [...oldArray, element]);
      }
    });
  }, []);

  const filteredDrugs = drugs.filter((item) =>
    item.drugs_name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.app}>
      <View style={styles.header}>
        <TextInput
          placeholder="Search"
          style={styles.input}
          onChangeText={(text) => setSearch(text)}
        />
      </View>
      <ScrollView>
        <View style={styles.container}>
          {filteredDrugs.map((item, index) => (
            <Pressable
              key={index}
              onPress={() => {
                setOption(item.id_drugs);
                navigation.navigate('Detail');
              }}
              style={styles.cardContainer}
            >
              <View style={styles.card}>
                <Image
                  source={{ uri: `http://10.0.2.2:8080/upload/drugs/${item?.image}` }}
                  style={styles.image}
                />
                <Text style={styles.name}>{item?.drugs_name}</Text>
              </View>
            </Pressable>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  app: {
    flex: 1,
    paddingBottom: 25,
    backgroundColor: '#f4f4f4',
  },
  header: {
    backgroundColor: '#40B246',
    height: Dimensions.get('window').height * 0.1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    backgroundColor: '#fff',
    width: '80%',
    borderRadius: 15,
    padding: 10,
    color: '#000',
  },
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 10,
  },
  card: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    margin: 10,
    padding: 10,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
    borderRadius: 8,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  cardContainer: {
    width: '48%',
    marginBottom: 10,
  },
});

export default Directory;
