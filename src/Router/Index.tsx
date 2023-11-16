import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from '../auth/Home';
import TodayWorkout from '../auth/Main/TodayWorkout';
import User from '../auth/Profile/User';

const Tab = createBottomTabNavigator();

export default function Index() {
  return (
    <NavigationContainer>
      {/* <Tab.Navigator screenOptions={{headerShown: false}}> */}
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarBackground: () => (
            <View style={{backgroundColor: 'black', flex: 1}} />
          ),
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: 'Home',
            tabBarActiveTintColor: '#0171A1',
            tabBarLabelStyle: {fontSize: 11},
            tabBarInactiveTintColor: '#6D858F',
            headerShown: false,
            tabBarIcon: () => (
              <View style={{position: 'relative'}}>
                <IconM name="home" size={26} color="#fff" />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Today"
          component={TodayWorkout}
          options={{
            tabBarLabel: 'Your Workouts',
            tabBarActiveTintColor: '#0171A1',
            tabBarLabelStyle: {fontSize: 11},
            tabBarInactiveTintColor: '#6D858F',
            headerShown: false,
            tabBarIcon: () => (
              <View style={{position: 'relative'}}>
                <Icon name="dumbbell" size={26} color="#fff" />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="User"
          component={User}
          options={{
            tabBarLabel: 'Your Metrics',
            tabBarActiveTintColor: '#0171A1',
            tabBarLabelStyle: {fontSize: 11},
            tabBarInactiveTintColor: '#6D858F',
            headerShown: false,
            tabBarIcon: () => (
              <View style={{position: 'relative'}}>
                <IconM name="chart-bar" size={26} color="#fff" />
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
