import { View, Text, Modal, Button, StyleSheet } from "react-native";
import React from "react";

const Confirm = ({ modalVisible, setModalVisible, name, email }) => {
  return (
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
      <View style={styles.modalContainer}>
        <View style={styles.modalView}>
          <Text style={styles.textStyle}>Hello {name}</Text>
          <Text style={styles.textStyle}>Here is the email you entered: {email}</Text>
          <Text style={styles.textStyle}>If it's not correct, please go back and enter again.</Text>
          <View style={styles.buttonContainer}>
            <View style={styles.buttonWrapper}>
          <Button title="Go back" color="red" onPress={() => setModalVisible(false)} />
          </View>
          <View style={styles.buttonWrapper}>
          <Button title="Continue" color="blue" onPress={() => alert("Submitted!")} />
          </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalView: {
    margin: 20,
    backgroundColor: "grey",
    borderRadius: 10,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  textStyle:{
    color: "#4900a3",
    fontSize: 16,
    margin: 10,
    alignSelf: "right",
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

export default Confirm;
