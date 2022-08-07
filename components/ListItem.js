import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const ListItem = ({ item, removeItem }) => {
  return (
    <View style={listItemStyles.container}>
      <Text style={listItemStyles.listText}>{item.text}</Text>
      <TouchableOpacity onPress={() => removeItem(item.key)}>
        <Text style={listItemStyles.removeText}>- Remove</Text>
      </TouchableOpacity>
    </View>
  );
};

const listItemStyles = StyleSheet.create({
  container: {
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
  },
  listText: {
    fontSize: 18,
    color: "teal",
  },
  removeText: {
    color: "firebrick",
    fontSize: 10,
    padding: 5,
    fontWeight: "900",
  },
});

export default ListItem;
