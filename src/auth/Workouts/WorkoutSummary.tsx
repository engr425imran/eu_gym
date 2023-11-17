import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

export default function WorkoutSummary() {
  return (
    <View style={styles.container}>
      <View style={{alignSelf: 'center'}}>
        <Text style={styles.text}>10/12/2023</Text>
        <Text style={styles.heading}>Name of the workout</Text>
      </View>
      <View>
        <Text style={styles.text}>13 of Sets</Text>
      </View>
      <View style={{marginTop: 20}}>
        <View>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.avatar} />
            <View style={{marginLeft: 20}}>
              <Text style={styles.heading}>*Name of the exercise</Text>
              <Text style={styles.text}>Added notes</Text>
            </View>
          </View>
          <View style={styles.headRow}>
            <Text></Text>
            <Text>KG</Text>
            <Text>REPS</Text>
            <Text>RIR</Text>
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
  },
  heading: {
    fontSize: 22,
    fontWeight: '600',
    color: '#fff',
  },
  text: {
    fontSize: 12,
    fontWeight: '600',
    color: 'grey',
  },
  avatar: {
    borderWidth: 1,
    borderColor: '#fff',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    borderRadius: 25,
  },
  headRow: {
    flexDirection: 'row',
  },
});
