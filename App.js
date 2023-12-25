import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import { GoalItem } from "./components/GoalItem";
import { GoalInput } from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [goalModalVisible, setGoalModelVisible] = useState(false);

  function addGoalHandler(enteredGoal) {
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { text: enteredGoal, id: Math.random().toString() },
    ]);
    endAddGoalHandler();
  }

  function deleteGoalHandler(id) {
    setCourseGoals((courseGoals) => {
      return courseGoals.filter((goal) => goal.id !== id);
    });
  }

  function startAddGoalHandler() {
    setGoalModelVisible(true);
  }

  function endAddGoalHandler() {
    setGoalModelVisible(false);
  }

  return (
    <View style={styles.appContainer}>
      <Button
        title="Add New Goal"
        color="#5e0acc"
        onPress={startAddGoalHandler}
      />
      {goalModalVisible && (
        <GoalInput
          visible={goalModalVisible}
          onAddGoal={addGoalHandler}
          onCancel={endAddGoalHandler}
        />
      )}
      <View style={styles.goalContainer}>
        <Text style={styles.goalTitleText}>Goal List...</Text>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return (
              <GoalItem
                text={itemData.item.text}
                id={itemData.item.id}
                onDeleteItem={deleteGoalHandler}
              />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingLeft: 5,
  },

  goalContainer: {
    flex: 5,
  },

  goalTitleText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#8e42a3",
  },
});
