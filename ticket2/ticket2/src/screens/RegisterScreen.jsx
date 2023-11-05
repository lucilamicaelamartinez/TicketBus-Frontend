import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';
import { Header } from '../components/Header';
import NavigationBar from '../components/NavigationBar';
import { AppButton } from '../components/AppButton';
import { Picker } from '@react-native-picker/picker';

export const RegisterScreen = ({ navigation }) => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [genero, setGenero] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    console.log(`Nombre: ${nombre}, Apellido: ${apellido}, Género: ${genero}, Email: ${email}, Password: ${password}`);
    // Agregar lógica para registrar al usuario aquí
    navigation.navigate('Home');
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
       //poneme el formContainer alejado de los bordes de la pantalla

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
          value={nombre}
          onChangeText={(text) => setNombre(text)}
        />

        <Text style={styles.label}>Last Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your last name"
          value={apellido}
          onChangeText={(text) => setApellido(text)}
        />

        <Text style={styles.label}>Gender</Text>
        <Picker
          selectedValue={genero}
          style={styles.input}
          onValueChange={(itemValue) => setGenero(itemValue)}
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
          secureTextEntry   // Para ocultar el texto
        />
        <AppButton textButton="Register" color="#e38b3d" onPress={handleSubmit} />
      </View>

      <NavigationBar navigation={navigation} />
    </View>
  );
};
