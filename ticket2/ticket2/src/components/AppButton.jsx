import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

export const AppButton = ( { textButton, color } ) => {
  return (
    <>
    
      <TouchableOpacity>
        <Text style={{
          backgroundColor: color,
          color: 'white',
          padding: 10,
          marginTop: 10,
          textAlign: 'center',
          fontSize: 20,
        }}>{textButton}</Text>
      </TouchableOpacity>

    </>
  )
}

