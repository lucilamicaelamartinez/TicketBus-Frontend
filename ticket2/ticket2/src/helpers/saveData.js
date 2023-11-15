import AsyncStorage from "@react-native-community/async-storage";

let STORAGE_KEY = 'token';

const saveData = async (value) => {
  try {
    await AsyncStorage.setItem(STORAGE_KEY, value)
    console.log('Data saved')
  } catch (e) {
    console.log('Failed to save the data to the storage')
  }
}

export default saveData;