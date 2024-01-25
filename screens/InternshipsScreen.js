import { View, Text, StyleSheet } from "react-native";
import React from "react";
import InternSection1 from "../Components/Internships/InternSection1";
import InternSection2 from "../Components/Internships/InternSection2";

const InternshipsScreen = () => {
  return (
    <View style={styles.container}>
      <InternSection1 />
      <InternSection2 />
    </View>
  );
};

export default InternshipsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#474747",
  },
});
