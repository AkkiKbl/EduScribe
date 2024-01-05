// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getAuth } from "firebase/auth";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB25ruSRJqUMuL01G77Xpfx_e-Uf4SYME4",
  authDomain: "eduscribe-4cbaa.firebaseapp.com",
  projectId: "eduscribe-4cbaa",
  storageBucket: "eduscribe-4cbaa.appspot.com",
  messagingSenderId: "165365443596",
  appId: "1:165365443596:web:f89cbc8fbf1620d6be9229",
};

const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export { auth };
