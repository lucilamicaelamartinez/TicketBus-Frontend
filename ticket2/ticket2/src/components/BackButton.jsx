import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const BackButton = ({ onPress, isFirstScreen }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={isFirstScreen ? null : onPress}>
      <Icon name="arrow-back" size={30} color="white" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    top: 20, // Ajusta la posición vertical según tus necesidades
    left: 10, // Ajusta la posición horizontal según tus necesidades
    zIndex: 1, // Asegura que el botón esté en la parte superior
  },
});

export default BackButton;