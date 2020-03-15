import React from "react";
import { View, TextInput, Button, Modal } from "react-native";

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
        <Button title="ADD" onPress={props.onAdd} />
      </View>
    </Modal>
  );
};

export default GoalsInput;
