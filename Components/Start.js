import { View, Text, TextInput, Button } from 'react-native'
import React, { useState } from 'react'
import Checkbox from 'expo-checkbox';

const Start = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
  
    const handleNameBlur = () => {
        if (!isValidName(name)) {
          setNameError('Please enter a valid name (non-numeric and more than 1 character).');
        } else {
          setNameError('');
        }
      };
    
      const handleEmailBlur = () => {
        if (!isValidEmail(email)) {
          setEmailError('Please enter a valid email address.');
        } else {
          setEmailError('');
        }
      };

    const isValidName = (name) => {
    return isNaN(name) && name.length > 1;
    }

    const isValidEmail = (email) => {
    return email.includes('@') && email.includes('.');
    }

    const handleStart = () => {
        let valid = true;
    
        if (!isValidName(name)) {
          setNameError('Please enter a valid name (non-numeric and more than 1 character).');
          valid = false;
        } else {
          setNameError('');
        }
    
        if (!isValidEmail(email)) {
          setEmailError('Please enter a valid email address.');
          valid = false;
        } else {
          setEmailError('');
        }
    
        if (valid) {
          Alert.alert('Success', `Name: ${name}, Email: ${email}`);
        }
      };

  return (
    <View>
      <Text>Welcome</Text>
      <Text>Name</Text>
        <TextInput value={name} onChangeText={setName} onBlur={handleNameBlur}/>
        {nameError ? <Text>{nameError}</Text> : null}
      <Text>Email Address</Text>
        <TextInput value={email} onChangeText={setEmail} onBlur={handleNameBlur}/>
        {emailError ? <Text>{emailError}</Text> : null}
        <Checkbox/> 
        <Text> I am not a robot</Text>
        <Button title="RESET" />
        <Button title="START" />
    </View>
  )
}

export default Start;