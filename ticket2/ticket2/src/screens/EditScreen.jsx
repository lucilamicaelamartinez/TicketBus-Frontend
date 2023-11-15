import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, TextInput, Alert } from 'react-native';
import { Header } from '../components/Header';
import NavigationBar from '../components/NavigationBar';
import { AppButton } from '../components/AppButton';
import { Picker } from '@react-native-picker/picker';
import TicketBusApi from "../api/TicketBus";

export const EditScreen = ({ navigation, route }) => {

  console.log("ESTE ES EL USER QUE LLEGA A EDITAR", route.params)
  const {userId, name, lastname, email, username} = route.params;

  const [firstNameToPut, setFirstName] = useState('');
  const [lastNameToPut, setLastName] = useState('');
  const [genderToPut, setGender] = useState('');
  const [emailToPut, setEmail] = useState('');

  useEffect(() => {
    setFirstName(name);
    setLastName(lastname);
    setEmail(email);
  }, [])
  

  const handleSubmit = () => {
    // Crea un objeto con los datos del usuario
    const userData = {
      name: firstNameToPut,
	    lastname: lastNameToPut,
      email: emailToPut
    };
    console.log(userData, "USER DATAAA");
    TicketBusApi.put(`/user/${userId}`, userData)
    .then(response => {
      console.log(response.data);
      Alert.alert('User data updated successfully', response.data);
    })
    .catch(error => {
      console.log(error);
      Alert.alert('Failed to update user data');
    });
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    header: {
      flex: 1,
    },
    label: {
      fontSize: 20,
      marginBottom: 5,
    },
    input: {
      borderWidth: 1,
      borderColor: 'black',
      borderRadius: 5,
      padding: 10,
      marginBottom: 10,
      fontSize: 18,
      width: '100%',
    },
    formContainer: {
      borderWidth: 5,
      borderColor: 'gray',
      borderRadius: 0,
      paddingHorizontal: 20,
      paddingTop: 10,
      padding: 20,
      width: '90%',
      backgroundColor: 'white',
      marginTop: 20, 
    },
  });

  return (

    <View style={styles.container}>
      <Header style={styles.header} />
      <View style={styles.formContainer}>
        <Text style={styles.label}>First Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your first name"
          value={firstNameToPut}
          onChangeText={(text) => setFirstName(text)}
        />

        <Text style={styles.label}>Last Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your last name"
          value={lastNameToPut}
          onChangeText={(text) => setLastName(text)}
        />

        <Text style={styles.label}>Gender</Text>
        <Picker
          selectedValue={genderToPut}
          style={styles.input}
          onValueChange={(itemValue) => setGender(itemValue)}
        >
          <Picker.Item label="Male" value="male" />
          <Picker.Item label="Female" value="female" />
          <Picker.Item label="Other" value="other" />
        </Picker>


        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          value={emailToPut}
          onChangeText={(text) => setEmail(text)}
        />

        <AppButton textButton="Save Changes" color="#e38b3d" onPress={handleSubmit} />
      </View>

      <NavigationBar navigation={navigation} />
    </View>

  );
};