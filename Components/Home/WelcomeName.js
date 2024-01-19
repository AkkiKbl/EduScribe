import { View, Text, StyleSheet } from "react-native";
import React from "react";

const welcomeName = () => {
  let firstName = "Rohan" + "!";

  return (
    <View style={{ color: "white" }}>
      <Text style={styles.welcome_1}>Hello</Text>
      <Text style={styles.welcome_2}>{firstName}</Text>
    </View>
  );
};

export default welcomeName;

const styles = StyleSheet.create({
  welcome_1: {
    marginLeft: 20,
    fontSize: 25,
    fontFamily: "Pacifico_400Regular",
    color: "white",
  },
  welcome_2: {
    marginLeft: 20,
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
  },
});
