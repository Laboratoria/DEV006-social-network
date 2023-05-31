/* eslint-disable no-console */
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  getRedirectResult,
  GoogleAuthProvider,
  signInWithRedirect,
} from 'firebase/auth';
import { auth } from './firebase';

export function registerUser(email, password) {
  console.log(email, password);

  return createUserWithEmailAndPassword(auth, email, password);
}

export function userLogin(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export function registerGoogle() {
  const provider = new GoogleAuthProvider();
  return signInWithRedirect(auth, provider);
}

export function redirectResult() {
  return getRedirectResult(auth);
}
