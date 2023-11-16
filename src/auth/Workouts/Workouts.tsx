import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function TodayWorkout() {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={styles.heading}>Your Workouts</Text>
        <View style={{flexDirection: 'row'}}>
          <Icon name="restart" size={30} color="#fff" />
          <Icon name="plus-circle-outline" size={30} color="#fff" />
        </View>
      </View>
      <View style={{marginTop: 40}}>
        <View style={{flexDirection: 'row'}}>
          <Icon name="menu-right" size={30} color="#fff" />
          <Text style={styles.text}>*Name of the list</Text>
        </View>
        <View style={{flexDirection: 'row', marginTop: 10}}>
          <Icon name="menu-down" size={30} color="#fff" />
          <Text style={styles.text}>*Name of the list</Text>
        </View>
      </View>
      <View style={{marginTop: 40}}>
        <View style={styles.workouts}>
          <View>
            <Text style={styles.subHeading}>*Name of the list</Text>
            <Text style={styles.descpTxt}>*Name of the list</Text>
          </View>
          <TouchableOpacity>
            <Icon name="dots-horizontal" size={30} color="#fff" />
          </TouchableOpacity>
        </View>
        <View style={styles.workouts}>
          <View>
            <Text style={styles.subHeading}>*Name of the list</Text>
            <Text style={styles.descpTxt}>*Name of the list</Text>
          </View>
          <TouchableOpacity>
            <Icon name="dots-horizontal" size={30} color="#fff" />
          </TouchableOpacity>
        </View>
        <View style={styles.workouts}>
          <View>
            <Text style={styles.subHeading}>*Name of the list</Text>
            <Text style={styles.descpTxt}>*Name of the list</Text>
          </View>
          <TouchableOpacity>
            <Icon name="dots-horizontal" size={30} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
      <Text>Today Workout</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 16,
  },
  heading: {
    color: '#fff',
    fontSize: 25,
    fontWeight: '700',
  },
  subHeading: {
    color: '#fff',
    fontSize: 21,
    fontWeight: '700',
  },
  workouts: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '600',
    marginLeft: 15,
  },
  descpTxt: {
    color: 'grey',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 15,
  },
});
