import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const BookingButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>Crear Reserva</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignSelf: 'center',
    position: 'absolute',
    bottom: 300, // Adjust this value to move the button higher
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 32,
    fontFamily: 'Arial',
  },
});

export default BookingButton;
