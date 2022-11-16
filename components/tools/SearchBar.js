import React from 'react';
import { TextInput } from 'react-native';


function SearchBar({ placeholder, onChangeText }) {
    return (

        <TextInput placeholder={placeholder} onChangeText={(textChanged) => onChangeText(textChanged)} />

    )
};

export default SearchBar;