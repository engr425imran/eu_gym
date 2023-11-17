import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function EditExercise({}) {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <View style={{width: '90%'}}>
          <Text style={styles.heading}>*Name of the exercise</Text>
        </View>
        <TouchableOpacity>
          <Icon name="dots-horizontal" size={30} color="#fff" />
        </TouchableOpacity>
      </View>
      <View>
        <Text style={{color: 'grey', marginTop: 10}}>Add notes here...</Text>
      </View>
      <View style={styles.item}>
        <View style={styles.avatar} />
        <View style={{marginLeft: 10}}>
          <Text style={styles.subHeading}>*Name of the exercise</Text>
        </View>
        <View>
          <Icon name="dots-horizontal" size={30} color="#fff" />
        </View>
        <Icon name="chevron-up" size={30} color="#fff" />
      </View>
      <View>
        <Text style={{color: 'grey', marginTop: 10}}>Add notes here...</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 20,
        }}>
        <Text style={{color: 'grey'}}>1</Text>
        <View>
          <Text style={styles.exerciseDescp}>KG</Text>
          <TextInput style={styles.exerciseUnits} />
        </View>
        <View>
          <Text style={styles.exerciseDescp}>REPS</Text>
          <TextInput style={styles.exerciseUnits} />
        </View>
        <View>
          <Text style={styles.exerciseDescp}>RIR</Text>
          <TextInput style={styles.exerciseUnits} />
        </View>
        <View>
          <Icon name="dots-horizontal" size={30} color="grey" />
        </View>
      </View>
      <TouchableOpacity style={styles.btn}>
        <Icon name="plus" size={20} color="#fff" />
        <Text style={styles.exerciseDescp}>Add Set</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn}>
        <Icon name="plus" size={20} color="#fff" />
        <Text style={styles.addExer}>Add an exercise</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 16,
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
    alignSelf: 'center',
    textDecorationLine: 'underline',
    color: '#fff',
  },
  subHeading: {
    fontWeight: '700',
    fontSize: 18,
    color: 'grey',
  },
  btn: {
    alignSelf: 'center',
    flexDirection: 'row',
    marginVertical: 20,
    alignItems: 'center',
  },
  descp: {
    fontWeight: '700',
    fontSize: 15,
    color: 'grey',
  },
  exerciseDescp: {
    alignSelf: 'center',
    fontSize: 12,
    color: '#fff',
    fontWeight: '600',
  },
  addExer: {
    alignSelf: 'center',
    fontSize: 18,
    color: '#fff',
    fontWeight: '600',
  },
  exerciseUnits: {
    backgroundColor: 'pink',
    paddingHorizontal: 30,
    paddingVertical: 5,
    borderRadius: 6,
    // padding: 10,
  },
});
