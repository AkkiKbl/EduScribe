import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../firebase";
import { useNavigation } from "@react-navigation/native";

const AssignmentsCourses = (routes) => {
  const courseClass = routes.route.params;
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const docRef = doc(db, "assignments", "courses");
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setData(docSnap.data());
      } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
      }
    };

    fetchData();
  }, []);

  function navigateToAssignment(item) {
    const path = courseClass + "/" + item;
    navigation.navigate("AssignmentDisplayList", path);
  }

  //   console.log(data[courseClass]);
  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center", marginTop: 30 }}>
        <Text style={[styles.textColor, { fontSize: 36, fontWeight: "bold" }]}>
          Courses
        </Text>
        <View style={styles.line} />
      </View>

      <FlatList
        data={data[courseClass]}
        extraData={data}
        renderItem={({ item }) => (
          <View style={{ alignItems: "center" }}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigateToAssignment(item)}
            >
              <Text
                style={[styles.textColor, { fontSize: 18, fontWeight: "600" }]}
              >
                {item}
              </Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default AssignmentsCourses;

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
