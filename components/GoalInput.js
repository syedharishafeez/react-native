import React from "react";
import { View, TextInput, Button, Modal, StyleSheet } from "react-native";

const GoalsInput = props => {
  console.log("visible = ", props.visible);
  return (
    <Modal visible={props.visible} animationType="slide">
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <TextInput
          style={{
            borderBottomColor: "black",
            borderBottomWidth: 1,
            width: "70%",
            marginBottom: 20
          }}
          placeholder="Enter Goals"
          onChangeText={props.setGoalValue}
          value={props.enteredGoal}
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "40%"
          }}
        >
          <View style={style.buttonContainer}>
            <Button title="ADD" onPress={props.onAdd} />
          </View>
          <View style={style.buttonContainer}>
            <Button title="CANCEL" color="red" onPress={props.onCancel} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalsInput;

const style = StyleSheet.create({
  buttonContainer: {
    width: "50%",
    margin: 5
  }
});
