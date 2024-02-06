import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Touchable,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const StudySection1 = () => {
  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.buttonView}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("StudyMaterialCourse", "FYBCA")}
        >
          <Text style={[styles.textColor, styles.textStyle]}>FYBCA</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={[styles.textColor, styles.textStyle]}>SYBCA</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={[styles.textColor, styles.textStyle]}>TYBCA</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default StudySection1;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "black",
    width: "80%",
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginTop: 50,
  },
  buttonView: {
    alignItems: "center",
    marginTop: 50,
  },
  textColor: {
    color: "white",
  },
  textStyle: { fontSize: 22, fontWeight: "600" },
});
