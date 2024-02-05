import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import ClassroomSection1 from "../Components/Classroom/ClassroomSection1";

const ClassroomScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ClassroomSection1 />
    </SafeAreaView>
  );
};

export default ClassroomScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#474747",
  },
});
