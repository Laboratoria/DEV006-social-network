/* eslint-disable import/no-unresolved */
// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js';
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: 'AIzaSyAjszHvaSX05kog1pG39qT0EN7XE8Tqp9o',
  authDomain: 'mario-fans.firebaseapp.com',
  projectId: 'mario-fans',
  storageBucket: 'mario-fans.appspot.com',
  messagingSenderId: '240809703236',
  appId: '1:240809703236:web:3f60aaad70c66c200d4911',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
