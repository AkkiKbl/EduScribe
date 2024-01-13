import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Attendance from "./ClassroomDetails/Attendance";

const ClassroomDetails = () => {
  let internships = 5;
  let deadlines = 2;
  let department = "BCA";

  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <View style={styles.container}>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Text style={styles.bcaText}>{department}</Text>
          <View style={styles.line} />
        </View>

        <View style={{ flex: 1, flexDirection: "row" }}>
          {/* Card 1 */}
          <TouchableOpacity style={styles.card1}>
            <Text
              style={{
                color: "white",
                fontSize: 16,
                fontWeight: "300",
                marginLeft: 10,
                marginTop: 15,
              }}
            >
              Internships:
            </Text>
            <Text
              style={{
                color: "white",
                fontSize: 30,
                marginLeft: 10,
                marginTop: 5,
                fontWeight: "700",
              }}
            >
              {internships}
            </Text>
          </TouchableOpacity>

          {/* Card2 */}

          <TouchableOpacity style={styles.card2}>
            <Text
              style={{
                color: "white",
                textAlign: "center",
                fontWeight: "300",
                marginBottom: 10,
                fontSize: 20,
                fontWeight: "500",
              }}
            >
              Attendance
            </Text>

            <View style={{ alignItems: "center" }}>
              <View style={styles.attendanceLine} />
            </View>
            <Attendance />
          </TouchableOpacity>
        </View>

        {/* Card 3 */}
        <View style={{ flex: 1, flexDirection: "row" }}>
          <TouchableOpacity style={styles.card3}>
            <Text
              style={{
                color: "white",
                fontSize: 16,
                fontWeight: "300",
                marginLeft: 10,
                marginTop: 15,
              }}
            >
              Deadlines:
            </Text>
            <Text
              style={{
                color: "white",
                fontSize: 30,
                marginLeft: 10,
                marginTop: 5,
                fontWeight: "700",
              }}
            >
              {deadlines}
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 20,
          }}
        >
          {/* Card 4 */}

          <TouchableOpacity style={styles.card4}>
            <Text
              style={{
                color: "white",
                textAlign: "center",
                fontWeight: "400",
                fontSize: 15,
              }}
            >
              Classroom
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ClassroomDetails;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    width: 350,
    height: 380,
    borderRadius: 10,
    backgroundColor: "#171717",
  },
  bcaText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 25,
    textAlign: "center",
    paddingTop: 10,
  },
  line: {
    width: 150,
    height: 1,
    backgroundColor: "white",
    marginTop: 5,
    opacity: 0.6,
  },
  card1: {
    width: 150,
    height: 100,
    backgroundColor: "#424242",
    marginLeft: 20,
    marginTop: 20,
    borderRadius: 10,
  },
  card2: {
    width: 150,
    height: 215,
    backgroundColor: "#424242",
    marginLeft: 10,
    marginTop: 20,
    borderRadius: 10,
    flexDirection: "column-reverse",
  },
  card3: {
    width: 150,
    height: 100,
    backgroundColor: "#424242",
    marginLeft: 20,
    borderRadius: 10,
  },
  card4: {
    width: 200,
    height: 40,
    backgroundColor: "#424242",
    justifyContent: "center",
    borderRadius: 20,
  },
  attendanceLine: {
    backgroundColor: "#222222",
    width: 100,
    height: 1,
    marginBottom: 5,
    opacity: 0.6,
  },
});
