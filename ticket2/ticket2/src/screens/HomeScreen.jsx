import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Dimensions, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import NavigationBar from '../components/NavigationBar';
import { Header } from '../components/Header';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import Autocomplete from 'react-native-autocomplete-input';
import axios from 'axios';
import Icon from 'react-native-vector-icons/Ionicons';
import BackButton from '../components/BackButton';

const windowWidth = Dimensions.get('window').width;

LocaleConfig.locales['en'] = {
  monthNames: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],
  monthNamesShort: [
    'Jan.',
    'Feb.',
    'Mar.',
    'Apr.',
    'May.',
    'Jun.',
    'Jul.',
    'Aug.',
    'Sep.',
    'Oct.',
    'Nov.',
    'Dec.',
  ],
  dayNames: [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ],
  dayNamesShort: ['Sun.', 'Mon.', 'Tue.', 'Wed.', 'Thu.', 'Fri.', 'Sat.'],
};

LocaleConfig.defaultLocale = 'en';

export const HomeScreen = ({navigation}) => {
  const [selectedDate, setSelectedDate] = useState('');
  const [originQuery, setOriginQuery] = useState('');
  const [destinationQuery, setDestinationQuery] = useState('');
  const [citiesData, setCitiesData] = useState([]);
  const [filteredOriginCities, setFilteredOriginCities] = useState([]);
  const [filteredDestinationCities, setFilteredDestinationCities] = useState([]);

  useEffect(() => {
    // Obtain the list of cities in Argentina from the OpenWeatherMap API
    axios
      .get(
        'https://api.openweathermap.org/data/2.5/box/city?bbox=-75,-55,-21,-54,10&appid=b5067a51376c8a1dbd948e40aef80be3'
      )
      .then((response) => {
        const cities = response.data.list.map((city) => city.name);
        setCitiesData(cities);
      })
      .catch((error) => {
        console.error('Error fetching the list of cities:', error);
      });
  }, []);

  useEffect(() => {
    // Filter origin and destination cities as the user types
    const filteredOrigin = citiesData.filter((city) =>
      city.toLowerCase().includes(originQuery.toLowerCase())
    );
    const filteredDestination = citiesData.filter((city) =>
      city.toLowerCase().includes(destinationQuery.toLowerCase())
    );
    setFilteredOriginCities(filteredOrigin);
    setFilteredDestinationCities(filteredDestination);
  }, [originQuery, destinationQuery, citiesData]);

  const handleSearch = () => {
    // Navega a la pantalla "ChooseTripScreen" con los parámetros de origen y destino
    navigation.navigate('ChooseTrip', {
      origin: originQuery,
      destination: destinationQuery,
      selectedDate: selectedDate, 
    });
  };

  return (
    <>
    <ImageBackground source={require('../assets/login.jpg')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <BackButton onPress={() => navigation.goBack()} 
          isFirstScreen={!navigation.canGoBack()}
        /> 
        <Header />
        <Calendar
          current={selectedDate}
          onDayPress={(day) => setSelectedDate(day.dateString)}
          style={styles.calendar}
          theme={{
            calendarBackground: 'transparent', // Fondo transparente para ver la imagen de fondo
            textSectionTitleColor: 'black',
            dayTextColor: 'black',
            monthTextColor: 'black',
            arrowColor: 'black',
            selectedDayBackgroundColor: 'orange',
            'stylesheet.calendar.header': {
              week: {
                marginTop: 5,
                flexDirection: 'row',
                justifyContent: 'space-between',
              },
            },
          }}
        /> 
        <Text style={styles.selectedDate}>Selected Date: {selectedDate}</Text>
        <TextInput
          style={styles.input}
          value={originQuery}
          onChangeText={setOriginQuery}
          placeholder="Origin"
        />
        <TextInput
          style={styles.input}
          value={destinationQuery}
          onChangeText={setDestinationQuery}
          placeholder="Destination"
        />
        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
          <Icon name="search" size={30} color="white" />
        </TouchableOpacity>
        <StatusBar style="auto" />
        <NavigationBar navigation={navigation} />
      </View>
    </ImageBackground>
    </>  
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
  },
  calendar: {
    width: windowWidth - 20,
    marginBottom: 20,
  },
  selectedDate: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    width: windowWidth - 20,
    padding: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.5)', // Fondo del campo de entrada translúcido
  },
  searchButton: {
    backgroundColor: 'black',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;


