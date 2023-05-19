/* eslint-disable no-console */
/* eslint-disable consistent-return */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/named */
import {
  signInWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
} from 'firebase/auth';
import { app, auth } from './firebase';

// export function login(email, password) {
//   const auth1 = getAuth(app);
//   const resultPromise = signInWithEmailAndPassword(auth1, email, password);
//   const promise2 = resultPromise.then((userCredential) => userCredential.email);
//   return promise2;
// }

// function callback(credential) {
//   return credential.email;
// }

// const callback2 = (credential) => credential.user.email;

// export function login(email, password) {
//   const auth1 = getAuth(app);
//   const resultPromise = signInWithEmailAndPassword(auth1, email, password);
//   const promise2 = resultPromise.then(callback2);
//   return promise2;
// }
// LOGIN CON FIREBASE
export async function login(email, password) {
  const auth1 = getAuth(app);
  const result = await signInWithEmailAndPassword(auth1, email, password);
  return result.user.email;
}

// CONTINUAR CON GOOGLE DESDE SIGNIN y CREATE ACCOUNT - FIREBASE
export async function signInWithGoogle() {
  const provider = new GoogleAuthProvider();
  try {
    const credentials = await signInWithPopup(auth, provider);
    return credentials.user;
  } catch (error) {
    console.log(error);
  }
}

// CREATE ACCOUNT CON FIREBASE
export async function register(email, password) {
  try {
    const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
    console.log(userCredentials);
  } catch (error) {
    console.log(error.message);
    console.log(error.code);
  }
}
