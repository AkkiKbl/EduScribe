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
              <View style={{ marginLeft: 30, marginTop: 14 }}>
                <Text
                  style={[
                    styles.textColor,
                    { fontSize: 34, fontWeight: "600" },
                  ]}
                  numberOfLines={1}
                >
                  {item.Assignment}
                </Text>
                <Text
                  style={[styles.textColor, { width: "85%", marginTop: 5 }]}
                  numberOfLines={1}
                >
                  Description: {item.description}
                </Text>
                <Text style={styles.textColor}>Due Date : {item.duedate}</Text>
              </View>
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
    width: "85%",
    height: 120,
    borderRadius: 10,
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
