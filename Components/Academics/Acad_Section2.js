import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/core";

const Acad_Section2 = () => {
  const navigation = useNavigation();

  return (
    <View>
      <View style={styles.perLineCards}>
        <TouchableOpacity
          style={styles.cards}
          onPress={() => navigation.navigate("ResultClass")}
        >
          <Text style={styles.textColor}>Results</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.cards}
          onPress={() => navigation.navigate("TimeTableClass")}
        >
          <Text style={styles.textColor}>Time-Table</Text>
        </TouchableOpacity>
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
    marginBottom: 10,
    marginTop: 20,
  },

  perLineCards: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  textColor: {
    color: "white",
    marginBottom: 10,
    fontWeight: "400",
    fontSize: 18,
  },
});
