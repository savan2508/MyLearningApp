import { StatusBar } from "expo-status-bar";
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { useState } from "react";

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoal(enteredText);
  }

  function addGoalHandler() {
    setCourseGoals((currentGoals) => [...currentGoals, enteredGoal]);
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Course Goal"
          onChangeText={goalInputHandler}
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalContainer}>
        <Text style={styles.goalTitleText}>Goal List...</Text>
        <ScrollView>
          {courseGoals.map((goal) => (
            <View style={styles.goalItem} key={goal}>
              <Text style={styles.goalItemText}>{goal}</Text>
            </View>
          ))}
        </ScrollView>
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
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
    marginRight: 10,
    marginLeft: 10,
  },
  textInput: {
    width: "70%",
    borderColor: "#cccccc",
    borderWidth: 1,
    padding: 10,
  },
  goalContainer: {
    flex: 5,
  },
  goalItem: {
    margin: 8,
    padding: 10,
    borderRadius: 6,
    backgroundColor: "#530acc",
  },
  goalItemText: {
    color: "#ffffff",
  },
  goalTitleText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#8e42a3",
  },
});
