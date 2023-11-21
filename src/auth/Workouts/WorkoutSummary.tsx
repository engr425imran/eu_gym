import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useRef} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import BottomShare from './BottomShare';
import BottomSheet from '@gorhom/bottom-sheet';

interface SummaryProps {
  navigation: any;
}

export default function WorkoutSummary({navigation}: SummaryProps) {
  const bottomSheetRef = useRef<BottomSheet>(null);

  const showSheet = () => {
    bottomSheetRef.current?.expand();
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={{alignSelf: 'flex-end'}} onPress={showSheet}>
        <Icon name="ios-share" size={30} color="#fff" />
      </TouchableOpacity>
      <View style={{alignSelf: 'center'}}>
        <Text style={styles.text}>10/12/2023</Text>
        <Text style={styles.heading}>Name of the workout</Text>
      </View>
      <View>
        <Text style={styles.text}>13 of Sets</Text>
      </View>
      <ScrollView>
        <View style={{marginTop: 20}}>
          <View>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.avatar} />
              <View style={{marginLeft: 20}}>
                <Text style={styles.heading}>*Name of the exercise</Text>
                <Text style={styles.text}>Added notes</Text>
              </View>
            </View>
            <View style={styles.headRow}>
              <Text style={styles.theadTxt}>#</Text>
              <Text style={styles.theadTxt}>KG</Text>
              <Text style={styles.theadTxt}>REPS</Text>
              <Text style={styles.theadTxt}>RIR</Text>
            </View>
            <View style={styles.headRow}>
              <Text style={styles.tableTxt}>1</Text>
              <Text style={styles.tableTxt}>120KG</Text>
              <Text style={styles.tableTxt}>8</Text>
              <Text style={styles.tableTxt}>1</Text>
            </View>
            <View style={styles.headRow}>
              <Text style={styles.tableTxt}>2</Text>
              <Text style={styles.tableTxt}>120KG</Text>
              <Text style={styles.tableTxt}>8</Text>
              <Text style={styles.tableTxt}>1</Text>
            </View>
            <View style={styles.headRow}>
              <Text style={styles.tableTxt}>3</Text>
              <Text style={styles.tableTxt}>120KG</Text>
              <Text style={styles.tableTxt}>8</Text>
              <Text style={styles.tableTxt}>1</Text>
            </View>
          </View>
        </View>
        <View style={{marginTop: 20}}>
          <View>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.avatar} />
              <View style={{marginLeft: 20}}>
                <Text style={styles.heading}>*Name of the exercise</Text>
                <Text style={styles.text}>Added notes</Text>
              </View>
            </View>
            <View style={styles.headRow}>
              <Text style={styles.theadTxt}># </Text>
              <Text style={styles.theadTxt}>KG</Text>
              <Text style={styles.theadTxt}>REPS</Text>
              <Text style={styles.theadTxt}>RIR</Text>
            </View>
            <View style={styles.headRow}>
              <Text style={styles.tableTxt}>1</Text>
              <Text style={styles.tableTxt}>120KG</Text>
              <Text style={styles.tableTxt}>8</Text>
              <Text style={styles.tableTxt}>1</Text>
            </View>
            <View style={styles.headRow}>
              <Text style={styles.tableTxt}>2</Text>
              <Text style={styles.tableTxt}>120KG</Text>
              <Text style={styles.tableTxt}>8</Text>
              <Text style={styles.tableTxt}>1</Text>
            </View>
            <View style={styles.headRow}>
              <Text style={styles.tableTxt}>3</Text>
              <Text style={styles.tableTxt}>120KG</Text>
              <Text style={styles.tableTxt}>8</Text>
              <Text style={styles.tableTxt}>1</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <BottomShare bottomSheetRef={bottomSheetRef} navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'black',
  },
  heading: {
    fontSize: 22,
    fontWeight: '600',
    color: '#fff',
  },
  text: {
    fontSize: 12,
    fontWeight: '600',
    color: 'grey',
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
  headRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  theadTxt: {
    color: '#DCDDD7',
    fontWeight: '600',
    fontSize: 17,
  },
  tableTxt: {
    color: '#6E7470',
    fontWeight: '600',
    fontSize: 17,
  },
});
