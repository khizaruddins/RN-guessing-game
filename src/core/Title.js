import React from 'react'
import { Text , StyleSheet} from 'react-native'
import { Colors } from '../constants/colors'

export const Title = ({title}) => {
  return (
    <Text style={styles.title}>{title}</Text>
  )
}

const styles = StyleSheet.create({
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 24,
    color: 'white',
    textAlign: 'center',
    borderWidth: 2,
    borderColor: 'white',
    padding: 12,
    marginBottom: 12
  }
})
