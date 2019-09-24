// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
import "firebase/firestore";

// Add the Firebase products that you want to use
import "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8zDQoV_0OF9AQJY94_AnW4JJsuS3j1lw",
  authDomain: "klaxoon-test.firebaseapp.com",
  databaseURL: "https://klaxoon-test.firebaseio.com",
  projectId: "klaxoon-test",
  storageBucket: "klaxoon-test.appspot.com",
  messagingSenderId: "455227482273",
  appId: "1:455227482273:web:b28f10bb47de7b6f6fd0e0"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get a reference to the database service
export const firestore = firebase.firestore();
