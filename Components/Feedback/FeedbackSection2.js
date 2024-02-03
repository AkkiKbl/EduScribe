import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import React, { useEffect, useState } from "react";
import SelectDropdown from "react-native-select-dropdown";
import { doc, addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase";
import { SelectList } from "react-native-dropdown-select-list";

const FeedbackSection2 = () => {
  const countries = ["College", "Teacher", "Canteen"];
  const [feedbackItem, setFeedbackItem] = useState("None");
  const [message, setMessage] = useState("");

  const addToFirebase = async (feedbackItem, message) => {
    if (feedbackItem === "None") {
      ToastAndroid.showWithGravity(
        "Select Option",
        ToastAndroid.SHORT,
        ToastAndroid.CENTER
      );
    } else {
      const docRef = await addDoc(collection(db, "feedback"), {
        field: feedbackItem,
        message: message,
      });
      ToastAndroid.showWithGravity(
        "Submitted",
        ToastAndroid.SHORT,
        ToastAndroid.CENTER
      );
    }
  };

  const data = [
    { value: "College" },
    { value: "Teacher" },
    { value: "Canteen" },
  ];

  return (
    <View>
      <View style={{ alignItems: "center", marginTop: 20 }}>
        <SelectList
          setSelected={(val) => {
            setFeedbackItem(val);
          }}
          data={data}
          boxStyles={{ width: 300, backgroundColor: "white" }}
          dropdownStyles={{ backgroundColor: "white" }}
        />
      </View>
      <View>
        <Text style={[styles.textColor, styles.message]}>Message :</Text>
        <TextInput
          multiline
          textAlignVertical="top"
          numberOfLines={10}
          placeholder="Type Here..."
          style={styles.input}
          onChangeText={(text) => setMessage(text)}
        />
      </View>
      <View style={{ alignItems: "center" }}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => addToFirebase(feedbackItem, message)}
        >
          <Text style={[styles.textColor, { fontSize: 18 }]}> Submit! </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FeedbackSection2;

const styles = StyleSheet.create({
  container: {
    color: "white",
  },
  selectDropdown: {
    borderRadius: 5,
    backgroundColor: "black",
    color: "white",
  },
  selectOption: {
    alignItems: "center",
    marginTop: 20,
  },
  textColor: {
    color: "white",
  },
  message: {
    marginTop: 25,
    marginLeft: 20,
    fontSize: 18,
    fontWeight: "500",
  },
  input: {
    backgroundColor: "white",
    paddingLeft: 20,
    paddingTop: 20,
    borderRadius: 10,
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
  },
  button: {
    backgroundColor: "black",
    width: 150,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    marginTop: 20,
  },
});
