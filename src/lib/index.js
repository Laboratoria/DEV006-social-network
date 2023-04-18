// aqui exportaras las funciones que necesites

/*export const myFunction = () => {
  // aqui tu codigo
  console.log('Hola mundo!');
};*/

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBAYk_WMmRpvugRq7BSv9aChHKk7B_YjP4',
  authDomain: 'proyecto-prueba-ec5fc.firebaseapp.com',
  projectId: 'proyecto-prueba-ec5fc',
  storageBucket: 'proyecto-prueba-ec5fc.appspot.com',
  messagingSenderId: '907102392422',
  appId: '1:907102392422:web:f59b709c5c8e8ec66b9da7',
  measurementId: 'G-7FQZWB4Q94',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
