import {View, Text, StyleSheet, TouchableOpacity, Switch} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Notifications() {
  const [activeWorkout, setActiveWorkout] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleWorkout = () => setActiveWorkout(previousState => !previousState);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View style={styles.container}>
      <View style={{marginTop: 40}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 20,
          }}>
          <Text style={styles.tab}>Notice of active workout</Text>
          <Switch
            trackColor={{false: '#767577', true: '#81b0ff'}}
            thumbColor={activeWorkout ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleWorkout}
            value={activeWorkout}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 20,
          }}>
          <View>
            <Text style={styles.tab}>Promotional Content</Text>
            <Text style={styles.text}>
              Send emails with promotional content
            </Text>
          </View>
          <Switch
            trackColor={{false: '#767577', true: '#81b0ff'}}
            thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 16,
  },
  tab: {
    fontSize: 22,
    color: '#fff',
    fontWeight: '700',
  },
  text: {
    fontSize: 16,
    color: 'grey',
    fontWeight: '700',
  },
});
