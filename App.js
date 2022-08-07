import { useState } from "react";
import AppNav from "./Navs/AppNav";

export default function App() {
  const [toDoList, setToDoList] = useState([
    { key: "1", text: "Learn React Native", completed: false },
    { key: "2", text: "Learn React", completed: true },
    { key: "3", text: "Learn React Native", completed: false },
    { key: "4", text: "Learn React", completed: true },
    { key: "5", text: "Learn React Native", completed: true },
    { key: "6", text: "Learn React", completed: false },
  ]);

  const removeToDo = (key) => {
    setToDoList((prevToDoList) => {
      return prevToDoList.filter((item) => item.key !== key);
    });
  };

  const addToDo = (text) => {
    setToDoList((prevToDoList) => {
      return [
        { key: Math.random().toString(), text: text, completed: false },
        ...prevToDoList,
      ];
    });
  };

  return (
    <AppNav
      listItems={toDoList}
      removeListItem={removeToDo}
      addListItem={addToDo}
    />
  );
}
