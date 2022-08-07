import React from "react";
import { Text, View, StyleSheet } from "react-native";

const Header = () => {
  return (
    <View style={headerStyleSheet.container}>
      <Text style={headerStyleSheet.headerText}> To-Do List </Text>
    </View>
  );
};

export const headerStyleSheet = StyleSheet.create({
  container: {
    backgroundColor: "teal",
    padding: 10,
    marginTop: 50,
  },
  headerText: {
    textAlign: "center",
    fontSize: 25,
    color: "white",
    fontWeight: "200",
  },
});

export default Header;
