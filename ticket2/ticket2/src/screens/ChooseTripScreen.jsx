import React, { useEffect, useState } from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { Header } from '../components/Header';
import NavigationBar from '../components/NavigationBar';
import { AppButton } from '../components/AppButton';
import BackButton from '../components/BackButton';
import { ScrollView } from 'react-native-gesture-handler';
import TicketBusApi from '../api/TicketBus';

export const ChooseTripScreen = ({ navigation, route }) => {
    const [trips, setTrips] = useState([]);
    // const [company, setCompany] = useState("");

    const { origin, destination, selectedDate } = route.params;
      const getVehicles=async()=>{
        const resp = await TicketBusApi.get(
          '/trip/filter',
            {
              params: {
                origin: origin,
                destination: destination,
                date: selectedDate,
              },
            }
          )
          // console.log("ACA EL RESPONSE TRIPS",resp.data)
          
          const data = resp.data
          // data.vehicle.company = JSON.stringify(data.vehicle.company)

          mapTrips = data.map((trip) => {
            trip.company = JSON.stringify(trip.vehicle.company)
            trip.company = JSON.parse(trip.company)
            return trip
          })

          setTrips(mapTrips)
          // setCompany(JSON.stringify(data[0].vehicle.company.name))


          // console.log("ACA EL RESPONSE company",JSON.stringify(trips.vehicle.company))
          // setCompany(JSON.stringify(resp.data.vehicle.company))
          // setCompany(resp.data.vehicle.company)

        // useEffect(() => {
        //   setTrips(resp.data)
        // }, [resp.data])
        // console.log("ACA EL RESPONSE TRIPS",resp.data)
        }
        
        useEffect(() => {
          getVehicles()
        }, [])
        

     const handleSelectTrip = (trip) => {
      
      navigation.navigate('Booking', {
        origin: origin,
        destination: destination,
        selectedDate: selectedDate, 
        company: trip.company,
        seat: trip.availableSeats,  
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
      
              {trips.map((trip, index) => (
              <View style={styles.tripOption} key={index}>
                  {/* <Text style={styles.companyText}>{trip.company}</Text> */}
                  <Text style={styles.timeText}>Departure: {trip.departure_time}</Text>
                  <Text style={styles.timeText}>Arrival: {trip.arrival_time}</Text>
                  <Text style={styles.priceText}>Price: {trip.price}</Text>
                  <Text style={styles.seatsText}> Seats Available: {trip.vehicle.capacity} </Text>
                  {/* {trip.vehicle.map(( company ) => (
                    <Text style={styles.seatsText}> Company: {company.name} </Text>
                  ))} */}
                  <Text style={styles.seatsText}> Company: {trip.company.name} </Text>
                  {/* <Text style={styles.seatsText}> Company: </Text> */}
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
    
  