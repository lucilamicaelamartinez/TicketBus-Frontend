import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { HomeScreen } from '../screens/HomeScreen'
import { ProfileScreen } from '../screens/ProfileScreen'
import { BookingScreen } from '../screens/BookingScreen'
import BookingButton from '../components/BookingButton'

export const StackNavigator = () => {

  const Stack = createStackNavigator()

  return (

    <Stack.Navigator

      initialRouteName='Home'
    
    >

      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Booking" component={BookingButton} />
    </Stack.Navigator>

  )
}
