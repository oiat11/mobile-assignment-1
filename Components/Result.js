import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import colors from './colors';

const Result = ({ guess, randomNumber, attempts, onReset, onGuessAgain, onEndGame }) => {
  const isCorrect = guess === randomNumber;

  return (
    <View style={styles.cardContainer}>
      {isCorrect ? (
        <>
          <Text style={styles.message}>You guessed correct!</Text>
          <Text style={styles.textStyle}> Attempts used: {5 - attempts}</Text>
          <Image
            source={{ uri: `https://picsum.photos/id/${randomNumber}/100/100` }}
            style={styles.image}
          />
          <Button title="New Game" onPress={onReset} />
        </>
      ) : (
        <>
          <Text style={styles.message}>You did not guess correct!</Text>
          <View style={styles.buttonContainer}>
            <Button title="Guess Again" onPress={onGuessAgain} />
            <Button title="End Game" onPress={onEndGame} />
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
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
  textStyle: {
    padding: 10,
    alignSelf: "center",
  },
  image: {
    width: 100,
    height: 100,
    marginVertical: 20,
  },
  buttonContainer: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
});

export default Result;
