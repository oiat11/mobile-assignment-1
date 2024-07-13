import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Dimensions, Alert, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Result from './Result';
import GameOver from './GameOver';
import colors from './colors';

const Game = () => {
  const [randomNumber, setRandomNumber] = useState(null);
  const [guess, setGuess] = useState('');
  const [attempts, setAttempts] = useState(4);
  const [timer, setTimer] = useState(60);
  const [hintUsed, setHintUsed] = useState(false);
  const [hintRange, setHintRange] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [gameOverReason, setGameOverReason] = useState('');
  const intervalRef = useRef(null);

  useEffect(() => {
    setRandomNumber(generateRandomNumber());
    startTimer();

    return () => clearInterval(intervalRef.current);
  }, []);

  useEffect(() => {
    if (timer === 0) {
      setGameOverReason('You are out of time!');
      setGameOver(true);
      clearInterval(intervalRef.current);
    }
  }, [timer]);

  const startTimer = () => {
    intervalRef.current = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);
  };

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

    setShowResult(true);

    if (userGuess !== randomNumber) {
      setAttempts((prevAttempts) => {
        const newAttempts = prevAttempts - 1;
        if (newAttempts <= 0) {
          setGameOverReason('You are out of attempts.');
          setGameOver(true);
          return 0;
        } else {
          return newAttempts;
        }
      });
    }
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

  const resetGame = () => {
    clearInterval(intervalRef.current);
    setRandomNumber(generateRandomNumber());
    setGuess('');
    setAttempts(4);
    setTimer(60);
    setHintUsed(false);
    setHintRange(null);
    setShowResult(false);
    setGameOver(false);
    setGameOverReason('');
    startTimer();
  }

  const handleGuessAgain = () => {
    setGuess('');
    setShowResult(false);
  }

  const handleEndGame = () => {
    setGameOverReason('');
    setGameOver(true);
    clearInterval(intervalRef.current);
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <LinearGradient colors={[colors.gradientStart, colors.gradientEnd]} style={styles.gradient}>
        <View style={styles.container}>
        <View style={styles.restartButtonContainer}>
            <Button title="RESTART" onPress={resetGame} />
          </View>
          {gameOver ? (
            <GameOver reason={gameOverReason} onReset={resetGame} />
          ) : showResult ? (
            <Result
              guess={parseInt(guess, 10)}
              randomNumber={randomNumber}
              attempts={attempts}
              onReset={resetGame}
              onGuessAgain={handleGuessAgain}
              onEndGame={handleEndGame}
            />
          ) : (
            <View style={styles.cardContainer}>
              <Text style={styles.message}>Guess a Number Between 1 to 100</Text>
              <TextInput
                style={styles.input}
                value={guess}
                onChangeText={setGuess}
                keyboardType="numeric"
                onBlur={() => Keyboard.dismiss()}
              />
              <Text style={styles.textStyle}>Attempts left: {attempts}</Text>
              <Text style={styles.textStyle}>Timer: {timer}s</Text>
              {hintRange && <Text>Hint: The number is between {hintRange.min} and {hintRange.max}</Text>}
              <View style={styles.buttonContainer}>
                <Button color={colors.buttonColor} title="USE A HINT" onPress={handleHint} disabled={hintUsed} />
                <Button color={colors.buttonColor} title="SUBMIT GUESS" onPress={handleGuess} />
              </View>
            </View>
          )}
        </View>
      </LinearGradient>
    </TouchableWithoutFeedback>
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
    backgroundColor: colors.cardBackground,
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  message: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.messageColor,
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: colors.borderColor,
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
  restartButtonContainer: {
    position: "absolute",
    top: 200,
    right: 20,
  }
});

export default Game;
