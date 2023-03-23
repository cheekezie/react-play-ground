import { StatusBar } from "expo-status-bar";
import { Pressable, StyleSheet, Text, View } from "react-native";

const Goalitem = (props) => {
  const deleteGoal = () => {
    props.onDeleteGoal(props.goal.key);
  };
  return (
    <Pressable
      onPress={deleteGoal}
      android_ripple={{ color: "#ddd" }}
      style={({ pressed }) => pressed && styles.pressedItem}
    >
      <View style={styles.goalList}>
        <Text style={styles.goalText}>{props.goal.text}</Text>
      </View>
    </Pressable>
  );
};

export default Goalitem;

const styles = StyleSheet.create({
  goalList: {
    borderRadius: 10,
    backgroundColor: "purple",
    padding: 10,
    marginBottom: 10,
  },
  goalText: {
    color: "#fff",
  },
  pressedItem: {
    opacity: 0.5,
  },
});
