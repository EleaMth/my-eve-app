import { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export function PatientDataPage({ route }) {
    console.log("patient est ", route.params)
    const [currentPatient, setCurrentPatient] = useState(route.params.patient) //allows us to track patient selected in the seachbar

    return (
        <View >
            <Text style={styles.title}> Welcome in the Profile Page </Text>

            <Image source={{ uri: currentPatient?.image }} style={{ width: 100, height: 100 }} />
            <Text> id: {currentPatient?.id}</Text>
            <Text> firstname: {currentPatient?.firstname}</Text>
            <Text> lastname: {currentPatient?.lastname}</Text>

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