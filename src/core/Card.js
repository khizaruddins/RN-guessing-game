import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Colors } from '../constants/colors'

const styles = StyleSheet.create({
  inputContainer: {
    alignItems: 'center',
    padding: 16,
    marginTop: 36,
    marginHorizontal: 24,
    borderRadius: 8,
    backgroundColor: Colors.primary700,
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: {
      width: 0, height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    justifyContent:'center'
  },
})

export const Card = ({children}) => {
  return (
    <View style={styles.inputContainer}>{children}</View>
  )
}
