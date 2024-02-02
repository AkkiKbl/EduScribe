import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React from "react";

const InternSection2 = () => {
  const data = [
    {
      id: 1,
      internship: "Claysys",
      stream: "BCA",
      role: "Reactjs",
      period: 5,
    },
    {
      id: 2,
      internship: "Persistent",
      stream: "BCA",
      role: "UI/UX",
      period: 3,
    },
  ];

  return (
    <View>
      <View style={{ alignItems: "center" }}>
        <Text style={[styles.textColor, styles.headingText]}>BCA</Text>
        <View style={styles.line} />
      </View>
      <View>
        <View style={{ alignItems: "center" }}>
          <FlatList
            scrollEnabled={false}
            keyExtractor={(item) => item.id}
            data={data}
            renderItem={({ item }) => (
              <View>
                <View style={styles.internshipCards}>
                  <View style={styles.detailSection}>
                    <Text style={[styles.textColor, styles.detailHeading]}>
                      Company :
                    </Text>
                    <Text style={[styles.textColor, styles.detailInfo]}>
                      {item.internship}
                    </Text>
                  </View>
                  <View style={styles.detailSection}>
                    <Text style={[styles.textColor, styles.detailHeading]}>
                      Role :
                    </Text>
                    <Text style={[styles.textColor, styles.detailInfo]}>
                      {item.role}
                    </Text>
                  </View>
                  <View style={styles.detailSection}>
                    <Text style={[styles.textColor, styles.detailHeading]}>
                      Period :
                    </Text>
                    <Text style={[styles.textColor, styles.detailInfo]}>
                      {item.period} months
                    </Text>
                  </View>
                </View>
              </View>
            )}
          />
        </View>
      </View>
    </View>
  );
};

export default InternSection2;

const styles = StyleSheet.create({
  textColor: {
    color: "white",
  },
  headingText: {
    marginTop: 15,
    fontSize: 40,
    fontWeight: "600",
  },
  buttons: {
    backgroundColor: "black",
    width: "80%",
    height: 70,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  line: {
    backgroundColor: "white",
    height: 1,
    width: "40%",
    marginBottom: 20,
  },
  internshipTitle: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 10,
  },
  internshipCards: {
    backgroundColor: "black",
    height: 150,
    width: 400,
    marginBottom: 10,
    borderRadius: 10,
  },
  detailInfo: {
    marginLeft: 10,
    fontSize: 20,
  },
  detailHeading: {
    fontSize: 20,
    fontWeight: "500",
  },
  detailSection: {
    flexDirection: "row",
    marginTop: 15,
    marginLeft: 20,
    alignItems: "center",
  },
});
