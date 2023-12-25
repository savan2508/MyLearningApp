import { Pressable, Text, View } from "react-native";
import { StyleSheet } from "react-native";
import { useState } from "react";

export function GoalItem(props) {
  const [buttonPressed, setButtonPressed] = useState(false);

  function handlePress() {
    if (!buttonPressed) {
      setButtonPressed(true);
    } else {
      props.onDeleteItem(props.id);
    }
  }

  return (
    <Pressable onPress={handlePress}>
      <View style={[styles.goalItem, buttonPressed && styles.buttonPressed]}>
        <Text
          style={[styles.goalItemText, buttonPressed && styles.strikeThrough]}
        >
          {props.text}
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 10,
    borderRadius: 6,
    backgroundColor: "#530acc",
  },
  buttonPressed: {
    backgroundColor: "rgba(89,79,140,0.32)",
  },
  goalItemText: {
    color: "#ffffff",
  },
  strikeThrough: {
    textDecorationLine: "line-through",
  },
});
