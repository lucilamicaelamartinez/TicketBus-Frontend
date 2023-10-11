import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { HomeScreen } from '../screens/HomeScreen'

export const StackNavigator = () => {

  const Stack = createStackNavigator()

  return (

    <Stack.Navigator

      initialRouteName='Home'
    
    >

      <Stack.Screen name="Home" component={HomeScreen} />

    </Stack.Navigator>

  )
}
