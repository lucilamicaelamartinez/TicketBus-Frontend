import React, { useEffect, useLayoutEffect, useState } from 'react';
import { View, StyleSheet,Text, TextInput } from 'react-native';
import { Header } from '../components/Header';
import NavigationBar from '../components/NavigationBar';
import { AppButton } from '../components/AppButton';
import { Picker } from '@react-native-picker/picker';

export const EditScreen = ( { navigation }) => {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [genero, setGenero] = useState('');
    const [email, setEmail] = useState('');

  
    const handleSubmit = () => {
      console.log(`Nombre: ${nombre}, Apellido: ${apellido}, Género: ${genero}, Email: ${email}`);
    };

    const styles = StyleSheet.create({
        container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'top',
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
          contentContainer: {
            paddingHorizontal: 20,
          },
          summaryContainer: {
            backgroundColor: '#e5e5e5',
            padding: 20,
            marginBottom: 20,
          },
          summaryText: {
            fontSize: 16,
            marginBottom: 5,
          },
      });
    return (
        
      <View style={styles.container}>
        <Header />
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
          onValueChange={(itemValue, itemIndex) => setGenero(itemValue)}
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
        <AppButton textButton="Continuar" color="#e38b3d" onPress={handleSubmit} />
    <NavigationBar navigation={navigation} />
      </View>
    );
  };
  