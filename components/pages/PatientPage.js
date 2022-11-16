import { useState } from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import SearchBar from '../tools/SearchBar';

export function PatientPage() {

  const defaultPatients = ['seb', 'elea']
  const [patients, setPatients] = useState(defaultPatients)


  const displayPatient = ({ item }) => {
    return <Text>{item}</Text>
  }

  const filterList = (text) => {

    const filteredPatients = defaultPatients.filter((currentItem) => currentItem.toLowerCase().startsWith(text.toLowerCase()))
    setPatients(filteredPatients)
  }

  return (
    <View >
      <Text style={styles.title}> Welcome in the Patient Page </Text>
      <SearchBar placeholder='Enter patient name' onChangeText={filterList} />
      <FlatList
        data={patients}
        renderItem={displayPatient}
      />
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