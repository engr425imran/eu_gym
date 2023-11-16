import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

export default function TodayWorkout() {
  return (
    <View style={styles.container}>
      <Text>Today Workout</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
