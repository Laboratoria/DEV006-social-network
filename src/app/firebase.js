/* eslint-disable import/no-unresolved */
// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js';
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyChKx6m8BMF91ozD5vqzLFISSYdLPS7tGc',
  authDomain: 'estamos-perdidos.firebaseapp.com',
  projectId: 'estamos-perdidos',
  storageBucket: 'estamos-perdidos.appspot.com',
  messagingSenderId: '526088555075',
  appId: '1:526088555075:web:41482ecb775d45cfd6e2f6',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
