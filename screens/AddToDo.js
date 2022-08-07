import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const AddToDo = ({ navigation, route }) => {
  const [text, setText] = useState("");
  const addNewToDo = () => {
    setText("");
    route.params.AddToDoItem(text);
  };
  return (
    <View style={addStyles.container}>
      <Text>Add To Do</Text>
      <TextInput
        placeholder="Add To Do"
        value={text}
        onChangeText={(text) => setText(text)}
        style={addStyles.input}
      />
      <TouchableOpacity style={addStyles.button} onPress={() => addNewToDo()}>
        <Text style={addStyles.buttonText}>Add To Do</Text>
      </TouchableOpacity>
    </View>
  );
};

const addStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "teal",
    borderStyle: "dotted",
    borderRadius: 8,
    padding: 10,
    backgroundColor: "#fcfcfc",
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
  },
  button: {
    backgroundColor: "teal",
    padding: 10,
    marginVertical: 10,
    borderRadius: 8,
    width: "50%",
    textAlign: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 14,
    fontWeight: "200",
  },
});

export default AddToDo;
