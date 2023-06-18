import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Colors } from '../constants/colors'

export const NumberContainer = ({children}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: Colors.secondary500,
    padding: 24,
    borderRadius: 8,
    margin: 24, 
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: Colors.secondary500,
    fontSize: 36,
    fontFamily: 'open-sans-bold'
  }
})
