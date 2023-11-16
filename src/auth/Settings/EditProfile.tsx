import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function EditProfile({navigation}) {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={styles.avatar}>
          <Text>A</Text>
        </View>
        <View>
          <Text style={styles.heading}>*Name of profile</Text>
        </View>
      </View>
      <View style={{marginTop: 40}}>
        <TouchableOpacity
          style={{
            width: 80,
            height: 40,
            borderWidth: 1,
            borderColor: 'grey',
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: 'grey', fontSize: 12, fontWeight: '600'}}>
            Edit
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{marginTop: 40}}>
        <Text style={styles.heading}>Lists</Text>
        <View style={{marginTop: 20}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon name="menu-right" size={45} color="#fff" />
            <Text style={styles.subHeading}>*Name of the list</Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon name="menu-right" size={45} color="#fff" />
            <Text style={styles.subHeading}>*Name of the list</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'black',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  avatar: {
    borderWidth: 1,
    borderColor: '#fff',
    height: 90,
    justifyContent: 'center',
    alignItems: 'center',
    width: 90,
    borderRadius: 45,
  },
  heading: {
    marginLeft: 15,
    color: '#fff',
    fontWeight: '700',
    fontSize: 22,
    // flexDirection: 'row',
    // justifyContent: 'space-between',
  },
  subHeading: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },
  text: {
    color: 'grey',
    fontSize: 12,
    fontWeight: '600',
  },
});
