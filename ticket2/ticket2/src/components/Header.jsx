import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const Header = () => {
  return (
    <>
        <View style={styles.container}>
            <Text style={styles.title}>Ticket Bus</Text>
        </View>
    </>
  )
}

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'yellow',
      padding: 10,
      color: 'red',
      width: '100%',
    },
    title: {
        fontSize: 50,
        fontWeight: 'bold',

    },
  });
