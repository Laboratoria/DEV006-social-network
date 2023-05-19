// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBjhOESemBSDaB-vCAqUKB0spcDfn3wy2w',
  authDomain: 'socialnetwork-foodiegram.firebaseapp.com',
  projectId: 'socialnetwork-foodiegram',
  storageBucket: 'socialnetwork-foodiegram.appspot.com',
  messagingSenderId: '169678372302',
  appId: '1:169678372302:web:3fb784e61d7135daf3ff9f',
  measurementId: 'G-59SY6E4Z0D',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const create = createUserWithEmailAndPassword;
