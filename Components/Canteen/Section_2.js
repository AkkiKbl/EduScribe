import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Section_2 = () => {
  return (
    <View>
      <View style={{ justifyContent: "space-around", flexDirection: "row" }}>
        <View style={styles.buttons}>
          <Text style={{ color: "white" }}>Meal</Text>
        </View>
        <View style={styles.buttons}>
          <Text style={{ color: "white" }}>Snacks</Text>
        </View>
        <View style={styles.buttons}>
          <Text style={{ color: "white" }}>Drinks</Text>
        </View>
      </View>
    </View>
  );
};

export default Section_2;

const styles = StyleSheet.create({
  buttons: {
    backgroundColor: "#171717",
    width: "25%",
    height: 32,
    borderRadius: 40,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});
