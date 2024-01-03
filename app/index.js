import { useState } from "react";
import {
  View,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
import { Stack, useRouter } from "expo-router";
import { TextInput } from "react-native-gesture-handler";
import { useFonts, Pacifico_400Regular } from "@expo-google-fonts/pacifico";

const Home = () => {
  const router = useRouter();

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  let [fontsLoaded] = useFonts({
    Pacifico_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <Stack.Screen options={{ headerShown: false }} />
      <View style={{}}>
        <Text
          style={{
            fontFamily: "Pacifico_400Regular",
            fontSize: 50,
            marginBottom: 25,
          }}
        >
          Welcome
        </Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Username"
          value={userName}
          onChangeText={(text) => setUserName(text)}
          style={styles.input}
        />

        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
          style={styles.input}
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={""} style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={""}
          style={[styles.button, styles.buttonOutline]}
        >
          <Text style={styles.buttonOutlineText}>Register</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  inputContainer: {
    width: "80%",
  },
  buttonContainer: {
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  button: {
    backgroundColor: "#0782F9",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonOutline: {
    backgroundColor: "white",
    marginTop: 5,
    borderColor: "#0782F9",
    borderWidth: 2,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
  buttonOutlineText: {
    color: "#0782F9",
    fontWeight: "700",
    fontSize: 16,
  },
});
