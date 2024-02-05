import { View, Text, StyleSheet } from "react-native";
import React from "react";

const ClassroomSection1 = () => {
  return (
    <View>
      <View style={styles.box1}></View>
      <View style={styles.box2}></View>
    </View>
  );
};

export default ClassroomSection1;

const styles = StyleSheet.create({
  box1: {
    position: "absolute",
    backgroundColor: "white",
    width: "100%",
    height: 300,
  },
  box2: {
    marginTop: 200,
    backgroundColor: "black",
    width: "100%",
    height: "100%",
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
  },
});
