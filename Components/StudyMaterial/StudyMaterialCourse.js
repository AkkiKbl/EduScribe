import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { storage } from "../../firebase";
import { ref, listAll } from "firebase/storage";

const StudyMaterialList = (props) => {
  const directory = props.route.params;

  const listRef = ref(
    storage,
    `gs://eduscribe-college.appspot.com/${directory}`
  );
  let data = [];
  const [folders, setFolders] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      await listAll(listRef)
        .then((res) => {
          res.prefixes.forEach((folderRef) => {
            data.push(folderRef.fullPath.split("/"));

            // All the prefixes under listRef.
            // You may call listAll() recursively on them.
          });
          res.items.forEach((itemRef) => {
            // All the items under listRef.
          });
          data.forEach((element, index) => {
            data[index] = element[1];
          });
        })

        .catch((error) => {
          // Uh-oh, an error occurred!
        });
      setFolders(data);
    };
    fetchData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ marginTop: 40 }}>
        <FlatList
          data={folders}
          renderItem={({ item }) => (
            <View style={{ alignItems: "center" }}>
              <TouchableOpacity>
                <View style={styles.button}>
                  <Text style={styles.textColor}>{item}</Text>
                </View>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default StudyMaterialList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#474747",
  },
  textColor: {
    color: "white",
    fontWeight: "700",
    fontSize: 24,
  },
  button: {
    backgroundColor: "black",
    height: 60,
    width: 240,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
});
