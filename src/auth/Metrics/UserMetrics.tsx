import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function User() {
  const [tab, setTab] = useState(1);

  const showBody = () => {
    setTab(1);
  };
  const showExercies = () => {
    setTab(2);
  };
  return (
    <View style={styles.container}>
      <View style={styles.headRow}>
        <Text style={styles.heading}>Your Metrics</Text>
        <TouchableOpacity>
          <Icon name="plus-circle-outline" size={30} color="#fff" />
        </TouchableOpacity>
      </View>
      <View style={styles.tabs}>
        <TouchableOpacity
          onPress={showBody}
          style={[styles.tabBtn, tab == 1 && {borderBottomWidth: 1}]}>
          <Text style={styles.tabText}>Bodily</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={showExercies}
          style={[styles.tabBtn2, tab == 2 && {borderBottomWidth: 1}]}>
          <Text style={styles.tabText}>Exercises</Text>
        </TouchableOpacity>
      </View>
      <View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text style={styles.tabText}>Body Weight</Text>
          <Icon name="dots-horizontal" size={30} color="#fff" />
        </View>
      </View>

      <Text>User Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'black',
  },
  headRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  heading: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '700',
  },
  tabBtn: {
    padding: 10,
    borderBottomColor: '#7A7B7C',
  },
  tabBtn2: {
    marginLeft: 20,
    padding: 10,
    borderBottomColor: '#7A7B7C',
  },
  tabs: {
    marginTop: 20,
    alignSelf: 'center',
    flexDirection: 'row',
  },
  tabText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  text: {
    fontSize: 12,
    color: 'grey',
    fontWeight: '500',
  },
});
