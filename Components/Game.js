import { View, Text, TextInput, Button } from 'react-native'
import React, { useState, useEffect } from 'react'


const Game = () => {
    const [randomNumber, setRandomNumber] = useState(generateRandomNumber());

    function generateRandomNumber() {
        const number = Math.floor(Math.random() * 100) + 1;
        console.log('generateRandomNumber:', number);
        return number;
      }

  return (
    <View>
      <Button title="RESTART"/>
      <View>
      <Text>Guess a Number Between 1 to 100</Text>
      <TextInput></TextInput>
      <Text>Attempts left:</Text>
      <Text>Timer:</Text>
      <Button title="USE A HINT"/>
      <Button title="SUBMIT GUESS"/>
      </View>
    </View>
  )
}

export default Game;