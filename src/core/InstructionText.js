import React from 'react'
import { Text, StyleSheet } from 'react-native'
import { Colors } from '../constants/colors'

const styles = StyleSheet.create({
  instructionText: {
    fontFamily: 'open-sans',
    color: Colors.secondary500,
    fontSize: 24
  }
})
export const InstructionText = ({children}) => {
  return (
    <Text style={styles.instructionText}>{children}</Text>
  )
}
