import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Acad_Section2 = () => {
  return (
    <View>
      <View style={styles.perLineCards}>
        <View style={styles.cards}>
          <Text style={styles.textColor}>Results</Text>
        </View>
        <View style={styles.cards}>
          <Text style={styles.textColor}>Time-Table</Text>
        </View>
      </View>
      <View style={styles.perLineCards}>
        <View style={styles.cards}>
          <Text style={styles.textColor}>Workshop</Text>
        </View>
        <View style={styles.cards}>
          <Text style={styles.textColor}>Pay Fees</Text>
        </View>
      </View>
    </View>
  );
};

export default Acad_Section2;

const styles = StyleSheet.create({
  cards: {
    backgroundColor: "black",
    width: "40%",
    height: 180,
    borderRadius: 10,
    flexDirection: "column-reverse",
    alignItems: "center",
  },

  perLineCards: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 30,
  },
  textColor: {
    color: "white",
    marginBottom: 10,
    fontWeight: "400",
    fontSize: 18,
  },
});
