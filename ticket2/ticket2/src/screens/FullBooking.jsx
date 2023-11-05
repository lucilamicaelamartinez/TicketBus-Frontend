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

        <AppButton
          textButton="Print"
          color="#e38b3d"
          onPress={handlePrint}
          icon={<FontAwesome name="print" size={24} color="white" />}
        />

        <AppButton
          textButton="Send by Email"
          color="#e38b3d"
          onPress={handleSendEmail}
          icon={<FontAwesome name="envelope" size={24} color="white" />}
        />

        <AppButton
          textButton="Back"
          color="#e38b3d"
          onPress={() => navigation.goBack()}
        />

        
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
    textAlign: 'left', 
  },
  bookingInfo: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 40,
    margin: 10,
    
  },
  infoLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    // poneme el texto mas cerca del borde  de la caja
    
  },
});

