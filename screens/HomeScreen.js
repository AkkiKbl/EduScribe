import { View, Text, StyleSheet, ScrollView, StatusBar } from "react-native";
import { useFonts, Pacifico_400Regular } from "@expo-google-fonts/pacifico";
import Notice from "../Components/Home/Notice";
import WelcomeName from "../Components/Home/WelcomeName";
import React, { useEffect, useState } from "react";
import ClassroomDetails from "../Components/Home/ClassroomDetails";
import ServiceCards from "../Components/Home/ServiceCards";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { db } from "../firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import { SafeAreaView } from "react-native-safe-area-context";
import Loading from "../Components/Loading";

const HomeScreen = () => {
  const [userDetails, setUserDetails] = useState("");

  useEffect(() => {
    const getData = async () => {
      const jsonValue = await AsyncStorage.getItem("user-pass");
      const value = JSON.parse(jsonValue);

      const fetchData = async () => {
        const q = query(
          collection(db, "stud_users"),
          where("rollNo", "==", value.username),
          where("password", "==", value.password)
        );
        const userDoc = await getDocs(q);

        const data1 = userDoc.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setUserDetails(data1[0]);
      };
      fetchData();
    };

    getData();
  }, []);

  //Load fonts
  let [fontsLoaded] = useFonts({
    Pacifico_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={"#474747"} />

      {userDetails ? (
        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            <WelcomeName user={userDetails} />
            <Notice />
            <ClassroomDetails user={userDetails} />
            <View style={{ alignItems: "center", marginRight: 20 }}>
              <View style={styles.separator} />
            </View>
            <ServiceCards />
          </View>
        </ScrollView>
      ) : (
        <Loading />
      )}
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#474747",
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
