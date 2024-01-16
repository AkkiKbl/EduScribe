import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Button,
  FlatList,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const ServiceCards = () => {
  const navigation = useNavigation();
  return (
    <View>
      {/* First line Cards */}
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          marginTop: 20,
        }}
      >
        <TouchableOpacity style={styles.card1}>
          <Text
            style={{ color: "white", textAlign: "center", marginBottom: 10 }}
          >
            Academics
          </Text>

          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={require("../../assets/HomeScreen/academics.png")}
              style={{
                width: 100,
                resizeMode: "contain",
              }}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.card2}
          onPress={() => navigation.navigate("Canteen")}
        >
          <Text
            style={{ color: "white", textAlign: "center", marginBottom: 10 }}
          >
            Canteen
          </Text>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={require("../../assets/HomeScreen/canteen.png")}
              style={{
                width: 80,
                resizeMode: "contain",
              }}
            />
          </View>
        </TouchableOpacity>
      </View>

      {/* Second Line Cards */}
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          marginTop: 20,
          marginBottom: 10,
        }}
      >
        <TouchableOpacity style={styles.card1}>
          <Text
            style={{ color: "white", textAlign: "center", marginBottom: 10 }}
          >
            Notices
          </Text>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={require("../../assets/HomeScreen/notices.png")}
              style={{
                width: 68,
                resizeMode: "contain",
              }}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card2}>
          <Text
            style={{ color: "white", textAlign: "center", marginBottom: 10 }}
          >
            Feedback
          </Text>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              marginLeft: 12,
            }}
          >
            <Image
              source={require("../../assets/HomeScreen/feedback.png")}
              style={{
                width: 75,
                resizeMode: "contain",
              }}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ServiceCards;

const styles = StyleSheet.create({
  card1: {
    width: 150,
    height: 150,
    backgroundColor: "#171717",
    flexDirection: "column-reverse",
    marginRight: 35,
    borderRadius: 10,
  },
  card2: {
    width: 150,
    height: 150,
    backgroundColor: "#171717",
    flexDirection: "column-reverse",
    borderRadius: 10,
  },
});
