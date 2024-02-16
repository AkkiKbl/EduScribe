import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { ref, uploadBytes, uploadString } from "firebase/storage";
import * as FileSystem from "expo-file-system";
import { storage } from "../../../firebase";
import * as RNFS from "react-native-fs";
import RNFetchBlob from "rn-fetch-blob";
import { encode } from "base-64";
import * as DocumentPicker from "expo-document-picker";

const AssignmentDisplayDetails = (routes) => {
  const data = routes.route.params;
  const [selectedFile, setSelectedFile] = useState({ name: "Upload" });
  const [uploadProgress, setUploadProgress] = useState(0);

  const source = {};

  let data1 = new FormData();

  const pickDocument = async () => {
    try {
      // const result = await DocumentPicker.pickSingle({
      //   type: [DocumentPicker.types.allFiles],
      //   copyTo: "cachesDirectory",
      // });

      // let result = await DocumentPicker.getDocumentAsync();
      // const fileUri = result.assets[0].uri.replace("file:///", "file://");

      // console.log(fileUri);

      const result = (await DocumentPicker.getDocumentAsync({})).assets[0];
      const uri = result.uri;
      const fileName = result.name;
      // console.log(result);

      if (uri) {
        // const fileInfo = await FileSystem.getInfoAsync(uri);
        // const mimeType = result.mimeType;

        await uploadDocumentToFirebase(uri, fileName); // Upload to Firebase
      } else {
        console.log("File selection cancelled");
      }
    } catch (error) {
      console.log("Error picking file:", error);
    }
  };

  const uploadDocumentToFirebase = async (uri, fileName) => {
    try {
      const response = await fetch(uri);
      const blob = await response.blob(); // Access the file's blob content

      // Build the storage reference path
      const storageRef = ref(storage, fileName);

      // Upload the file to Firebase storage
      uploadBytes(storageRef, blob).then((snapshot) => {
        console.log("Uploaded a blob or file!");
      });
    } catch (error) {
      console.error("Error uploading document:", error.message);
      // Handle errors gracefully, e.g., display an error message to the user
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.topCard}>
        <Text style={[styles.textColor, { fontSize: 32, fontWeight: "600" }]}>
          <Text> {data.Assignment}</Text>
        </Text>
      </View>
      <View style={{ alignItems: "center" }}>
        <View style={styles.description}>
          <Text
            style={[styles.textColor, { fontSize: 20, textAlign: "center" }]}
          >
            <Text>Description : </Text>
            <Text>{data.description} </Text>
          </Text>
        </View>
      </View>
      <View style={styles.bottomTab}>
        <View style={{ alignItems: "center", marginTop: 20 }}>
          <Text style={[styles.textColor, { fontSize: 16 }]}>
            Due Date: {data.duedate}
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => pickDocument()}
          >
            <Text style={{ fontSize: 16 }}>Upload</Text>
          </TouchableOpacity>
          {/* <Image
            source={{ uri: decodeURIComponent(selectedFile.uri) }}
            style={{ width: 100, resizeMode: "cover" }}
          /> */}
        </View>
      </View>
    </View>
  );
};

export default AssignmentDisplayDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#474747",
  },
  topCard: {
    width: "100%",
    height: 200,
    backgroundColor: "black",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  textColor: {
    color: "white",
  },
  description: {
    alignItems: "center",
    marginTop: 20,
    width: "80%",
  },
  bottomTab: {
    width: "100%",
    height: 150,
    backgroundColor: "black",
    position: "absolute",
    bottom: 0,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  button: {
    backgroundColor: "white",
    width: "40%",
    height: 35,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
});
