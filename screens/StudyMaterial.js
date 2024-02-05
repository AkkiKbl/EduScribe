import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const StudyMaterial = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Test</Text>
    </SafeAreaView>
  );
};

export default StudyMaterial;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#474747",
  },
});
