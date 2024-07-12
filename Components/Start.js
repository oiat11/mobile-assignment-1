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

const Start = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [checked, setChecked] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

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

  return (
    <LinearGradient colors={["#5ec4ff", "#b0c6d4"]} style={styles.gradient}>
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
        <Confirm modalVisible={modalVisible} setModalVisible={setModalVisible} name={name} email={email}/>
      </View>
    </LinearGradient>
  );
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
    top: 80,
    textAlign: "center",
    width: "100%",
    color: "#005df2",
  },
  formContainer: {
    width: "80%",
    alignItems: "right",
    backgroundColor: "rgba(128, 128, 128, 0.8)",
    padding: 20,
    borderRadius: 10,
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
    fontWeight: "bold",
    color: "#6145ff",
    fontSize: 16,
    margin: 10,
  },
  checkBoxText: {
    color: "#6145ff",
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
