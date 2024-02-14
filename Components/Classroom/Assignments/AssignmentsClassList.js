import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { db } from "../../../firebase";
import {
  collection,
  collectionGroup,
  doc,
  getDoc,
  getDocs,
} from "firebase/firestore";
import { useNavigation } from "@react-navigation/native";

const AssignmentsList = () => {
  const navigation = useNavigation();

  function navigateToCourse(item) {
    navigation.navigate("AssignmentCourses", item);
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle={"light-content"} backgroundColor={"#474747"} />
      <View style={{ alignItems: "center", marginTop: 30 }}>
        <Text style={[styles.textColor, { fontSize: 36, fontWeight: "bold" }]}>
          Class
        </Text>
        <View style={styles.line} />
      </View>
      <View style={{ alignItems: "center", marginTop: 30 }}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigateToCourse("FYBCA")}
        >
          <Text style={[styles.textColor, { fontSize: 20, fontWeight: "600" }]}>
            FYBCA
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigateToCourse("SYBCA")}
        >
          <Text style={[styles.textColor, { fontSize: 20, fontWeight: "600" }]}>
            SYBCA
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigateToCourse("TYBCA")}
        >
          <Text style={[styles.textColor, { fontSize: 20, fontWeight: "600" }]}>
            TYBCA
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AssignmentsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#474747",
  },
  textColor: {
    color: "white",
  },
  button: {
    backgroundColor: "black",
    width: 180,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  line: {
    width: "70%",
    height: 1,
    backgroundColor: "white",
    marginTop: 5,
  },
});
