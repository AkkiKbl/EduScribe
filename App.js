import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import CanteenScreen from "./screens/CanteenScreen";
import AcademicsScreen from "./screens/AcademicsScreen";
import InternshipsScreen from "./screens/InternshipsScreen";
import FeedbackScreen from "./screens/FeedbackScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useContext, useEffect, useState } from "react";
import ClassroomScreen from "./screens/ClassroomScreen";
import StudyMaterial from "./screens/StudyMaterial";
import { AppContext, AppProvider } from "./context/AppContext";
import { Text } from "react-native";

const Stack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();
const ClassroomStack = createNativeStackNavigator();

function ClassroomStackGroup() {
  return (
    <ClassroomStack.Navigator initialRouteName="Classroom">
      <ClassroomStack.Screen
        options={{ headerShown: false }}
        name="Classroom"
        component={ClassroomScreen}
      />
      <ClassroomStack.Screen
        options={{ headerShown: false }}
        name="StudyMaterial"
        component={StudyMaterial}
      />
    </ClassroomStack.Navigator>
  );
}

function HomeStackGroup() {
  return (
    <HomeStack.Navigator initialRouteName="Home">
      <HomeStack.Screen
        options={{ headerShown: false }}
        name="Home"
        component={HomeScreen}
      />
      <HomeStack.Screen
        options={{ headerShown: false }}
        name="Canteen"
        component={CanteenScreen}
      />
      <HomeStack.Screen
        options={{ headerShown: false }}
        name="Academics"
        component={AcademicsScreen}
      />
      <HomeStack.Screen
        options={{ headerShown: false }}
        name="Internships"
        component={InternshipsScreen}
      />
      <HomeStack.Screen
        options={{ headerShown: false }}
        name="Feedback"
        component={FeedbackScreen}
      />
      <HomeStack.Screen
        options={{ headerShown: false }}
        name="ClassroomGroupStack"
        component={ClassroomStackGroup}
      />
    </HomeStack.Navigator>
  );
}

function LoginStackGroup() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="Login"
        component={LoginScreen}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="HomeGroupStack"
        component={HomeStackGroup}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  useEffect(() => {
    const getData = async () => {
      const jsonValue = await AsyncStorage.getItem("user-pass");
      value = JSON.parse(jsonValue);
      if (value) {
        setIsLoggedIn(value.isLoggedIn);
      }
    };
    getData();
  }, []);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <AppProvider>
      <NavigationContainer>
        {isLoggedIn ? <HomeStackGroup /> : <LoginStackGroup />}
      </NavigationContainer>
    </AppProvider>
  );
}
