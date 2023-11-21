import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useCallback, useMemo, useRef, useState} from 'react';
import BottomSheet from '@gorhom/bottom-sheet';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import BottomSheetComp from './BottomSheet';
export default function TodayWorkout({navigation}) {
  const bottomSheetRef = useRef<BottomSheet>(null);

  const showSheet = () => {
    bottomSheetRef.current?.expand();
  };

  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={styles.heading}>Your Workouts</Text>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity onPress={() => navigation.navigate('Historical')}>
            <Icon name="restart" size={30} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity onPress={showSheet}>
            <Icon name="plus-circle-outline" size={30} color="#fff" />
          </TouchableOpacity>
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
          <TouchableOpacity onPress={() => navigation.navigate('BottomSheet')}>
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
      <BottomSheetComp
        bottomSheetRef={bottomSheetRef}
        navigation={navigation}
      />
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
