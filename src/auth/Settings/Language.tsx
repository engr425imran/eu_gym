import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Language() {
  return (
    <View style={styles.container}>
      <Text
        style={{
          alignSelf: 'center',
          color: '#fff',
          fontSize: 25,
          fontWeight: '800',
        }}>
        Language
      </Text>
      <View style={{marginTop: 40}}>
        <TouchableOpacity
          style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.tab}>Language of the app</Text>
          <Icon name="chevron-right" size={34} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 16,
  },
  tab: {
    fontSize: 24,
    color: 'grey',
    fontWeight: '700',
  },
});
