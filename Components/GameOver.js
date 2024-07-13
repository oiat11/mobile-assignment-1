import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';

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
});

export default GameOver;
