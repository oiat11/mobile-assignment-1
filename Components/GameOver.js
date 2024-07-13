import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import colors from './colors';

const GameOver = ({ reason, onReset }) => {
  return (
    <View style={styles.cardContainer}>
      <Text style={styles.message}>The game is over</Text>
      <Image
        source={require('../assets/emoji.png')}
        style={styles.image}
      />
      <Text style={styles.textStyle}>{reason}</Text>
      <Button title="New Game" onPress={onReset} />
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
    color: colors.messageColor,
  },
  image: {
    width: 100,
    height: 100,
    marginVertical: 20,
  },
});

export default GameOver;
