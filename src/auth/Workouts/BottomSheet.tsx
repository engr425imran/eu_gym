import React, {useCallback, useMemo, useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Modal,
  Pressable,
  TextInput,
} from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import Icon from 'react-native-vector-icons/FontAwesome5';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';

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
  const snapPoints = useMemo(() => ['25%', '50%'], []);

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
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.main}>
            <TouchableOpacity
              style={{alignSelf: 'flex-end'}}
              onPress={() => setModalVisible(false)}>
              <IconM name="close" size={26} color="#D9DAD4" />
            </TouchableOpacity>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Name of the list</Text>
              {/* <TextInput style={styles.input} /> */}
              <TextInput
                style={styles.input}
                onChangeText={SetListName}
                value={listName}
              />
              <TouchableOpacity style={styles.createBtn}>
                <Text style={styles.createBtnTxt}>Create</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <BottomSheet
        enablePanDownToClose={true}
        ref={bottomSheetRef}
        index={-1}
        snapPoints={snapPoints}
        handleIndicatorStyle={{backgroundColor: '#D5D5D5', width: 100}}
        backgroundStyle={{backgroundColor: '#161818'}}
        onChange={handleSheetChanges}>
        <View style={styles.contentContainer}>
          <View>
            <TouchableOpacity style={styles.btn} onPress={navigateToAddExecise}>
              <Icon name="dumbbell" size={26} color="grey" />
              <View style={{marginLeft: 15}}>
                <Text style={styles.btnTxt}>Workout</Text>
                <Text style={styles.descp}>Create a new workout</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={createTwoButtonAlert}>
              <IconM name="playlist-plus" size={36} color="grey" />
              <View style={{marginLeft: 15}}>
                <Text style={styles.btnTxt}>List</Text>
                <Text style={styles.descp}>add a list to save</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}>
              <IconM name="dumbbell" size={34} color="grey" />
              <View style={{marginLeft: 15}}>
                <Text style={styles.btnTxt}>Start Working out</Text>
                <Text style={styles.descp}>Start a new workout right now</Text>
              </View>
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
    backgroundColor: 'grey',
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
  modalView: {
    // borderRadius: 20,
    // padding: 35,
    //     alignItems: 'center',
    //     shadowColor: '#000',
    //     shadowOffset: {
    //       width: 0,
    //       height: 2,
    //     },
    //     shadowOpacity: 0.25,
    //     shadowRadius: 4,
    //     elevation: 5,
  },
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
