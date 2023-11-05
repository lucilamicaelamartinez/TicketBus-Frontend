import React from 'react'
import { StyleSheet, Text, Image, View } from 'react-native'
import logo from '../assets/logo.png'

export const Header = () => {
  return (
    <>
        <View style={styles.container}>
        <Image
        source={logo} 
        style={styles.logo}
      />
        </View>
    </>
  )
}

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#e38b3d',
      padding: 0,
      width: '100%',
      height: 100,
    },
    logo: {
      width: 100, // Ancho de tu logotipo
      height: 100, // Alto de tu logotipo,
      resizeMode: 'contain',
      flex: 1,

    },
  });
