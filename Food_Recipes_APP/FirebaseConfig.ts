// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

//Storage
import {getStorage} from "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2I3H0lS--g7ml-81gHYgqJ08bWDfFQQg",
  authDomain: "food-recipes-aa1e9.firebaseapp.com",
  projectId: "food-recipes-aa1e9",
  storageBucket: "food-recipes-aa1e9.appspot.com",
  messagingSenderId: "411815750774",
  appId: "1:411815750774:web:b8de4f2df4fb6766198357",
  measurementId: "G-8JJ90X77N4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage),
  });

//storage
export const storage=getStorage(app);

