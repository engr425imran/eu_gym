import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useLayoutEffect} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Notifications({navigation}) {
  return (
    <View style={styles.container}>
      <View style={{marginTop: 40}}>
        <View>
          <Text style={styles.subHeading}>Weight</Text>
          <View style={{flexDirection: 'row', marginTop: 20}}>
            <TouchableOpacity style={styles.btnLeft}>
              <Text style={styles.text}>Kg</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnRight}>
              <Text style={styles.text}>Lbs</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{marginTop: 40}}>
          <Text style={styles.subHeading}>Body measurements</Text>
          <View style={{flexDirection: 'row', marginTop: 20}}>
            <TouchableOpacity style={styles.btnLeft}>
              <Text style={styles.text}>Cm</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnRight}>
              <Text style={styles.text}>In</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{marginTop: 40}}>
          <Text style={styles.subHeading}>Distance</Text>
          <View style={{flexDirection: 'row', marginTop: 20}}>
            <TouchableOpacity style={styles.btnLeft}>
              <Text style={styles.text}>Km</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnRight}>
              <Text style={styles.text}>Miles</Text>
            </TouchableOpacity>
          </View>
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
  subHeading: {
    fontSize: 22,
    color: 'grey',
    fontWeight: '700',
  },
  btnLeft: {
    borderWidth: 1,
    borderColor: 'grey',
    width: '50%',
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    borderRightWidth: 0,
  },
  btnRight: {
    borderWidth: 1,
    borderColor: 'grey',
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
  },
  text: {
    fontSize: 16,
    color: 'grey',
    fontWeight: '700',
  },
});
