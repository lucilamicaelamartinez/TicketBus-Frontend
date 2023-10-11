
import React from 'react'
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { Header } from '../components/Header';
import NavigationBar from '../components/NavigationBar';

export const ProfileScreen = ( ) => {
  return (
    <>

    <View style={styles.container}>

    <Header />

    <Text>Profile Screen</Text>
    <StatusBar style="auto" />

    <NavigationBar />

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