import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

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

      <Text style={styles.label}>Genero</Text>
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
    </View>
)};

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
});

export default FormBooking;