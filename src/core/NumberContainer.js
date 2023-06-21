import React from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import { Colors } from '../constants/colors'

export const NumberContainer = ({children}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </View>
  )
}

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: Colors.secondary500,
    padding: deviceWidth > 380 ? 24: 12,
    borderRadius: 8,
    margin: deviceWidth > 380 ? 24: 12, 
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: Colors.secondary500,
    fontSize: deviceWidth > 380 ? 36: 28,
    fontFamily: 'open-sans-bold'
  }
})
