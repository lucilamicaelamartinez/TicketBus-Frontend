import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import NavigationBar from '../components/NavigationBar';
import { Header } from '../components/Header';

export const HomeScreen = ({navigation}) => {
  return (
    <>

    <View style={styles.container}>

      <Header />

      <Text>Home Screen</Text>
      <StatusBar style="auto" />

      <NavigationBar navigation={navigation} />
      
    </View>

    </>  
)
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'top',
    },
  });