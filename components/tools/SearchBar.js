import React from 'react';
import { TextInput } from 'react-native';


function SearchBar({ placeholder, myOnChangeText }) {
    return (

        //onChangeText events to read the user input
        <TextInput placeholder={placeholder} onChangeText={(textChanged) => myOnChangeText(textChanged)} />

    )
};

export default SearchBar;

