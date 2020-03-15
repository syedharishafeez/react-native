import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const GoalsList = props => {
  return (
    <TouchableOpacity onPress={() => props.onDelete(props.itemData.item.key)}>
      <View
        style={{
          borderColor: "black",
          backgroundColor: "#ccc",
          borderWidth: 1,
          margin: 10,
          paddingVertical: 10
        }}
      >
        <Text>{props.itemData.item.value}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default GoalsList;
