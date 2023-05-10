// aqui exportaras las funciones que necesites
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';

import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBWvyr8kYQmm2JBFdVb-Wz8fn2W4omEhbU',
  authDomain: 'socialnetwork10-395ce.firebaseapp.com',
  projectId: 'socialnetwork10-395ce',
  storageBucket: 'socialnetwork10-395ce.appspot.com',
  messagingSenderId: '272306479782',
  appId: '1:272306479782:web:19575010f31b4558224a67',
  measurementId: 'G-1XF3847DV0',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
