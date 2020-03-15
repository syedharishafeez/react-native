import React, { useState } from "react";
import GoalsList from "./components/GoalsList";
import GoalInput from "./components/GoalInput";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList
} from "react-native";

export default function App() {
  const [enteredGoal, setGoal] = useState("");
  const [totalGoals, goalList] = useState([]);
  const [isModalVisible, showModal] = useState(false);
  const setGoalValue = enteredValue => {
    setGoal(enteredValue);
  };

  const onDelete = deleteItem => {
    const setTotalGoals = totalGoals.filter(item => item.key !== deleteItem);
    return goalList(setTotalGoals);
  };
  const onAdd = () => {
    goalList([
      ...totalGoals,
      { key: Math.random().toString(), value: enteredGoal }
    ]);
    showModal(false);
  };

  const setModal = () => {
    showModal(true);
  };

  return (
    <View>
      <View style={{ margin: 50 }}>
        <Button title="Add Goal" onPress={setModal} />
      </View>
      <GoalInput
        visible={isModalVisible}
        setGoalValue={setGoalValue}
        enteredGoal={enteredGoal}
        onAdd={onAdd}
      />
      <FlatList
        style={{ marginBottom: 20 }}
        data={totalGoals}
        renderItem={itemData => {
          return <GoalsList itemData={itemData} onDelete={onDelete} />;
        }}
      />
      {/* <ScrollView>
        {totalGoals.map(item => (
          <View
            style={{
              borderColor: "black",
              backgroundColor: "#ccc",
              borderWidth: 1,
              margin: 10,
              paddingVertical: 10
            }}
          >
            <Text>{item}</Text>
          </View>
        ))}
      </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
