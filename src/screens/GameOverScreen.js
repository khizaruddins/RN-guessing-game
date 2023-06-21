import React from 'react'
import { Image, View, StyleSheet, Text, Dimensions } from 'react-native'
import { Title } from '../core/Title'
import { Colors } from '../constants/colors'
import { Button } from '../core/Button'

export const GameOverScreen = ({roundsNumber, userNumber, onStartNewGame}) => {
  return (
    <View style={styles.rootContainer}>
      <Title title={'Game Over'} />
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require('../../assets/success.png')} />
      </View>
      <Text style={styles.summaryText}>
        Your Phone needed 
        <Text style={styles.highlight}> {roundsNumber} </Text> 
        rounds to guess the number 
        <Text style={styles.highlight}> {userNumber} </Text>.
      </Text>
      <Button buttonPress={onStartNewGame}>Start New Game</Button>
    </View>
  )
}

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  rootContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    padding: 24,
  },
  imageContainer: {
    width: deviceWidth < 380 ? 150: 300,
    height: deviceWidth < 380 ? 150: 300,
    borderRadius: deviceWidth < 380 ? 75: 150,
    borderWidth: 3,
    borderColor: Colors.primary700,
    overflow: 'hidden',
    margin: 36,
  },
  image: {
    width: '100%',
    height: '100%'
  },
  summaryText: {
    fontFamily: 'open-sans',    
    fontSize: 24,
    textAlign: 'center',
    marginVertical: 24
  },
  highlight: {
    fontFamily: 'open-sans-bold',
    color: Colors.primary500,
  }
})
