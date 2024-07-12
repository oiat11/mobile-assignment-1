import { View, Text, Modal, Button, StyleSheet } from "react-native";
import React from "react";

const Confirm = ({ modalVisible, setModalVisible, name, email }) => {
  return (
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
      <View style={styles.modalContainer}>
        <View style={styles.modalView}>
          <Text>Hello {name}</Text>
          <Text>Here is the email you entered: {email}</Text>
          <Text>If it's not correct, please go back and enter again.</Text>
          <Button title="Go back" onPress={() => setModalVisible(false)} />
          <Button title="Continue" onPress={() => alert("Submitted!")} />
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
  
});

export default Confirm;
