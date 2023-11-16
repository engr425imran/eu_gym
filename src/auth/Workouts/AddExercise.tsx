import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function AddExercise() {
  return (
    <View style={styles.container}>
      <View style={{padding: 20}}>
        <View
          style={{
            backgroundColor: 'green',
            padding: 8,
            width: '100%',
            alignSelf: 'center',
            borderRadius: 6,
            flexDirection: 'row',
          }}>
          <Icon name="search" size={30} color="#fff" />
          <TextInput placeholder="Search" style={{marginLeft: 20}} />
        </View>
        <View style={styles.list}>
          <View style={styles.item}>
            <View style={styles.avatar}></View>
            <View style={{marginLeft: 10}}>
              <Text style={styles.heading}>*Name of the exercise</Text>
              <Text style={styles.descp}>*Muscular group *Category</Text>
            </View>
          </View>
          <View style={styles.item}>
            <View style={styles.avatar}></View>
            <View style={{marginLeft: 10}}>
              <Text style={styles.heading}>*Name of the exercise</Text>
              <Text style={styles.descp}>*Muscular group *Category</Text>
            </View>
          </View>
          <View style={styles.item}>
            <View style={styles.avatar}></View>
            <View style={{marginLeft: 10}}>
              <Text style={styles.heading}>*Name of the exercise</Text>
              <Text style={styles.descp}>*Muscular group *Category</Text>
            </View>
          </View>
          <View style={styles.item}>
            <View style={styles.avatar}></View>
            <View style={{marginLeft: 10}}>
              <Text style={styles.heading}>*Name of the exercise</Text>
              <Text style={styles.descp}>*Muscular group *Category</Text>
            </View>
          </View>
          <View style={styles.item}>
            <View style={styles.avatar}></View>
            <View style={{marginLeft: 10}}>
              <Text style={styles.heading}>*Name of the exercise</Text>
              <Text style={styles.descp}>*Muscular group *Category</Text>
            </View>
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
  },

  list: {
    marginTop: 30,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    borderBlockColor: '#grey',
    paddingBottom: 10,
    borderBottomWidth: 1,
  },
  avatar: {
    height: 50,
    width: 50,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#fff',
  },
  heading: {
    fontWeight: '700',
    fontSize: 18,
    color: '#fff',
  },
  descp: {
    fontWeight: '700',
    fontSize: 15,
    color: 'grey',
  },
});
