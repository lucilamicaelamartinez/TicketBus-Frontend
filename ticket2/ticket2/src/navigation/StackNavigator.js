import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { HomeScreen } from '../screens/HomeScreen'
import { ProfileScreen } from '../screens/ProfileScreen'
import { LastReservations } from '../screens/LastReservationsScreen'
import { ChooseTripScreen } from '../screens/ChooseTripScreen'
import { BookingScreen } from '../screens/BookingScreen'

export const StackNavigator = () => {

  const Stack = createStackNavigator()

  return (

    <Stack.Navigator

      initialRouteName='Home'
    
    >

      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="LastReservations" component={LastReservations} />
      <Stack.Screen name="ChooseTrip" component={ChooseTripScreen} />
      <Stack.Screen name="Booking" component={BookingScreen} />
      
    </Stack.Navigator>

  )
}
