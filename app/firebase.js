// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUEd0oec7xF6t-IlRtRuB_vXye34P9Dl0",
  authDomain: "react-firebase-auth-4ddbe.firebaseapp.com",
  projectId: "react-firebase-auth-4ddbe",
  storageBucket: "react-firebase-auth-4ddbe.appspot.com",
  messagingSenderId: "86960069120",
  appId: "1:86960069120:web:6cc82953ec23dba565d6e5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);