import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import Route from './src/Router/Index';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

// implements
export default function App() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Route />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({});
