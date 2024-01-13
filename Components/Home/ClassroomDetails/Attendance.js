import { View, Text, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import * as Progress from "react-native-progress";

const Attendance = () => {
  const [attendance, setAttendance] = useState(0);

  useEffect(() => {
    setAttendance(0.6);
  }, []);

  return (
    <View
      style={{
        alignItems: "center",
        alignContent: "center",
        flex: 1,
        justifyContent: "center",
      }}
    >
      <View style={styles.progressCircle}>
        <Progress.Circle
          progress={attendance}
          size={110}
          borderWidth={0}
          color="white"
          thickness={6}
          strokeCap="round"
          showsText
        />
      </View>
    </View>
  );
};

export default Attendance;

const styles = StyleSheet.create({
  progressCircle: {},
});
