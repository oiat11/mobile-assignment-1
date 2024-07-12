import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';

const Result = ({ guess, randomNumber, attempts, onReset, onGuessAgain }) => {
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
            <Button title="End Game" onPress={onReset} />
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: "80%",
    backgroundColor: "rgba(128, 128, 128, 0.8)",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  message: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#005df2",
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
    justifyContent: "space-around",
    width: "100%",
  },
});

export default Result;
