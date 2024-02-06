import { View, Text, StyleSheet } from "react-native";
import React, { useContext } from "react";
import { Path, Svg } from "react-native-svg";
import { AppContext } from "../../context/AppContext";

const ClassroomSection1 = () => {
  const { userDetails, setUserDetails } = useContext(AppContext);

  return (
    <View style={styles.box1}>
      <View style={{ flexDirection: "row" }}>
        <View>
          <Svg
            width="140"
            height="140"
            viewBox="0 0 116 116"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <Path
              d="M35.2831 100.147V100.168H24.1664C19.8952 100.168 16.4331 96.7059 16.4331 92.4351V21.7501C16.4331 17.4788 19.8952 14.0167 24.1664 14.0167H87.5977C91.8689 14.0167 95.331 17.4788 95.331 21.7501V40.0307C95.3317 40.7921 95.0329 41.5232 94.4991 42.0662C93.9653 42.6092 93.2394 42.9205 92.4781 42.9329C91.7168 42.9453 90.9812 42.6577 90.43 42.1324C89.8789 41.607 89.5565 40.886 89.5324 40.1249H89.5208V22.2431C89.5208 21.6021 89.2662 20.9874 88.813 20.5342C88.3598 20.081 87.7451 19.8264 87.1042 19.8264H24.6604C24.343 19.8264 24.0288 19.8889 23.7356 20.0103C23.4424 20.1318 23.176 20.3098 22.9516 20.5342C22.7272 20.7586 22.5491 21.025 22.4277 21.3182C22.3062 21.6114 22.2437 21.9257 22.2437 22.2431V91.9417C22.2437 92.259 22.3062 92.5733 22.4277 92.8665C22.5491 93.1597 22.7272 93.4261 22.9516 93.6505C23.176 93.8749 23.4424 94.0529 23.7356 94.1744C24.0288 94.2958 24.343 94.3583 24.6604 94.3583H35.0192C35.4092 94.3233 35.8022 94.3677 36.1746 94.4887C36.547 94.6097 36.891 94.8049 37.1859 95.0625C37.4808 95.32 37.7205 95.6346 37.8905 95.9873C38.0606 96.34 38.1574 96.7235 38.1753 97.1147C38.1931 97.5058 38.1315 97.8965 37.9943 98.2632C37.8571 98.6299 37.647 98.965 37.3767 99.2484C37.1065 99.5317 36.7817 99.7573 36.4218 99.9117C36.062 100.066 35.6747 100.146 35.2831 100.147Z"
              fill="black"
            />
            <Path
              d="M95.2165 97.1645C95.2165 99.0481 94.4325 100.05 92.6065 100.05C90.7805 100.05 89.7225 98.8977 89.7225 97.1645C89.7225 85.5104 82.2139 78.9627 70.5665 78.9627C58.9191 78.9627 51.4106 85.5104 51.4106 97.165C51.4106 98.7329 50.0853 100.05 48.5265 100.05C46.9678 100.05 45.9165 99.0278 45.9165 97.1645C45.9165 83.3914 56.8012 73.4667 70.5665 73.4667C84.3318 73.4667 95.2165 83.3914 95.2165 97.1645Z"
              fill="black"
            />
            <Path
              d="M71.0462 78.3C67.9879 78.3002 64.9982 77.3934 62.4552 75.6943C59.9123 73.9952 57.9303 71.5802 56.7599 68.7547C55.5896 65.9291 55.2835 62.8199 55.8803 59.8204C56.4771 56.8208 57.95 54.0656 60.1128 51.9032C61.5486 50.4674 63.2532 49.3284 65.1293 48.5514C67.0053 47.7743 69.0161 47.3744 71.0467 47.3744C73.0773 47.3744 75.088 47.7744 76.964 48.5515C78.84 49.3286 80.5446 50.4676 81.9805 51.9035C83.4163 53.3393 84.5553 55.0439 85.3323 56.92C86.1094 58.796 86.5093 60.8068 86.5093 62.8374C86.5093 64.868 86.1093 66.8787 85.3322 68.7547C84.5551 70.6307 83.4161 72.3353 81.9802 73.7711C80.5477 75.2115 78.8437 76.3534 76.9669 77.1308C75.0901 77.9082 73.0777 78.3056 71.0462 78.3ZM71.0501 52.2C65.1873 52.2 60.4168 56.9705 60.4168 62.8333C60.4168 68.6962 65.1873 73.4666 71.0501 73.4666C76.9129 73.4666 81.6834 68.6962 81.6834 62.8333C81.6834 56.9705 76.9129 52.2 71.0501 52.2Z"
              fill="black"
            />
          </Svg>
        </View>
        <View style={{ justifyContent: "center", marginLeft: 5 }}>
          <Text style={styles.userDetails}>
            {userDetails.firstName} {userDetails.lastName}
          </Text>
          <Text style={styles.userDetails}>{userDetails.rollNo}</Text>
          <Text style={styles.userDetails}>
            Semester {userDetails.semester}
          </Text>
        </View>
      </View>
      <View
        style={{
          backgroundColor: "white",
          position: "absolute",
          zIndex: -1,
          height: 1000,
          width: 1000,
        }}
      />
    </View>
  );
};

export default ClassroomSection1;

const styles = StyleSheet.create({
  box1: {
    position: "absolute",
    backgroundColor: "white",
    width: "100%",
    height: "30%",
    justifyContent: "center",
    alignItems: "center",
  },

  userDetails: {
    fontSize: 25,
    fontWeight: "800",
  },
});
