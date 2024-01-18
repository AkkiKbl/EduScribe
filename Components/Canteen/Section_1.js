import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ImageBackground,
  Image,
  ScrollView,
  TextInput,
} from "react-native";
import React from "react";
import image1 from "../../assets/CanteenScreen/image1.jpg";
import CanteenText from "../../assets/CanteenScreen/CanteenTextImage.png";
import searchIcon from "../../assets/CanteenScreen/Searchicon.png";
import { useState } from "react";

const Section_1 = () => {
  const [searchItem, setSearchItem] = useState("");
  return (
    <View style={styles.container}>
      <View style={styles.card1}>
        <View>
          <Image source={image1} style={styles.image1Style} />
        </View>
        <View style={styles.CanteenLogo}>
          <Image
            source={CanteenText}
            style={{ width: "70%", resizeMode: "contain" }}
          />
          <View style={styles.searchBar}>
            <Image
              source={searchIcon}
              style={{
                width: "8%",
                resizeMode: "contain",
                marginLeft: 18,
              }}
            />
            <View
              style={{
                width: 1,
                height: 30,
                backgroundColor: "black",
                borderRadius: 30,
                marginLeft: "5%",
              }}
            />
            <TextInput
              placeholder="Search item"
              value={searchItem}
              onChange={(text) => setSearchItem(text)}
              style={{
                width: "70%",
                height: 40,
                marginLeft: "5%",
                fontSize: 18,
                opacity: 0.6,
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Section_1;

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
    bottom: "10%",
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
