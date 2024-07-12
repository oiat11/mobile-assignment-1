import { View, Text, TextInput, Button, StyleSheet, Dimensions, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'
import { LinearGradient } from "expo-linear-gradient";


const Game = () => {
    const [randomNumber, setRandomNumber] = useState(generateRandomNumber());
    const [guess, setGuess] = useState('');
    const [attempts, setAttempts] = useState(4);

    function generateRandomNumber() {
        const number = Math.floor(Math.random() * 100) + 1;
        console.log('generateRandomNumber:', number);
        return number;
      }

      const handleGuess = () => {
        const userGuess = parseInt(guess, 10);
        if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
          Alert.alert('Invalid Guess', 'Please enter a number between 1 and 100.');
          return;
        }
    
        if (userGuess === randomNumber) {
          Alert.alert('Congratulations!', 'You guessed the correct number.');
        } else {
          Alert.alert('Wrong Guess', `Try again. The number is ${userGuess < randomNumber ? 'higher' : 'lower'}.`);
        }
      }


  return (
    <LinearGradient colors={["#5ec4ff", "#b0c6d4"]} style={styles.gradient}>
    <View style={styles.container}>
      <Button title="RESTART"/>
      <View>
      <Text>Guess a Number Between 1 to 100</Text>
      <TextInput value={guess} onChangeText={setGuess} keyboardType="numeric"/>
      <Text>Attempts left:</Text>
      <Text>Timer:</Text>
      <Button title="USE A HINT"/>
      <Button title="SUBMIT GUESS" onPress={handleGuess}/>
      </View>
    </View>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
    gradient: {
      flex: 1,
      width: Dimensions.get("window").width,
      height: Dimensions.get("window").height,
    },
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      },
  });

export default Game;