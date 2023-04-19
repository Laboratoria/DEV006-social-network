// aqui exportaras las funciones que necesites

/*export const myFunction = () => {
  // aqui tu codigo
  console.log('Hola mundo!');
};*/

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0De5zta4pJaSArAYFIwJyHIJTjSn3h_E",
  authDomain: "social-networks-rebeca.firebaseapp.com",
  projectId: "social-networks-rebeca",
  storageBucket: "social-networks-rebeca.appspot.com",
  messagingSenderId: "154286214072",
  appId: "1:154286214072:web:035ddc16d6130afe61dd4d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
