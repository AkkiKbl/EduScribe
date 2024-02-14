import { View, Text, StyleSheet } from "react-native";
import React from "react";

const AssignmentDisplayDetails = (routes) => {
  const data = routes.route.params;

  //   console.log(data);

  return (
    <View style={styles.container}>
      <View style={styles.topCard}>
        <Text style={[styles.textColor, { fontSize: 30 }]}>
          <Text> {data.Assignment}</Text>
        </Text>
      </View>
      <View style={styles.description}>
        <Text style={[styles.textColor, { fontSize: 20, textAlign: "center" }]}>
          <Text>Description : </Text>
          <Text>{data.description} </Text>
        </Text>
      </View>
      <View style={styles.bottomTab}>
        <View style={{ alignItems: "center", marginTop: 20 }}>
          <Text style={[styles.textColor, { fontSize: 16 }]}>
            Due Date: {data.duedate}
          </Text>
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
});
