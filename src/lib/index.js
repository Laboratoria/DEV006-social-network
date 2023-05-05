// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBy7ytwRVA7WutSM-B2pbYrMohGBfYU9ys',
  authDomain: 'socialnetwork-easygym.firebaseapp.com',
  projectId: 'socialnetwork-easygym',
  storageBucket: 'socialnetwork-easygym.appspot.com',
  messagingSenderId: '306165904230',
  appId: '1:306165904230:web:9b9dd7bd7e0fdf5d248ea7'
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)
