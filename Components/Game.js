import { View, Text, TextInput, Button, StyleSheet, Dimensions, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'
import { LinearGradient } from "expo-linear-gradient";


const Game = () => {
    const [randomNumber, setRandomNumber] = useState(null);
    const [guess, setGuess] = useState('');
    const [attempts, setAttempts] = useState(4);
    const [timer, setTimer] = useState(60);
    const [hintUsed, setHintUsed] = useState(false);
    const [hintRange, setHintRange] = useState(null);
    

    useEffect(() => {
        setRandomNumber(generateRandomNumber());
    
        const interval = setInterval(() => {
          setTimer((prevTimer) => {
            if (prevTimer <= 1) {
              clearInterval(interval);
              Alert.alert('Game Over', 'Time is up!');
              return 0;
            }
            return prevTimer - 1;
          });
        }, 1000);

        return () => clearInterval(interval);
      }, []);


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
          setAttempts((prevAttempts) => {
            const newAttempts = prevAttempts - 1;
            if (newAttempts <= 0) {
              Alert.alert('Game Over', `You've used all your attempts. The number was ${randomNumber}.`);
              return 0;
            } else {
              Alert.alert('Wrong Guess', `Try again. The number is ${userGuess < randomNumber ? 'higher' : 'lower'}.`);
              return newAttempts;
            }
          });
        }
        setGuess('');
      }

      const handleHint = () => {
        if (!hintUsed) {
          setHintUsed(true);
          const range = generateHintRange(randomNumber);
          setHintRange(range);
        }
      }
    
      function generateHintRange(number) {
        const min = Math.max(1, number - 10);
        const max = Math.min(100, number + 10);
        return { min, max };
      }
    

  return (
    <LinearGradient colors={["#5ec4ff", "#b0c6d4"]} style={styles.gradient}>
    <View style={styles.container}>
      <Button title="RESTART"/>
      <View style={styles.cardContainer}>
      <Text style={styles.message}>Guess a Number Between 1 to 100</Text>
      <TextInput style={styles.input} value={guess} onChangeText={setGuess} keyboardType="numeric"/>
      <Text style={styles.textStyle}>Attempts left: {attempts} </Text>
      <Text style={styles.textStyle}>Timer: {timer}s</Text>
      {hintRange && <Text>Hint: The number is between {hintRange.min} and {hintRange.max}</Text>}
      <View style={styles.buttonContainer}>
      <Button color="blue" title="USE A HINT" onPress={handleHint} disabled={hintUsed}/>
      <Button color="blue" title="SUBMIT GUESS" onPress={handleGuess}/>
        </View>
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
      cardContainer: {
        width: "80%",
        alignItems: "right",
        backgroundColor: "rgba(128, 128, 128, 0.8)",
        padding: 20,
        borderRadius: 10,
      },
      message: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#005df2",
        marginBottom: 10,
      },
      input: {
        height: 40,
        borderColor: "#6145ff",
        borderBottomWidth: 3,
        marginBottom: 10,
        padding: 10,
        width: "100%",
      },
      textStyle: {
        padding: 10,
        alignSelf: "center",
      },
      buttonContainer: {
        marginTop: 10,
        justifyContent: "space-around",
        width: "100%",
      },
  });

export default Game;