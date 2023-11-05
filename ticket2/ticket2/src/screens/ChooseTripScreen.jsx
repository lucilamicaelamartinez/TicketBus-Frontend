import React, { useEffect, useState } from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { Header } from '../components/Header';
import NavigationBar from '../components/NavigationBar';
import { AppButton } from '../components/AppButton';
import BackButton from '../components/BackButton';
import { ScrollView } from 'react-native-gesture-handler';
import TicketBusApi from '../api/TicketBus';

export const ChooseTripScreen = ({ navigation, route }) => {
    // Obtén el origen y destino seleccionados de la pantalla anterior
    const { origin, destination, selectedDate } = route.params;
        const getVehicles=async()=>{
          const resp = await TicketBusApi.get(
            '/vehicle'
          )
         const seats=resp.data
         return seats 
        }
        const [vehicle, setvehicle] = useState()
        useEffect(() => {
          setvehicle= getVehicles()
        
          
        }, [])
        
    // Datos aleatorios para las compañías de viaje
    const tripOptions = [
      {
        company: 'Andesmar',
        departureTime: '08:00 AM',
        arrivalTime: '03:30 PM',
        price: '$80',
        availableSeats: vehicle,
      },
      {
        company: 'Union',
        departureTime: '10:30 AM',
        arrivalTime: '05:45 PM',
        price: '$75',
        availableSeats: 15,
      },
      {
        company: 'Iselin',
        departureTime: '09:15 AM',
        arrivalTime: '04:00 PM',
        price: '$90',
        availableSeats: 20,
      },
      {
        company: 'Andesmar',
        departureTime: '08:00 AM',
        arrivalTime: '03:30 PM',
        price: '$80',
        availableSeats: 25,
      },
      {
        company: 'Union',
        departureTime: '10:30 AM',
        arrivalTime: '05:45 PM',
        price: '$75',
        availableSeats: 15,
      },
      {
        company: 'Iselin',
        departureTime: '09:15 AM',
        arrivalTime: '04:00 PM',
        price: '$90',
        availableSeats: 20,
      },
    ];

    // Función para manejar la selección de una compañía de viaje
  const handleSelectTrip = (trip) => {
    // Navegar a la pantalla de Booking y pasar los detalles del viaje seleccionado
    navigation.navigate('Booking', {
      origin: origin,
      destination: destination,
      selectedDate: selectedDate, // Reemplaza con la fecha que corresponda
      company: trip.company,
      seat: trip.availableSeats,  // Puedes ajustar esto según tu lógica
      departureTime: trip.departureTime,
      arrivalTime: trip.arrivalTime,
      price: trip.price,
    });
  };
  
    return (
        // <View>
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.container}>
            <BackButton onPress={() => navigation.goBack()} />
    
            <Header />
    
            <View style={styles.tripInfo}>
              <View style={styles.infoRow}>
                <Text style={styles.infoTitle}>Origin:</Text>
                <Text style={styles.infoText}>{origin}</Text>
              </View>
              <View style={styles.infoRow}>
                <Text style={styles.infoTitle}>Destination:</Text>
                <Text style={styles.infoText}>{destination}</Text>
              </View>
            </View>
    
            {tripOptions.map((trip, index) => (
            <View style={styles.tripOption} key={index}>
                <Text style={styles.companyText}>{trip.company}</Text>
                <Text style={styles.timeText}>Departure: {trip.departureTime} - Arrival: {trip.arrivalTime}</Text>
                <Text style={styles.priceText}>Price: {trip.price}</Text>
                <Text style={styles.seatsText}> Seats Available: {trip.availableSeats} </Text>
                <AppButton textButton="Select"color="#e38b3d" onPress={() => handleSelectTrip(trip)}/>
            </View>
            ))}
    
            <AppButton textButton="Back" color="#e38b3d" onPress={() => navigation.goBack()}/>
            <StatusBar style="auto" />
    
            <NavigationBar navigation={navigation} />
        </View>
      </ScrollView>
    //   </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    contentContainer: {
        paddingHorizontal: 20, // Espacio entre el contenido y los bordes de la pantalla
      },
    tripInfo: {
      alignItems: 'center',
      marginTop: 10,
    },
    tripInfoText: {
      fontSize: 18,
    },
    tripOption: {
      borderWidth: 1,
      borderColor: '#ccc',
      padding: 20,
      margin: 10,
    },
    companyText: {
      fontSize: 24,
      fontWeight: 'bold',
    },
    timeText: {
      fontSize: 16,
    },
    priceText: {
      fontSize: 18,
    },
    seatsText: {
      fontSize: 16,
    },
    infoRow: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 5,
    },
    infoTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginRight: 10,
    },
    infoText: {
      fontSize: 18,
    },
  });
  