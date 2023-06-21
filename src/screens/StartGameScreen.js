import React, {useState} from 'react'
import { View, TextInput, StyleSheet, Alert, useWindowDimensions, KeyboardAvoidingView, ScrollView, StatusBar } from 'react-native'
import { Button } from '../core/Button'
import { Colors } from '../constants/colors'
import { Title } from '../core/Title'
import { Card } from '../core/Card'
import { InstructionText } from '../core/InstructionText'

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: deviceHeight < 380 ? 30: 100,
    alignItems: 'center'
  },
  numberInput: {
    height: 50,
    fontSize: 32,
    borderBottomColor: Colors.secondary500,
    borderBottomWidth: 2,
    color: Colors.secondary500,
    marginVertical: 8,
    fontWeight: 'bold',
    width: 50,
    textAlign: 'center'
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  buttonContainer: {
    flex: 1
  }
})

export const StartGameScreen = ({onPickNumber}) => {
  const [enteredNumber, setEnteredNumber]=useState('');
  const { height } = useWindowDimensions();

  const numberInputHandler = (enteredNumber)  => {
    setEnteredNumber(enteredNumber);
  }

  const confirmHandler = () => {
    const parsedNumber = parseInt(enteredNumber);
    if (isNaN(parsedNumber) || parsedNumber <=0 || parsedNumber > 99) {
      Alert.alert('Invalid Number', 'Number has to be between 0 and 99', 
      [{text: 'Okay', style: 'destructive', onPress:  () => setEnteredNumber('')}])
      return;
    }
    onPickNumber(parsedNumber);
  }

  const marginTopDistance = height > 380 ? 30 : 100;

  return (
    <>
      <StatusBar style="light" />
      <ScrollView>
        <KeyboardAvoidingView style={styles.screen} behavior='position'>
          <View style={[styles.rootContainer, {marginTop: marginTopDistance}]}>
            <Title title="Guess my number" />
            <Card>
              <InstructionText>
                Enter a number
              </InstructionText>
              <TextInput 
                style={styles.numberInput} 
                maxLength={2} 
                keyboardType='number-pad' 
                autoCapitalize='none'
                onChangeText={numberInputHandler}
                value={enteredNumber}
                autoCorrect={false} />
                <View style={styles.buttonsContainer}>
                  <View style={styles.buttonContainer}>
                    <Button buttonPress={() => setEnteredNumber('')}> Reset</Button>
                  </View>
                  <View style={styles.buttonContainer}>
                    <Button buttonPress={confirmHandler}>Confirm</Button>
                  </View>
                </View>
            </Card>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </>
  )
}
