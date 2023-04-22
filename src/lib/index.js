// aqui exportaras las funciones que necesites

/*export const myFunction = () => {
  // aqui tu codigo
  console.log('Hola mundo!');
};*/

import { firebaseConfig } from "../firebase.config.js";
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);



export const createUser = () => {

  const email = document.getElementById('txtEmail')
  const password = document.getElementById('txtPassword')

  createUserWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    // Signed in
    user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
};

export const LoginUser = () =>{

  const email = document.getElementById('txtEmail')
  const password = document.getElementById('txtPassword')

  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
};

// Log out
export const logout = async () => {
  await signOut(auth);
}