import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Button, ImageBackground } from 'react-native';
import { Header } from '../components/Header';
import NavigationBar from '../components/NavigationBar';
import { FontAwesome } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import login from '../assets/login.jpg';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log(email, password);
    navigation.navigate('Home');
  };

  const handleRegister = () => {
    // Realiza la lógica de registro aquí
    navigation.navigate('Register'); // Cambia 'Register' al nombre correcto de tu pantalla de registro
  };

  return (
    <View style={styles.container}>
      <Header />

      <ImageBackground source={login} style={styles.imageBackground}>
        <View style={styles.overlay}>
          <View style={styles.form}>
            <TextInput
              style={styles.input}
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
            <View style={styles.buttonContainer}>
              <Button title="Login" onPress={handleLogin} />
              <Button title="Register" onPress={handleRegister} />
            </View>
          </View>
        </View>
      </ImageBackground>

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
  imageBackground: {
    flex: 1,
    width: '100%',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Color de fondo traslúcido
  },
  form: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    width: 380,
    backgroundColor: 'white', 
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
  },
});

export default LoginScreen;
