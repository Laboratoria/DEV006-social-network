// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGCyb4Hrd0hz_JF_66Kp8DSSdRno1yvZ4",
  authDomain: "social-network-sn-13.firebaseapp.com",
  projectId: "social-network-sn-13",
  storageBucket: "social-network-sn-13.appspot.com",
  messagingSenderId: "1079332450213",
  appId: "1:1079332450213:web:36d74cd6c65200b327024c",
  measurementId: "G-J3G01ZSGYT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);