import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Header } from '../components/Header';
import NavigationBar from '../components/NavigationBar';
import { AppButton } from '../components/AppButton';
import { FontAwesome } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';

export const FullBookingScreen = ({ navigation, route }) => {
  const { tripData, userData } = route.params;

  const handlePrint = () => {
    // Agrega la lógica para imprimir los datos de la reserva.
    console.log('Imprimir datos de la reserva');
  };

  const handleSendEmail = () => {
    // Agrega la lógica para enviar los datos de la reserva por correo electrónico en formato PDF.
    console.log('Enviar datos de la reserva por correo electrónico en PDF');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Header />
      <View style={styles.container}>
        <View style={styles.bookingInfo}>
          <Text style={styles.infoLabel}>Origin: {tripData.origin}</Text>
          <Text style={styles.infoLabel}>Destination: {tripData.destination}</Text>
          <Text style={styles.infoLabel}>Date: {tripData.date}</Text>
          <Text style={styles.infoLabel}>Price: {tripData.price}</Text>
          <Text style={styles.infoLabel}>Company: {tripData.selectedTrip.company}</Text>
          <Text style={styles.infoLabel}>Full Name: {userData.fullName}</Text>
          <Text style={styles.infoLabel}>Email: {userData.email}</Text>
          <Text style={styles.infoLabel}>Gender: {userData.gender}</Text>
        </View>

        <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
            <FontAwesome name="arrow-left" size={24} color="white" />
            <Text style={styles.buttonText}>Back</Text>
          </TouchableOpacity>
          
          <View style={styles.separator}></View>

          <TouchableOpacity style={styles.button} onPress={handleSendEmail}>
            <FontAwesome name="envelope" size={24} color="white" />
            <Text style={styles.buttonText}>Send by Email</Text>
          </TouchableOpacity>

          <View style={styles.separator}></View>
          <TouchableOpacity style={styles.button} onPress={handlePrint}>
            <FontAwesome name="print" size={24} color="white" />
            <Text style={styles.buttonText}>Print</Text>
          </TouchableOpacity>

        
        </View>
      </View>
      <NavigationBar navigation={navigation} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bookingInfo: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 20,
    margin: 10,
    marginBottom: 20,
    width: '100%',
  },
  infoLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row', // Coloca los botones en la misma línea
    justifyContent: 'center', // Centra los botones horizontalmente
    marginTop: 20, // Espaciado superior
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e38b3d',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    marginLeft: 10,
    fontSize: 18,
  },
  separator: {
    width: 10, // Espaciado entre los botones
  },
});


