import { StyleSheet, ImageBackground, SafeAreaView, Text } from 'react-native';
import { StartGameScreen } from './src/screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { GameScreen } from './src/screens/GameScreen';
import { Colors } from './src/constants/colors';
import { GameOverScreen } from './src/screens/GameOverScreen';
import { useFonts } from 'expo-font';


const styles = StyleSheet.create({
  rootScreen: {
    flex: 1
  },
  backgroundImg: {
    opacity: 0.25
  }
})

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [isOver, setIsGameOver] = useState(false);

  const [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });

  if(!fontsLoaded) {
      return <Text>app loading</Text>
  }
  const pickedNumberHandler = (pickedNumber) => {
    setUserNumber(pickedNumber);
  }
  const isGameOver = () => {
    setIsGameOver(true);
  }
  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />
  if (userNumber) {
    screen = <GameScreen pickedNumber={userNumber} isGameOver={isGameOver}/>
  }
  if (isOver) {
    screen = <GameOverScreen />
  }
  return (
    <LinearGradient colors={[Colors.primary650, Colors.secondary500]} style={styles.rootScreen}>
      <ImageBackground 
        resizeMode='cover' 
        source={{uri: 'https://images.unsplash.com/photo-1570303345338-e1f0eddf4946?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1071&q=80'}}
        style={styles.rootScreen}
        imageStyle={styles.backgroundImg}>
          <SafeAreaView style={styles.rootScreen}>
            {screen}
          </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}