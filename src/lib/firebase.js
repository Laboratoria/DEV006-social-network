/* eslint-disable import/no-extraneous-dependencies */
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCe2vaz8aRBEWYlG2J1sf7ZtCOHZ-vdA2E',
  authDomain: 'easygym-sn-d107b.firebaseapp.com',
  projectId: 'easygym-sn-d107b',
  storageBucket: 'easygym-sn-d107b.appspot.com',
  messagingSenderId: '510233203554',
  appId: '1:510233203554:web:d9d74905e251918902923b',
  measurementId: 'G-EKGBH6JRB2',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

console.log(app);
