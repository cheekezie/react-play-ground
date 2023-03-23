import { useState } from "react";
import { Button, FlatList, StyleSheet, View } from "react-native";
import Goalinput from "./components/Goalinput";
import Goalitem from "./components/Goalitem";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [goalTextLists, setGoalLists] = useState([]);
  const [modalIsVisible, showModal] = useState(false);

  const addGoalHandler = async (goalText) => {
    setGoalLists((currentGoals) => [
      ...currentGoals,
      { text: goalText, key: Math.random().toString() },
    ]);
    handleAddGoalModal();
  };

  const handleAddGoalModal = () => {
    showModal(!modalIsVisible);
  };

  const deleteGoal = async (key) => {
    setGoalLists((currentGoals) => {
      return currentGoals.filter((g) => g.key !== key);
    });
  };

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.container}>
        <Button
          color="white"
          title="Add New Goal"
          onPress={handleAddGoalModal}
        />
        <Goalinput
          onAddGoal={addGoalHandler}
          visible={modalIsVisible}
          onCloseModal={handleAddGoalModal}
        />
        <View style={styles.goalsContainrer}>
          <FlatList
            data={goalTextLists}
            renderItem={(itemData) => {
              return (
                <Goalitem goal={itemData.item} onDeleteGoal={deleteGoal} />
              );
            }}
            alwaysBounceVertical={false}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
    paddingHorizontal: 16,
    flex: 1,
    justifyContent: "flex-start",
  },
  goalsContainer: {
    flex: 1,
    paddingBottom: 20,
  },
});
