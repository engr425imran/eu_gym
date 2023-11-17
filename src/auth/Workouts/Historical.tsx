import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Historical({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.list}>
        <TouchableOpacity style={styles.item}>
          <Text style={styles.text}>January 2023</Text>
          <Icon name="chevron-up" size={34} color="#fff" />
        </TouchableOpacity>
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate('WorkoutSummary')}
            style={styles.listDescrip}>
            <Text style={styles.dateTxt}>*Date</Text>
            <Text style={styles.excerDate}>*Name of the workout</Text>
          </TouchableOpacity>
          <View style={styles.listDescrip}>
            <Text style={styles.dateTxt}>*Date</Text>
            <Text style={styles.excerDate}>*Name of the workout</Text>
          </View>
          <View style={styles.listDescrip}>
            <Text style={styles.dateTxt}>*Date</Text>
            <Text style={styles.excerDate}>*Name of the workout</Text>
          </View>
          <View style={styles.listDescrip}>
            <Text style={styles.dateTxt}>*Date</Text>
            <Text style={styles.excerDate}>*Name of the workout</Text>
          </View>
          <View style={styles.listDescrip}>
            <Text style={styles.dateTxt}>*Date</Text>
            <Text style={styles.excerDate}>*Name of the workout</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.item}>
          <Text style={styles.text}>February 2023</Text>
          <Icon name="chevron-down" size={34} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <Text style={styles.text}>March 2023</Text>
          <Icon name="chevron-down" size={34} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <Text style={styles.text}>April 2023</Text>
          <Icon name="chevron-down" size={34} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <Text style={styles.text}>June 2023</Text>
          <Icon name="chevron-down" size={34} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <Text style={styles.text}>July 2023</Text>
          <Icon name="chevron-down" size={34} color="#fff" />
        </TouchableOpacity>
      </View>
      {/* <Text>Historical</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 16,
  },
  list: {
    marginTop: 20,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  text: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 18,
  },
  listDescrip: {
    flexDirection: 'row',
    marginVertical: 5,
  },
  dateTxt: {
    color: 'grey',
    fontWeight: '600',
    fontSize: 13,
  },
  excerDate: {
    marginLeft: 20,
    color: '#fff',
    fontWeight: '600',
    fontSize: 13,
  },
});
