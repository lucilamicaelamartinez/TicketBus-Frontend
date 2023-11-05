import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { HomeScreen } from '../screens/HomeScreen'
import { ProfileScreen } from '../screens/ProfileScreen'
import { LastReservations } from '../screens/LastReservationsScreen'
import { ChooseTripScreen } from '../screens/ChooseTripScreen'
import { BookingScreen } from '../screens/BookingScreen'
import { FullBookingScreen } from '../screens/FullBooking'
import LoginScreen from '../screens/LoginScreen'
import { EditScreen } from '../screens/EditScreen'
import { RegisterScreen } from '../screens/RegisterScreen'

export const StackNavigator = () => {

  const Stack = createStackNavigator()

  return (

    <Stack.Navigator

      initialRouteName='Login'
    
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="LastReservations" component={LastReservations} />
      <Stack.Screen name="ChooseTrip" component={ChooseTripScreen} />
      <Stack.Screen name="Booking" component={BookingScreen} />
      <Stack.Screen name="FullBooking" component={FullBookingScreen} />
      <Stack.Screen name='Edit' component={EditScreen} />
      <Stack.Screen name='Register' component={RegisterScreen} />

    </Stack.Navigator>

  )
}
