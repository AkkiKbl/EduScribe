import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Button,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const ServiceCards = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* First line Cards */}
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          marginTop: 20,
        }}
      >
        <View style={styles.card1}>
          <Text
            style={{ color: "white", textAlign: "center", marginBottom: 10 }}
          >
            Notice
          </Text>
          <View></View>
        </View>
        <TouchableOpacity
          style={styles.card2}
          onPress={() => navigation.navigate("Canteen")}
        >
          <Text
            style={{ color: "white", textAlign: "center", marginBottom: 10 }}
          >
            Canteen
          </Text>
        </TouchableOpacity>
      </View>

      {/* Second Line Cards */}
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          marginTop: 20,
          marginBottom: 10,
        }}
      >
        <View style={styles.card1}>
          <Text
            style={{ color: "white", textAlign: "center", marginBottom: 10 }}
          >
            Academic
          </Text>
          <View></View>
        </View>
        <View style={styles.card2}>
          <Text
            style={{ color: "white", textAlign: "center", marginBottom: 10 }}
          >
            Feedback
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ServiceCards;

const styles = StyleSheet.create({
  card1: {
    width: 150,
    height: 150,
    backgroundColor: "#171717",
    flexDirection: "column-reverse",
    marginRight: 35,
    borderRadius: 10,
  },
  card2: {
    width: 150,
    height: 150,
    backgroundColor: "#171717",
    flexDirection: "column-reverse",
    borderRadius: 10,
  },
});
