import AsyncStorage from "@react-native-community/async-storage";
// import React, { useState } from 'react';

let STORAGE_KEY = 'token';

// const [input, setInput] = useState('');

const getData = async () => {
  try {
    const value = await AsyncStorage.getItem(STORAGE_KEY);

    if (value !== null) {
      return value;
    }
  } catch (e) {
    alert('Failed to fetch the data from storage')
  }
}

export default getData;