import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';
import { Header } from '../components/Header';
import NavigationBar from '../components/NavigationBar';
import { AppButton } from '../components/AppButton';
import { Picker } from '@react-native-picker/picker';
import TicketBusApi from "../api/TicketBus";
import { ScrollView } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';

export const RegisterScreen = ({ navigation }) => {
  const [username, setUsername] = useState('')
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleSubmit = () => {
    console.log(`First Name: ${firstName}, Last Name: ${lastName}, Gender: ${gender}, Email: ${email}, Password: ${password}`);
    

    const data = {
      username: username,
      firstname: firstName,
      lastname: lastName,
      gender: gender,
      email: email,
      password: password
    }
    console.log(data);

    TicketBusApi.post('/auth/register', data)
    .then(response => {
     console.log("DATA DEL REGISTER: ",response.data); // Aquí puedes manejar la respuesta del backend
     AsyncStorage.setItem('token', response.data.token); // Guarda el token en AsyncStorage
     navigation.navigate('Home');
    })
    .catch(error => {
     console.log("ACA EL ERROR",error); // Aquí puedes manejar el error de la solicitud
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
    },
  });

  return (
    // <View style={styles.container}>
    <ScrollView contentContainerStyle={{flexGrow:1,justifyContent:"center",alignItems: "center"}}>
      <Header style={styles.header} />
      <View style={styles.formContainer}>
      <Text style={styles.label}>Username</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter a username"
          value={username}
          onChangeText={(text) => setUsername(text)}
        />
        <Text style={styles.label}>First Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your first name"
          value={firstName}
          onChangeText={(text) => setFirstName(text)}
        />

        <Text style={styles.label}>Last Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your last name"
          value={lastName}
          onChangeText={(text) => setLastName(text)}
        />

        <Text style={styles.label}>Gender</Text>
        <Picker
          selectedValue={gender}
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
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry   // To hide the text
        />
        <AppButton textButton="Register" color="#e38b3d" onPress={handleSubmit} />
      </View>
      </ScrollView>
    // </View>
  );
};
