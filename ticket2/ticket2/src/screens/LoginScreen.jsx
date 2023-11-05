import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import { Header } from '../components/Header';
import NavigationBar from '../components/NavigationBar';
import { FontAwesome } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';


const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log(username, password);
    navigation.navigate('Home')
  };

  return (
    <View style={styles.container}>
        <Header />
    
    <View style={styles.form}>

        <TextInput
            style={styles.input}
            placeholder="Nombre de usuario"
            value={username}
            onChangeText={setUsername}
        />
        <TextInput
            style={styles.input}
            placeholder="Contraseña"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
        />
        <Button title="Iniciar sesión" onPress={handleLogin} />

    </View>
    
    <NavigationBar navigation={navigation} />

    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'top',
        },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    width: 380
  },
  form: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 100
  }
});

export default LoginScreen;