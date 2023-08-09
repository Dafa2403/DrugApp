import {View, Text, TextInput, StyleSheet, ScrollView} from 'react-native';
import React from 'react';

const Directory = ({navigation}) => {
  const arr = [];
  for (let i = 0; i < 50; i++) {
    arr.push('item ' + i);
  }
  return (
    <View style={styles.app}>
      <View style={styles.header}>
        <TextInput placeholder="search" style={styles.input} />
      </View>
      <ScrollView>
        {arr.map((item, index) => (
          <View key={index}>
            <View style={styles.item}>
              <Text>{item}</Text>
            </View>
            <View
              style={{
                borderBottomColor: 'black',
                borderBottomWidth: StyleSheet.hairlineWidth,
              }}
            />
          </View>
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
    height: '10%',
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
});
export default Directory;
