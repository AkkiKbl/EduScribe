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
  // console.log(routes);
  console.log(directory);
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
            // console.log(folderRef.fullPath);
            data.push(folderRef.fullPath);
            // All the prefixes under listRef.
            // You may call listAll() recursively on them.
          });
          res.items.forEach((itemRef) => {
            // All the items under listRef.
          });
        })
        .catch((error) => {
          // Uh-oh, an error occurred!
        });
      setFolders(data);
    };
    fetchData();
  }, []);

  const Data = ["First Item", "Second Item"];

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ marginTop: 40 }}>
        <FlatList
          data={folders}
          renderItem={({ item }) => (
            <View style={{ alignItems: "center" }}>
              <TouchableOpacity>
                <Text style={styles.textColor}>{item}</Text>
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
    color: "blue",
    textDecorationLine: "underline",
  },
});
