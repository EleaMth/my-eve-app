import { useState } from 'react';
import { StyleSheet, Text, View, Image, FlatList, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SearchBar from '../tools/SearchBar';

const my_all_patient_list = require('../../patient_list.json')




export function PatientPage({ navigation }) {

  const [patientList, setPatientList] = useState([]) //allows us to track patient list
  const [currentPatient, setCurrentPatient] = useState() //allows us to track patient selected in the seachbar


  const filteredList = (inputText) => {
    console.log(inputText) //display the current text (which is in the searchbar) in the console
    if (inputText != "") { //if searchbar is not empty
      const filteredPatients = my_all_patient_list.filter((currentItem) =>
        currentItem.firstname.toLowerCase().startsWith(inputText.toLowerCase()) ||
        currentItem.lastname.toLowerCase().startsWith(inputText.toLowerCase()) ||
        currentItem.id.toString().startsWith(inputText.toLowerCase())) //we compare the searchbar text ("inputText") with informations in our patient list "my_all_patient_list"
      //set state with patient.s corresponding to the inputText written in the searchbar
      setPatientList(filteredPatients)
    }
    else {
      setPatientList([]); //reset state
      setCurrentPatient(); //reset state
    }
  }


  const displayPatient = ({ item }) => {
    return <Text onPress={() => onPatientSelected(item)}  >{item.firstname} {item.lastname}</Text>
  }
  //if we click on patient in the patientlist from the flatlist, we set the state of the current patient with the patient selected


  const onPatientSelected = (patient) => {
    setCurrentPatient(patient) //we set state with currentPatient the patient we clicked on in the searchbar
    setPatientList([patient])
    navigation.navigate('PatientDataPage', { patient: patient })
    console.log(patient) //display the current patient in the console
  }


  return (
    <View >
      <Text style={styles.title}> Welcome in the Patient Page </Text>
      <SearchBar placeholder='Enter patient identification' myOnChangeText={(myInputText) => filteredList(myInputText)} />
      <FlatList
        data={patientList}
        renderItem={displayPatient}
      />
      {/* <Image source={{ uri: currentPatient?.image }} style={{ width: 100, height: 100 }} />
      <Text> id: {currentPatient?.id}</Text>
      <Text> firstname: {currentPatient?.firstname}</Text>
      <Text> lastname: {currentPatient?.lastname}</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: "#cdc",
    borderRadius: 6,
    backgroundColor: "#cdc",
    color: "#20232a",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold"
  }
});