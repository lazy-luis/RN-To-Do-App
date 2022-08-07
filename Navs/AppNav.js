import Header from "../components/Header";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import AddToDo from "../screens/AddToDo";

export default AppNavigator = ({ listItems, removeListItem, addListItem }) => {
  const myAppStack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <myAppStack.Navigator>
        <myAppStack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "My To Do" }}
        />
        <myAppStack.Screen
          name="AddToDo"
          component={AddToDo}
          options={{ title: "Add A To Do Item" }}
        />
      </myAppStack.Navigator>
    </NavigationContainer>
  );
};
