import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Header } from '../components/Header';
import NavigationBar from '../components/NavigationBar';
import { AppButton } from '../components/AppButton';
import BackButton from '../components/BackButton';
import Icon from 'react-native-vector-icons/Ionicons'; 

export const BookingScreen = ({ navigation, route }) => {
  const { origin, destination, company, seat, departureTime, arrivalTime, price, selectedDate} = route.params;

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    // Here you can process the entered data, for example, send it via an API.
    console.log(`First Name: ${firstName}, Last Name: ${lastName}, Gender: ${gender}, Email: ${email}`);
  };

  const handleContinue = () => {
    navigation.navigate('FullBooking', {
      tripData: {
        origin: origin,
        destination: destination,
        date: selectedDate, // Reemplaza con la fecha que corresponda
        departureTime: departureTime, // Obtén la hora de salida de los parámetros
        arrivalTime: arrivalTime, // Obtén la hora de llegada de los parámetros
        price: price,
        selectedTrip: {
          company: company,
          // Agrega otros datos según sea necesario
        },
      },
      userData: {
        fullName: `${firstName} ${lastName}`,
        email: email,
        gender: gender,
        // Agrega otros datos según sea necesario
      },
    }); 
  };
  

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Header />
      <View style={styles.bookingContainer}>
        <View style={styles.summaryContainer}>
          <Text style={styles.summaryText}>Origin: {origin}</Text>
          <Text style={styles.summaryText}>Destination: {destination}</Text>
          <Text style={styles.summaryText}>Company: {company}</Text>
          <Text style={styles.summaryText}>Seat: {seat}</Text>
          <Text style={styles.summaryText}>Departure: {departureTime}</Text>
          <Text style={styles.summaryText}>Arrival: {arrivalTime}</Text>
          <Text style={styles.summaryText}>Price: {price}</Text>
        </View>

        <Text style={styles.label}>First Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your first name"
          value={firstName}
          onChangeText={(text) => setFirstName(text)}
        />

        <Text style={styles.label}>Last Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your last name"
          value={lastName}
          onChangeText={(text) => setLastName(text)}
        />

        <Text style={styles.label}>Gender</Text>
        <Picker
          selectedValue={gender}
          style={styles.input}
          onValueChange={(itemValue, itemIndex) => setGender(itemValue)}
        >
          <Picker.Item label="Male" value="male" />
          <Picker.Item label="Female" value="female" />
          <Picker.Item label="Other" value="other" />
        </Picker>

        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <View style={styles.buttonContainer}>
          <AppButton textButton="Back" color="#e38b3d" onPress={() => navigation.goBack()} >
            <Icon name="ios-arrow-back" size={20} color="white" style={{ marginRight: 10 }} />
          </AppButton>
          <AppButton textButton="Continue" color="#e38b3d" onPress={handleContinue} style={{ marginTop: 10}} >
            <Icon name="ios-arrow-forward" size={20} color="white" style={{ marginRight: 10 }} />
          </AppButton>
        </View>
        
      </View>
      <NavigationBar navigation={navigation} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  bookingContainer: {
    padding: 20,
    marginBottom: 60,
  },
  contentContainer: {
    paddingHorizontal: 20,
  },
  summaryContainer: {
    backgroundColor: '#e5e5e5',
    padding: 20,
    marginBottom: 20,
  },
  summaryText: {
    fontSize: 16,
    marginBottom: 5,
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    fontSize: 18,
  },
  
  buttonContainer: {        
    flexDirection: 'row', // Coloca los botones en la misma línea
    justifyContent: 'space-between', // Centra los botones horizontalmente
    marginTop: 20, // Espaciado superior
  },
  
});
