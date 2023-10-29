import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

export const AppButton = ( { textButton, color, onPress, children } ) => {
  return (
    <>
    
      <TouchableOpacity style={{ backgroundColor: color, padding: 10, borderRadius: 5 }} onPress={onPress}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          {children}
          <Text style={{ color: 'white', marginLeft: 10 }}>{textButton}</Text>
      </View>
      </TouchableOpacity>

    </>
  );
};

