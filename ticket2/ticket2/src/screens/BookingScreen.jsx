import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native';

export const BookingButton = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ticket Bus</Text>
    </View>
  );
};

const FormBooking = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [genero, setGenero] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    console.log(`Nombre: ${nombre}, Apellido: ${apellido}, Género: ${genero}, Email: ${email}`);
  };

  return (
    <View style={styles.container}>
      <Header />

      <Text style={styles.label}>Nombre</Text>
      <TextInput
        style={styles.input}
        placeholder="Escribe tu nombre"
        value={nombre}
        onChangeText={(text) => setNombre(text)}
      />

      <Text style={styles.label}>Apellido</Text>
      <TextInput
        style={styles.input}
        placeholder="Escribe tu apellido"
        value={apellido}
        onChangeText={(text) => setApellido(text)}
      />

      <Text style={styles.label}>Género</Text>
      <Picker
        selectedValue={genero}
        style={styles.input}
        onValueChange={(itemValue, itemIndex) => setGenero(itemValue)}
      >
        <Picker.Item label="Masculino" value="masculino" />
        <Picker.Item label="Femenino" value="femenino" />
        <Picker.Item label="Otro" value="otro" />
      </Picker>

      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Escribe tu email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />

      <Button title="Continuar" onPress={handleSubmit} />

      <NavigationBar />
      <BackButton onPress={() => console.log('Volver')} />
    </View>
  );
};

const NavigationBar = () => {
  return (
    <View style={styles.navigationBar}>
      <TouchableOpacity style={styles.button}>
        <Icon name="home" size={30} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Icon name="user" size={30} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const BackButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.backButton} onPress={onPress}>
      <Text style={styles.buttonText}>Volver</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
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
  },
  navigationBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'lightgray',
    padding: 10,
    marginTop: 20,
    height: 60,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  button: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: 'orange',
    borderRadius: 5,
  },
  backButton: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignSelf: 'center',
    position: 'absolute',
    bottom: 50,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 32,
    fontFamily: 'Arial',
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
  },
});

export default FormBooking