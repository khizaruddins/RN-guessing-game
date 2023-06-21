import React, {useState, useEffect} from 'react'
import { Text, View, StyleSheet, FlatList } from 'react-native'
import { Title } from '../core/Title'
import { generateRandomBetween } from '../utils/utils'
import { NumberContainer } from '../core/NumberContainer'
import { Button } from '../core/Button'
import {VARS} from '../constants/constants';
import { Alert } from 'react-native'
import { Card } from '../core/Card'
import { InstructionText } from '../core/InstructionText'
import {Ionicons } from '@expo/vector-icons';
import { GuesslogItem } from '../core/GuesslogItem'


export const GameScreen = ({pickedNumber, isGameOver}) => {
  const initialGuess = generateRandomBetween(1, 100, pickedNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([initialGuess]);
  useEffect(()=> {
    if (currentGuess === pickedNumber) {
      isGameOver(guessRounds.length );
    }
  }, [currentGuess, pickedNumber, isGameOver]);
  useEffect(()=> {
    VARS.minBoundary = 1;
    VARS.maxBoundary = 100;
  }, [])
  const nexInputGuessHandler = (direction) => { // direction // lower, higher
    if ((direction === 'lower' && currentGuess < pickedNumber) || 
      (direction === 'greater' && currentGuess > pickedNumber)) {
        Alert.alert('Dont lie', 'You know that this is wrong...',
        [{text: 'Sorry', style: 'cancel'}])
        return;
    }
    if (direction === 'lower') {
      VARS.maxBoundary = currentGuess;
    } else {
      VARS.minBoundary = currentGuess + 1;
    }

    if (pickedNumber === currentGuess) {
      return;
    }
    const newRndNumber = generateRandomBetween(VARS.minBoundary, VARS.maxBoundary, currentGuess);
    setCurrentGuess(newRndNumber);
    setGuessRounds(prevGuess => [newRndNumber ,...prevGuess]);
  }

  const guessRoundListLength = guessRounds.length;
  return (
    <View style={styles.screen}>
      <Title title="Opponent's Guide"/>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText>
          Higher or Lower
        </InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <Button buttonPress={() => nexInputGuessHandler('lower')}>
              <Ionicons name='md-remove' size={24} color='white'></Ionicons>
            </Button>
          </View>
          <View style={styles.buttonContainer}>
            <Button buttonPress={() => nexInputGuessHandler('greater')}>
              <Ionicons name='md-add' size={24} color='white'></Ionicons>
            </Button>
          </View>
        </View>
      </Card>
      <View style={styles.listContainer}>
        <FlatList data={guessRounds} keyExtractor={(item)=> item} renderItem={(itemData) => <GuesslogItem roundNumber={guessRoundListLength - itemData.index} guess={itemData.index}></GuesslogItem>}></FlatList>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    marginTop: 40,
    alignItems: 'center'
  },
  buttonsContainer: {
    marginTop: 10,
    flexDirection: 'row'
  },
  buttonContainer: {
    flex: 1
  },
  listContainer: {
    flex: 1,
    padding: 16,
  }
})
