import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import React, {useLayoutEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const STYLES = ['default', 'dark-content', 'light-content'];
const TRANSITIONS = ['fade', 'slide', 'none'];

export default function Settings({navigation}) {
  const [hidden, setHidden] = useState(true);
  const [statusBarStyle, setStatusBarStyle] = useState(STYLES[2]);
  const [statusBarTransition, setStatusBarTransition] = useState(
    TRANSITIONS[1],
  );
  // useLayoutEffect(() => {
  //   headerLeft: () => (
  //     <TouchableOpacity onPress={() => console.log(navigation)}>
  //       <Icon name="chevron-left" size={30} color="#fff" />
  //     </TouchableOpacity>
  //   );
  // }, []);
  // useLayoutEffect({
  //   headerLeft: () => (
  //     <TouchableOpacity onPress={() => console.log(navigation)}>
  //       <Icon name="chevron-left" size={30} color="#fff" />
  //     </TouchableOpacity>
  //   ),
  // })
  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            //   backgroundColor: 'blue',
          }}
          onPress={() => navigation.navigate('EditProfile')}>
          <View
            style={{
              // backgroundColor: 'red',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View style={styles.avatar}>
              <Text style={{color: '#fff'}}>A</Text>
            </View>
            <View style={{marginLeft: 10}}>
              <Text style={styles.tabText}>"Name of the profile</Text>
              <Text style={styles.text}>View Profie</Text>
            </View>
          </View>

          <Text>
            <Icon name="chevron-right" size={34} color="#fff" />
          </Text>
        </TouchableOpacity>

        <View style={{marginTop: 50}}>
          <TouchableOpacity
            style={styles.tab}
            onPress={() => navigation.navigate('Account')}>
            <Text style={styles.tabText}>Account</Text>
            <Text>
              <Icon name="chevron-right" size={30} color="#fff" />
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Language')}
            style={styles.tab}>
            <Text style={styles.tabText}>Language</Text>
            <Text>
              <Icon name="chevron-right" size={30} color="#fff" />
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.tab}
            onPress={() => navigation.navigate('Notifications')}>
            <Text style={styles.tabText}>Notifications</Text>
            <Text>
              <Icon name="chevron-right" size={30} color="#fff" />
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.tab}
            onPress={() => navigation.navigate('Values')}>
            <Text style={styles.tabText}>Values</Text>
            <Text>
              <Icon name="chevron-right" size={30} color="#fff" />
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tab}>
            <Text style={styles.tabText}>Terms of conditions</Text>
            <Text>
              <Icon name="chevron-right" size={30} color="#fff" />
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tab}>
            <Text style={styles.tabText}>Privacy policy</Text>
            <Text>
              <Icon name="chevron-right" size={30} color="#fff" />
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity style={{alignSelf: 'center', marginBottom: 20}}>
        <Text style={{color: 'red', textDecorationLine: 'underline'}}>
          Sign off
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'black',
    // justifyContent: 'center',
    // alignItems: 'center',
    justifyContent: 'space-between',
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
  tab: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tabText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },
  text: {
    color: 'grey',
    fontSize: 12,
    fontWeight: '600',
  },
});
