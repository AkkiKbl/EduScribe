import { View, Text, TouchableOpacity, Image, StyleSheet, FlatList, useColorScheme } from "react-native";
import React from "react";
import { StatusBar } from "react-native";

const notice = () => {

  const data = [{
    id: "1",
    notice: "There will be a holiday on 26rd January"
  },
  {
    id: "2",
    notice: "ISA will start on 4th February"
  },
  {
    id: "3",
    notice: "Please collect your marksheet"
  }
  ]

  return (

    <View >
      <StatusBar
        barStyle="light-content" translucent backgroundColor={"#474747"} />
      <View style={{ marginLeft: 20 }}>
        <Text style={styles.titleText}>Notices</Text>
        <View style={styles.line} />
      </View>
      <View style={{ marginTop: 20, flex: 1, alignContent: "space-around" }} >
        <FlatList
          style={{ paddingStart: 10, flex: 1, alignContent: "space-around" }}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          data={data}
          renderItem={({ item }) =>
            <Text style={styles.cards}> {item.notice}</Text>}
        />
      </View>
    </View>
  );
};



export default notice;

const styles = StyleSheet.create({

  titleText: {
    marginTop: 20,
    fontWeight: "500",
    fontSize: 20,
    color: "white",
  },
  cards: {
    width: 180,
    height: 130,
    marginRight: 20,
    backgroundColor: "#171717",
    color: "white",
    borderRadius: 10,
    fontSize: 20,
    textAlign: "center",
    textAlignVertical: "center",
    fontWeight: "500"
  },
  line: {
    marginTop: 4,
    width: 150,
    height: 1,
    backgroundColor: "white",
  },
})