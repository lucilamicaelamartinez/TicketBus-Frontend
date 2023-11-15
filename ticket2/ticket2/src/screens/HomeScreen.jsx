import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Dimensions, TextInput, TouchableOpacity, ImageBackground, SafeAreaView } from 'react-native';
import NavigationBar from '../components/NavigationBar';
import { Header } from '../components/Header';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import Autocomplete from 'react-native-autocomplete-input';
import axios from 'axios';
import Icon from 'react-native-vector-icons/Ionicons';
import BackButton from '../components/BackButton';
import TicketBusApi from '../api/TicketBus';
import AsyncStorage from '@react-native-community/async-storage';
import { ScrollView } from 'react-native-gesture-handler';

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
    <SafeAreaView style={styles.container}>
    <ImageBackground source={require('../assets/login.jpg')} style={styles.backgroundImage}>
    <ScrollView style={{ flex : 1 }}>
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
        <View style={styles.searchContainer}>
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
        <View style={styles.searchButtonContainer}>
        <TouchableOpacity style={styles.searchButton}  onPress={handleSearch}>
          <Icon name="search" size={30} color="white" />
        </TouchableOpacity>
        <Text style={styles.searchText}>Search</Text>
        </View>
        </View>

        <View style={styles.navContainer}>
        <StatusBar/>
        <NavigationBar navigation={navigation} />
        </View>
    </ScrollView>
    </ImageBackground>
      </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'flex-end',
  },
  searchContainer: {
    marginHorizontal: 10,
    alignItems: 'center'
  },
  navContainer: {
    alignContent: 'flex-end'
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
  },
  calendar: {
    width: windowWidth - 20,
    marginBottom: 10,
  },
  selectedDate: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    fontSize: 20,
    width: '100%',
    textAlign: 'center',
    height: 50,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.5)', // Fondo del campo de entrada translúcido
  },
  searchButtonContainer: {
    backgroundColor: 'black',
    borderRadius: 25,
    width: 120,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginHorizontal: 20,
    marginBottom: 10
  },
  searchButton: {
    height: 50,
    justifyContent: 'center',
  },
  searchText: {
    color: 'white',
    fontSize: 20
  }
});

export default HomeScreen;


