import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
const CanteenScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={{ color: "white" }}>
          <Text>Canteen</Text>
        </Text>
        <Image source={require("../assets/HomeScreen/academics.png")} />
      </View>
    </SafeAreaView>
  );
};

export default CanteenScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#474747",
  },
});
