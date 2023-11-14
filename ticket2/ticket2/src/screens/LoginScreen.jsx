import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Button, ImageBackground, Image } from 'react-native';
import { Header } from '../components/Header';
import NavigationBar from '../components/NavigationBar';
import { FontAwesome } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import login from '../assets/login.jpg';
import userImage from '../assets/user.png'; 

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log(email, password);
    navigation.navigate('Home');
  };

  const handleRegister = () => {
    
    navigation.navigate('Register');  
  };

  return (
    <View style={styles.container}>
      <Header />

      <ImageBackground source={login} style={styles.imageBackground}>
        <View style={styles.overlay}>
          <View style={styles.contentContainer}>
            <Image source={userImage} style={styles.userImage} />
            <View style={styles.form}>
              <View style={styles.inputContainer}>
                <FontAwesome name="envelope" style={styles.icon} />
                <TextInput
                  style={styles.input}
                  placeholder="Email"
                  value={email}
                  onChangeText={setEmail}
                />
              </View>
              <View style={styles.inputContainer}>
                <FontAwesome name="lock" style={styles.icon} />
                <TextInput
                  style={styles.input}
                  placeholder="Password"
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry
                />
              </View>
              <View style={styles.buttonContainer}>
                <Button title="Login" onPress={handleLogin} />
                <View style={{ margin: 10 }} /> 
                <Button title="Register" onPress={handleRegister} />
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>

    
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
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  userImage: {
    width: 150, // Ajusta el ancho de la imagen user.png
    height: 150, // Ajusta la altura de la imagen user.png
    marginBottom: 20,
  },
  form: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    width: 380,
    marginBottom: 10,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },
  icon: {
    fontSize: 20,
    marginRight: 10,
  },
  input: {
    flex: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Centra los botones horizontalmente
    width: '60%',
    marginTop: 10,
  },
});

export default LoginScreen;


