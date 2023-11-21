import React, {useCallback, useMemo, useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Image,
  Pressable,
  TextInput,
} from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface AppProps {
  bottomSheetRef: any;
  navigation: any; // Replace 'any' with the specific type for navigation
}

// const App = ({bottomSheetRef, navigation}: AppProps) => {
const App = ({bottomSheetRef, navigation}: AppProps) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [listName, SetListName] = useState('');

  //   const bottomSheetRef = useRef<BottomSheet>(null);

  // variables
  const snapPoints = useMemo(() => ['25%', '60%'], []);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  // renders
  const navigateToAddExecise = () => {
    navigation.navigate('AddExercise');
  };
  const navigateToList = () => {
    navigation.navigate('AddExercise');
  };
  const navigateToStartWorkout = () => {
    navigation.navigate('AddExercise');
  };
  const createTwoButtonAlert = () => {
    bottomSheetRef.current.close();
    setModalVisible(true);
  };

  return (
    <>
      <BottomSheet
        enablePanDownToClose={true}
        ref={bottomSheetRef}
        index={-1}
        snapPoints={snapPoints}
        handleIndicatorStyle={{backgroundColor: '#D5D5D5', width: 100}}
        backgroundStyle={{backgroundColor: '#ECECE7'}}
        onChange={handleSheetChanges}>
        <View style={styles.contentContainer}>
          <View
            style={{
              borderTopColor: '#DEDDD8',
              borderTopWidth: 1,
              padding: 10,
              flexDirection: 'row',
              alignItems: 'center',
              borderBottomColor: '#DEDDD8',
              borderBottomWidth: 1,
            }}>
            <Image
              source={require('../../assets/avatar.png')}
              style={{height: 80, width: 80, borderRadius: 40}}
            />
            <Image
              source={require('../../assets/avatar1.png')}
              style={{marginLeft: 20, height: 80, width: 80, borderRadius: 40}}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginTop: 20,
            }}>
            <Icon name="monitor-share" size={40} color="#44639E" />
            <Icon name="message" size={40} color="#58B257" />
            <Icon name="mail" size={40} color="#4EBBDF" />
            <Icon name="card-text-outline" size={40} color="#F2C95D" />
          </View>
          <View>
            <TouchableOpacity style={styles.btnBottom}>
              <Text style={styles.btnBottomTxt}>Copiar foto</Text>
              <Icon name="content-copy" size={30} color="#6A6A6A" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnBottom}>
              <Text style={styles.btnBottomTxt}>Some Text</Text>
              <Icon name="share" size={30} color="#6A6A6A" />
            </TouchableOpacity>
          </View>
        </View>
      </BottomSheet>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#ECECE7',
  },
  contentContainer: {
    flex: 1,
    padding: 20,
  },
  btn: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  btnTxt: {
    fontSize: 18,
    color: '#DCDDD7',
    fontWeight: '600',
  },
  descp: {
    fontWeight: '600',
    color: '#747975',
    fontSize: 14,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    // backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 22,
    // backgroundColor: '#161818',
  },
  btnBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginTop: 20,
  },
  btnBottomTxt: {
    fontSize: 18,
    fontWeight: '600',
    color: '#606362',
  },
  modalView: {},
  main: {
    backgroundColor: '#161818',
    borderRadius: 10,
    width: '85%',
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 19,
    color: '#DCDDD7',
  },
  input: {
    padding: 10,
    borderBottomColor: '#585D5A',
    borderBottomWidth: 1,
  },
  createBtn: {
    marginTop: 30,
    alignSelf: 'center',
  },
  createBtnTxt: {
    textDecorationLine: 'underline',
    fontWeight: '700',
    color: '#6E7470',
    fontSize: 18,
  },
});

export default App;
