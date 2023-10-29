import React from 'react'
import { StyleSheet, Text, Image, View } from 'react-native'


export const Header = () => {
  return (
    <>
        <View style={styles.container}>
        <Image
        source={require('/home/lucilam/Documentos/Front/TicketBus-Frontend/ticket2/ticket2/assets/logo.png')} 
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
      padding: 10,
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
