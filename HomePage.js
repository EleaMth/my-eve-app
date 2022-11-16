import { StyleSheet, Text, View, Image, Button } from 'react-native';
import * as React from 'react';
// import SearchBar from './SearchBar.js';

export function HomePage({navigation}){
    return (

      <>
        <Button
        title="Your profile page"
        onPress={() => navigation.navigate('Profile')} 
        />
        <Button
          title="Patient page"
          onPress={() => navigation.navigate('PatientPage')} 
        />
          
        {/* <SearchBar placeholder='Enter Patient Name'/> */}
          
      </> 


    );
};

// const ProfileScreen = ({ navigation, route }) => {
//   return <Text>This is {route.params.name}'s profile</Text>;
// };


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