import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeRoute from './HomeRoute';
import Settings from '../auth/Settings/Settings';
import Notifications from '../auth/Settings/Notifications';
import EditProfile from '../auth/Settings/EditProfile';
import Account from '../auth/Settings/Account';
import Language from '../auth/Settings/Language';
import Values from '../auth/Settings/Values';
import TodayWorkout from '../auth/Main/TodayWorkout';
import User from '../auth/Profile/User';

const Stack = createNativeStackNavigator();

export default function Index() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="HomeRoute"
          component={HomeRoute}
        />

        <Stack.Group
          screenOptions={{
            headerStyle: {
              backgroundColor: 'black',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 25,
            },
            headerBackTitle: '',
          }}>
          <Stack.Screen name="Settings" component={Settings} />
          <Stack.Screen name="Notifications" component={Notifications} />
          <Stack.Screen name="Language" component={Language} />
          <Stack.Screen name="Account" component={Account} />
          <Stack.Screen name="Values" component={Values} />
        </Stack.Group>

        <Stack.Screen name="EditProfile" component={EditProfile} />
      </Stack.Navigator>
    </NavigationContainer>
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name="HomeRoute" component={HomeRoute} />
    //     <Stack.Group
    //       screenOptions={{
    //         headerLeft: () => (
    //           <TouchableOpacity onPress={() => console.log(navigation)}>
    //             <Icon name="chevron-left" size={30} color="#fff" />
    //           </TouchableOpacity>
    //         ),
    //         headerStyle: {
    //           backgroundColor: 'black',
    //         },
    //         headerTintColor: '#fff',
    //         headerTitleStyle: {
    //           fontWeight: 'bold',
    //           fontSize: 25,
    //         },
    //       }}>
    //       <Stack.Screen name="Settings" component={Settings} />
    //       <Stack.Screen name="Notifications" component={Notifications} />
    //       <Stack.Screen name="Language" component={Language} />
    //       <Stack.Screen name="Account" component={Account} />
    //       <Stack.Screen name="Values" component={Values} />
    //     </Stack.Group>
    //     <Stack.Screen name="EditProfile" component={EditProfile} />
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
}

// screenOptions={{headerShown: false}}
