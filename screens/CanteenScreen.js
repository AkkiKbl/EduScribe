import {
  View,
  Text,
  StyleSheet,
  Image,
  StatusBar,
  ScrollView,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Section_1 from "../Components/Canteen/Section_1";
import Section_2 from "../Components/Canteen/Section_2";
const CanteenScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Section_1 />
        <Section_2 />
      </ScrollView>
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
