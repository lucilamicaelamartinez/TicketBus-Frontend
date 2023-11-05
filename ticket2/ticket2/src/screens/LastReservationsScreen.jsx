import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { StatusBar } from 'react-native';
import { Header } from '../components/Header';
import NavigationBar from '../components/NavigationBar';
import Icon from 'react-native-vector-icons/FontAwesome'; 
import BackButton from '../components/BackButton';

export const LastReservations = ({ navigation }) => {
  return (
    <>
      <Header />
      <View style={styles.container}>
        
      <BackButton onPress={() => navigation.goBack()} isFirstScreen={false} /> 
       
        <View style={styles.mainContainer}>
          <View style={styles.reservationContainer}>
            <ReservationCard
              date="2023-10-24"
              origin="New York"
              destination="Los Angeles"
              company="Travel Co."
            />
            <ReservationCard
              date="2023-10-25"
              origin="San Francisco"
              destination="Chicago"
              company="Adventure Tours"
            />
            <ReservationCard
              date="2023-10-26"
              origin="Miami"
              destination="Orlando"
              company="Vacation Express"
            />
          </View>
        </View>
        <StatusBar style="auto" />
        <NavigationBar navigation={navigation} />
      </View>
    </>
  );
};

const ReservationCard = ({ date, origin, destination, company }) => {
  return (
    <View style={styles.card}>
      <View style={styles.iconContainer}>
        <Icon name="bus" size={30} color="#e38b3d" />
      </View>
      <View style={styles.textContainer}>
      <Text style={styles.label}>Date: {date}</Text>
      <Text style={styles.label}>Origin: {origin}</Text>
      <Text style={styles.label}>Destination: {destination}</Text>
      <Text style={styles.label}>Company: {company}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainContainer: {
    backgroundColor: '#cfbeb0',
    borderWidth: 0,
    padding: 20,
    margin: 20,
  },
  reservationContainer: {
    marginTop: 10,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#FAE5D3',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    margin: 10,
  },
  iconContainer: {
    width: 40,
    height: 40,
    backgroundColor: 'white',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    marginLeft: 10,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
});
