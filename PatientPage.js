import { StyleSheet, Text, View, Image } from 'react-native';

export function PatientPage() {

  return (
    <View >
      <Text style={styles.title}> Welcome in the Patient Page </Text>
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