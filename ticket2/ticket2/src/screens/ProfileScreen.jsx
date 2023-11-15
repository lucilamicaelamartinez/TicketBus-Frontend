
import React, { useEffect, useState } from 'react'
import { StatusBar, StyleSheet, Text, View, BackHandler } from 'react-native';
import { Header } from '../components/Header';
import NavigationBar from '../components/NavigationBar';
import { AppButton } from '../components/AppButton';
import Icon from 'react-native-vector-icons/Ionicons';
import BackButton from '../components/BackButton';
// import jwt from 'jsonwebtoken';
import { Constants } from 'expo-constants';
import jwtDecode from 'jwt-decode';
import AsyncStorage from '@react-native-community/async-storage';
import { Buffer } from 'buffer';
import TicketBusApi from "../api/TicketBus";

export const ProfileScreen = ( { navigation } ) => {
  const handleExitPress = () => {
    BackHandler.exitApp();
  };


  const [name, setname] = useState("")
  const [lastname, setlastname] = useState("")
  const [email, setemail] = useState("")
  const [username, setusername] = useState("")

  getToken = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      console.log("TOKEN DEL PROFILE: ", token);
      return token;
    } catch (error) {
      console.log(error);
    }
  }
  handleLoadUser = async () => {
    try {
      const token = await getToken();
      console.log("TOKEN: ", token);
      const partes = token.split('.');
      const datosToken = (partes[1]);
      const decodifiedToken = Buffer.from(datosToken, 'base64').toString('utf-8');
      const objeto = JSON.parse(decodifiedToken);
      const user = objeto.sub;
      console.log("USERNAME: ", user);
      // const decodedToken = jwtDecode(token);
      // const username = decodedToken.sub;
      const response = await TicketBusApi.get(`/user/username/${user}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      console.log(response.data);
      setname(response.data.name);
      setlastname(response.data.lastname);
      setemail(response.data.email);
      setusername(response.data.username);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    handleLoadUser();
  }, [])
  
  return (
    
    <>

    <View style={styles.container}>
    <BackButton onPress={() => navigation.goBack()} /> 

      <Header />

      <View style={styles.mainContainer}>

          <View style={styles.namesContainers}>

              <View style={styles.initialsName}>

                  <Text style={styles.initialsLetters}>{name[0]}{lastname[0]}</Text>

              </View>

              <View>
                  
                    <Text style={styles.dataTexts}>Name: {name} {lastname}</Text>
                    <Text style={styles.dataTexts}>{email}</Text>


              </View>


          </View>

          <View style={styles.dataContainer}>

              <Text style={{fontSize: 14}}>Username: {username}</Text>

          </View>

      </View>

      <View style={styles.buttonsContainer}>

      <AppButton
        textButton="Last Reservations"
        color="#e38b3d"
        onPress={() => navigation.navigate('LastReservations')}
      >
        <Icon name="location" size={20} color="white" style={{ marginRight: 10 }} />
      </AppButton>
      <View style={styles.buttonSeparator} />
        <AppButton 
        textButton="Edit" 
        color="#e38b3d"
        onPress={() => navigation.navigate('Edit')}
 
        >
          <Icon name="pencil" size={20} color="white" style={{ marginRight: 10 }} />
        </AppButton>
        <View style={styles.buttonSeparator} />
        <AppButton 
        textButton="Exit" 
        color="#e38b3d" 
        onPress={handleExitPress}
        >
          <Icon name="exit" size={20} color="white" style={{ marginRight: 10 }} />
        </AppButton>

      </View>

      <StatusBar style="auto" />

      <NavigationBar navigation={navigation} />

    </View>

    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'top',
    // que el cuadro sea mas chico que la pantalla
  },
  mainContainer: {
    // flex: 1,
    backgroundColor: '#cfbeb0',
    justifyContent: 'top',
    borderWidth: 1,
    padding: 20,
    margin: 20,
    with: '90 %'
  },
  namesContainers: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '85%',
  },
  dataContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  initialsName: {
    backgroundColor: 'black',
    width: 80,
    height: 80,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 20,
  },
  initialsLetters: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
  },
  dataTexts: {
    fontSize: 15,
  },
  buttonsContainer: {
    flexDirection: 'column',  // Cambia la dirección del diseño a column
    justifyContent: 'flex-start', // Alinea los botones en la parte superior
    marginTop: 20,  // Agrega espacio en la parte superior de los botones
},
buttonSeparator: {
  height: 10, // Puedes ajustar la altura según el espacio que desees entre los botones
},

});