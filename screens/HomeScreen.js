import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useFonts, Pacifico_400Regular } from "@expo-google-fonts/pacifico";
import Notice from "../Components/Home/Notice";
import WelcomeName from "../Components/Home/WelcomeName";
import React from "react";
import ClassroomDetails from "../Components/Home/ClassroomDetails";
import ServiceCards from "../Components/Home/ServiceCards";

const HomeScreen = () => {
  //Load fonts
  let [fontsLoaded] = useFonts({
    Pacifico_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <WelcomeName />
        <Notice />
        <ClassroomDetails />
        <View style={{ alignItems: "center", marginRight: 20 }}>
          <View style={styles.separator} />
        </View>
        <ServiceCards />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 20,
    backgroundColor: "#474747",
    color: "white",
  },
  welcome_1: {
    marginTop: 40,
    fontSize: 25,
    fontFamily: "Pacifico_400Regular",
  },
  welcome_2: {
    fontSize: 25,
    fontWeight: "bold",
  },
  separator: {
    width: 200,
    height: 1,
    backgroundColor: "white",
    marginTop: 20,
    opacity: 0.5,
  },
});
