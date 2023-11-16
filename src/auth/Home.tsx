import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/EvilIcons';

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={{marginTop: 25}}>
          <Text style={styles.heading}>Good Morning!</Text>
        </View>
        <View style={{marginRight: 20, marginTop: 10}}>
          <TouchableOpacity>
            <Icon name="gear" size={26} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>

      <Text style={[styles.subHeading, {alignSelf: 'center', marginTop: 15}]}>
        {'<'} Tuesday 10 of Octuber {'>'}{' '}
      </Text>
      <View style={{marginTop: 20}}>
        <Text style={styles.text}>Programmed for today</Text>
        <View style={{marginTop: 20}}>
          <Text style={styles.subHeading}>Name of the workout</Text>
          <Text style={styles.subText}>{'N'} of Sets</Text>
        </View>
      </View>
      <View style={{marginTop: 40}}>
        <Text style={styles.subHeading}>Weekly Summary</Text>
        <View style={{marginTop: 20}}>
          <View style={styles.genralStats}>
            <View style={styles.area}>
              <Text style={styles.subText}>Workouts X Done</Text>
            </View>
            <View style={styles.area}>
              <Text style={styles.subText}>Workouts X Done</Text>
            </View>
          </View>
          <View style={[styles.genralStats, {marginTop: 10}]}>
            <View style={styles.area}>
              <Text style={styles.subText}>Workouts X Done</Text>
            </View>
            <View style={styles.area}>
              <Text style={styles.subText}>Workouts X Done</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={{marginTop: 30}}>
        <Text style={styles.text}>Last Workout done</Text>
        <View style={{marginTop: 20}}>
          <Text style={styles.subHeading}>Name of the workout</Text>
          <Text style={[styles.subText, {marginTop: 10}]}>
            "Time "N of Sets
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    backgroundColor: 'black',
    paddingLeft: 16,
  },
  heading: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },
  subHeading: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  text: {
    fontSize: 12,
    color: 'grey',
    fontWeight: '500',
  },
  genralStats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  area: {
    backgroundColor: '#151717',
    padding: 15,
    width: '45%',
  },
  subText: {
    fontSize: 11,
    color: 'grey',
    fontWeight: '400',
  },
});
