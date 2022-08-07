import { Button, FlatList, StyleSheet, View } from "react-native";
import { useState } from "react";
import ListItem from "../components/ListItem";

const HomeScreen = ({ navigation, route }) => {
  const [toDoList, setToDoList] = useState([
    { key: "1", text: "Learn React Native", completed: false },
    { key: "2", text: "Learn React", completed: true },
    { key: "3", text: "Learn React Native", completed: false },
    { key: "4", text: "Learn React", completed: true },
    { key: "5", text: "Learn React Native", completed: true },
    { key: "6", text: "Learn React", completed: false },
  ]);

  const removeToDo = (key) => {
    setToDoList(toDoList.filter((item) => item.key !== key));
  };

  const AddToDoItem = (text) => {
    setToDoList([
      ...toDoList,
      { key: Math.random().toString(), text, completed: false },
    ]);
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <Button
        title="A Add New To Do"
        onPress={() => navigation.navigate("AddToDo", { AddToDoItem })}
      />
      <View style={styles.listContainer}>
        <FlatList
          data={toDoList}
          renderItem={({ item }) => (
            <ListItem item={item} removeItem={removeToDo} />
          )}
        />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  listContainer: {
    flex: 1,
    padding: 20,
    marginTop: 30,
  },
});
