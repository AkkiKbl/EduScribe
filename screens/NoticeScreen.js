import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import NoticeSection1 from "../Components/Notices/NoticeSection1";

const NoticeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <NoticeSection1 value={"Sports"} />
    </SafeAreaView>
  );
};

export default NoticeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#474747",
  },
});
