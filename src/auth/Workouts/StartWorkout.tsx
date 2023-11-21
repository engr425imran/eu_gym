import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function StartWorkout({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        <Icon name="chevron-down" size={40} color="#fff" />
        <View>
          <Text style={styles.subHeading}>Guardar</Text>
        </View>
      </View>
      <View style={{alignItems: 'center'}}>
        <Text style={styles.heading}>*Name of the workout</Text>
        <View>
          <Text style={styles.subHeading}>Start</Text>
        </View>
        <View>
          <Text style={styles.subHeading}>
            Add an excercise to start your workout
          </Text>
        </View>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('AddExercise')}>
          <Icon name="plus" size={40} color="#fff" />
          <Text style={styles.btnTxt}>Add an excercise</Text>
        </TouchableOpacity>
      </View>

      {/* <Text>StartWorkout</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 16,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  heading: {
    color: '#fff',
    fontSize: 20,
    textDecorationLine: 'underline',
    alignSelf: 'center',
    marginBottom: 30,
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  subHeading: {
    fontSize: 18,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 40,
  },
  btnTxt: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 20,
  },
});
