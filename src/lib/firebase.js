import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAu_C6IqpPtEotdS5a5sxQh6jS5sCgPUus",
    authDomain: "social-network-dev006.firebaseapp.com",
    projectId: "social-network-dev006",
    storageBucket: "social-network-dev006.appspot.com",
    messagingSenderId: "558822110218",
    appId: "1:558822110218:web:499baea90aaf4fd14cdbf3"
  };
  
  // Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);