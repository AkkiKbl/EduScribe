import { View, Text, StyleSheet, Switch, TouchableOpacity } from "react-native";
import React, { useState } from "react";

const Section_2 = () => {
  const [Veg, setVeg] = useState(false);
  const [NonVeg, setNonVeg] = useState(false);

  return (
    <View>
      {/* Filter buttons */}
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

      {/* Veg/NonVeg Switch Buttons */}
      <View style={{ flexDirection: "row" }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity
            style={[
              styles.switchContainer,
              { backgroundColor: Veg ? "green" : "#222" },
            ]}
            onPress={() => setVeg(!Veg)}
          >
            <View
              style={[
                styles.circle,
                { transform: [{ translateX: Veg ? 30 : 0 }] },
              ]}
            />
          </TouchableOpacity>
          <Text style={styles.switchText}>Veg</Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity
            style={[
              styles.switchContainer,
              { backgroundColor: NonVeg ? "green" : "#222" },
            ]}
            onPress={() => setNonVeg(!NonVeg)}
          >
            <View
              style={[
                styles.circle,
                { transform: [{ translateX: NonVeg ? 30 : 0 }] },
              ]}
            />
          </TouchableOpacity>
          <Text style={styles.switchText}>Non-Veg</Text>
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
  switchText: {
    color: "white",
    marginRight: 15,
    marginTop: 18,
    marginLeft: 10,
    fontSize: 16,
  },
  switchButtons: {
    marginTop: 5,
    marginLeft: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  switchContainer: {
    backgroundColor: "black",
    borderRadius: 40,
    width: 60,
    height: 28,
    justifyContent: "center",
    marginTop: 20,
    marginLeft: 20,
  },
  circle: {
    backgroundColor: "white",
    width: 30,
    height: 30,
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
  },
});

//    {/* Switch Buttons */}
//    <View style={styles.switchButtons}>
//    <Switch
//      value={Veg}
//      onValueChange={() => setVeg((previousState) => !previousState)}
//    />
//    <Text style={styles.switchText}>Veg</Text>
//    <Switch
//      value={NonVeg}
//      onValueChange={() => setNonVeg((previousState) => !previousState)}
//    />
//    <Text style={styles.switchText}>Non-Veg</Text>
//  </View>
