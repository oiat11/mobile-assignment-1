import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  Dimensions,
  Modal,
} from "react-native";
import React, { useState } from "react";
import Checkbox from "expo-checkbox";
import { LinearGradient } from "expo-linear-gradient";
import Confirm from "./Confirm";
import Game from "./Game";
import colors from "./colors";

const Start = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [checked, setChecked] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [screen, setScreen] = useState("Start"); 

  const handleNameBlur = () => {
    if (!isValidName(name)) {
      setNameError(
        "Please enter a valid name (non-numeric and more than 1 character)."
      );
    } else {
      setNameError("");
    }
  };

  const handleEmailBlur = () => {
    if (!isValidEmail(email)) {
      setEmailError("Please enter a valid email address.");
    } else {
      setEmailError("");
    }
  };

  const isValidName = (name) => {
    return isNaN(name) && name.length > 1;
  };

  const isValidEmail = (email) => {
    return email.includes("@") && email.includes(".");
  };

  const handleStart = () => {
    let valid = true;

    if (!isValidName(name)) {
      setNameError(
        "Please enter a valid name (non-numeric and more than 1 character)."
      );
      valid = false;
    } else {
      setNameError("");
    }

    if (!isValidEmail(email)) {
      setEmailError("Please enter a valid email address.");
      valid = false;
    } else {
      setEmailError("");
    }

    if (valid) {
      setModalVisible(true);
    }
  };

  const handleConfirm = () => {
    setModalVisible(false);
    setScreen("Game");
  };

  if (screen === "Start") {
    return (
      <LinearGradient colors={[colors.gradientStart, colors.gradientEnd]} style={styles.gradient}>
        <View style={styles.container}>
          <Text style={styles.welcomeMessage}>Welcome</Text>
          <View style={styles.formContainer}>
            <Text style={styles.textStyle}>Name</Text>
            <TextInput
              style={styles.input}
              value={name}
              onChangeText={setName}
              onBlur={handleNameBlur}
            />
            {nameError ? <Text style={styles.errorText}>{nameError}</Text> : null}
            <Text style={styles.textStyle}>Email Address</Text>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              onBlur={handleEmailBlur}
              keyboardType="email-address"
            />
            {emailError ? (
              <Text style={styles.errorText}>{emailError}</Text>
            ) : null}
            <View style={styles.checkboxContainer}>
              <Checkbox value={checked} onValueChange={setChecked} />
              <Text style={styles.checkBoxText}> I am not a robot</Text>
            </View>
            <View style={styles.buttonContainer}>
              <View style={styles.buttonWrapper}>
                <Button
                  title="RESET"
                  color="red"
                  onPress={() => {
                    setName("");
                    setEmail("");
                    setNameError("");
                    setEmailError("");
                    setChecked(false);
                  }}
                />
              </View>
              <View style={styles.buttonWrapper}>
                <Button
                  title="START"
                  color="red"
                  onPress={handleStart}
                  disabled={!checked}
                />
              </View>
            </View>
          </View>
          <Confirm
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
            name={name}
            email={email}
            handleConfirm={handleConfirm}
          />
        </View>
      </LinearGradient>
    );
  }


  if (screen === "Game") {
    return <Game />;
  }

  return null;
};


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
  welcomeMessage: {
    fontSize: 20,
    fontWeight: "bold",
    position: "absolute",
    top: 150,
    textAlign: "center",
    width: "100%",
    color: colors.messageColor,
  },
  formContainer: {
    width: "80%",
    alignItems: "right",
    backgroundColor: colors.cardBackground,
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
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
    fontWeight: "bold",
    color: colors.borderColor,
    fontSize: 16,
    margin: 10,
  },
  checkBoxText: {
    color: colors.borderColor,
  },
  errorText: {
    color: "red",
    marginBottom: 10,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  buttonWrapper: {
    flex: 1,
    margin: 5,
  },

});

export default Start;
