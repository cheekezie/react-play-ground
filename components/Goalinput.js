import { useState } from "react";
import {
  Button,
  Modal,
  StyleSheet,
  TextInput,
  View,
  Image,
} from "react-native";

const Goalinput = (props) => {
  const [goalText, setGoalText] = useState("");
  const goalInputHandler = async (goal) => {
    setGoalText(goal);
  };

  const addGoalHandler = async () => {
    props.onAddGoal(goalText);
    setGoalText("");
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={[styles.inputContainer, styles.modal]}>
        <Image style={styles.image} source={require("../assets/goal.jpeg")} />
        <TextInput
          style={styles.textInput}
          placeholder="add goal"
          value={goalText}
          onChangeText={goalInputHandler}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              color="purple"
              title="Cancel"
              onPress={props.onCloseModal}
            />
          </View>
          <View style={styles.button}>
            <Button color="purple" title="Add Goal" onPress={addGoalHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default Goalinput;

const styles = StyleSheet.create({
  inputContainer: {
    alignContent: "space-between",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    flex: 1,
  },
  textInput: {
    borderColor: "#ccc",
    borderWidth: 1,
    width: "100%",
    padding: 10,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  button: {
    backgroundColor: "white",
    width: "45%",
    borderRadius: 5,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },

  modal: {
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    marginTop: 50,
    elevation: 5,
  },
  image: {
    width: "100%",
    height: 200,
    marginBottom: 20,
    borderRadius: 10,
  },
});
