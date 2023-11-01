import React from 'react';
import { StyleSheet, View, ScrollView, Text } from 'react-native';
import { Header } from '../components/Header';
import NavigationBar from '../components/NavigationBar';
import { AppButton } from '../components/AppButton';
import { FontAwesome } from '@expo/vector-icons';

export const FullBookingScreen = ({ navigation, route }) => {
  
  const { origin, destination, price, selectedTrip, date } = route.params;

  // Puedes agregar más campos de datos según sea necesario
  const fullName = 'Nombre Apellido';
  const email = 'correo@ejemplo.com';
  const gender = 'Masculino';

  // Función para imprimir los datos de la reserva (puedes implementarla según tus necesidades)
  const handlePrint = () => {
    // Aquí puedes agregar la lógica para imprimir los datos de la reserva
    console.log('Imprimir datos de la reserva');
  };

  // Función para enviar los datos de la reserva por correo electrónico (puedes implementarla según tus necesidades)
  const handleSendEmail = () => {
    // Aquí puedes agregar la lógica para enviar los datos de la reserva por correo electrónico
    console.log('Enviar datos de la reserva por correo electrónico');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.container}>
        <Header />

        <View style={styles.bookingInfo}>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Origin:</Text>
            <Text style={styles.infoValue}>{origin}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Destination:</Text>
            <Text style={styles.infoValue}>{destination}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Date:</Text>
            <Text style={styles.infoValue}>{date}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Price:</Text>
            <Text style={styles.infoValue}>{price}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Company:</Text>
            <Text style={styles.infoValue}>{selectedTrip.company}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Full Name:</Text>
            <Text style={styles.infoValue}>{fullName}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Email:</Text>
            <Text style={styles.infoValue}>{email}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Gender:</Text>
            <Text style={styles.infoValue}>{gender}</Text>
          </View>
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

        <NavigationBar navigation={navigation} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'top',
    paddingHorizontal: 20,
  },
  bookingInfo: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 20,
    margin: 10,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  infoLabel: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  infoValue: {
    fontSize: 16,
  },
});
