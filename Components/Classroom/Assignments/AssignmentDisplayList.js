import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase";
import { useNavigation } from "@react-navigation/native";

const AssignmentDisplay = (routes) => {
  const filePath = routes.route.params;
  const [data, setData] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(
        collection(db, "assignments/" + filePath)
      );
      setData([]);
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        // console.log(doc.data());
        setData((oldObject) => [...oldObject, doc.data()]);
      });
    };
    fetchData();
  }, []);

  function navigateToDisplayAssignment(item) {
    navigation.navigate("AssignmentDisplayDetails", item);
  }

  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center", marginTop: 30 }}>
        <Text style={[styles.textColor, { fontSize: 36, fontWeight: "bold" }]}>
          Assignments
        </Text>
        <View style={styles.line} />
      </View>

      <FlatList
        data={data}
        extraData={data}
        renderItem={({ item }) => (
          <View style={{ alignItems: "center" }}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigateToDisplayAssignment(item)}
            >
              <Text
                style={[styles.textColor, { fontSize: 18, fontWeight: "600" }]}
              >
                {item.Assignment}
              </Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default AssignmentDisplay;

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
    marginBottom: 20,
  },
});
