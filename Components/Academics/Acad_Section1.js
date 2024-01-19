import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import AcademicsText from "../../assets/AcademicsScreen/AcademicsText.png";
import AcademicsImage from "../../assets/AcademicsScreen/AcademicsImage.png";

const Acad_Section1 = () => {
  return (
    <View>
      <View style={styles.card1}>
        <View>
          <Image source={AcademicsImage} style={styles.image1Style} />
        </View>
        <View style={styles.CanteenLogo}>
          <Image
            source={AcademicsText}
            style={{ width: "70%", resizeMode: "contain" }}
          />
        </View>
      </View>
    </View>
  );
};

export default Acad_Section1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card1: {
    backgroundColor: "black",
    width: "100%",
    height: 420,
    borderBottomEndRadius: 30,
    borderBottomStartRadius: 30,
  },
  image1Style: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  line1: {
    position: "absolute",
    backgroundColor: "white",
    width: 100,
    height: 100,
  },
  CanteenLogo: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  searchBar: {
    backgroundColor: "white",
    width: "80%",
    height: 50,
    borderRadius: 30,
    flexDirection: "row",
    alignItems: "center",
    bottom: "12%",
  },
});
