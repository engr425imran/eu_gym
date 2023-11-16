import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Account({navigation}) {
  return (
    <View style={styles.container}>
      <View style={{marginTop: 60}}>
        <View>
          <Text style={styles.heading}>Name of the user</Text>
          <Text style={styles.subHeading}>X user name</Text>
        </View>

        <View
          style={{
            marginTop: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View>
            <Text style={styles.heading}>Plan</Text>
            <Text style={styles.subHeading}>Free</Text>
          </View>
          <Icon name="chevron-right" size={30} color="#fff" />
        </View>
        <View
          style={{
            marginTop: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View>
            <Text style={styles.heading}>Plan</Text>
            <Text style={styles.subHeading}>Free</Text>
          </View>
          <Icon name="chevron-right" size={30} color="#fff" />
        </View>
      </View>
      <View style={{marginTop: 20}}>
        <View>
          <Text style={styles.heading}>Email</Text>
          <Text style={styles.subHeading}>X email</Text>
        </View>
      </View>
      <View
        style={{
          marginTop: 20,
          //   marginHorizontal: 20,
          alignSelf: 'center',
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}>
        <Text style={styles.text}>
          To Close Your account and permanently delete data,{' '}
        </Text>
        <TouchableOpacity>
          <Text style={{color: '#fff', textDecorationLine: 'underline'}}>
            click here
          </Text>
        </TouchableOpacity>
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
    // marginLeft: 15,
    color: '#fff',
    fontWeight: '700',
    fontSize: 22,
    // flexDirection: 'row',
    // justifyContent: 'space-between',
  },
  subHeading: {
    color: 'grey',
    fontSize: 18,
    fontWeight: '700',
  },
  text: {
    color: 'grey',
    fontSize: 15,
    fontWeight: '700',
  },
});
