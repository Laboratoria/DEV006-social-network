import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// configuración de firebase de la app
const firebaseConfig = {
  apiKey: 'AIzaSyAu_C6IqpPtEotdS5a5sxQh6jS5sCgPUus',
  authDomain: 'social-network-dev006.firebaseapp.com',
  projectId: 'social-network-dev006',
  storageBucket: 'social-network-dev006.appspot.com',
  messagingSenderId: '558822110218',
  appId: '1:558822110218:web:499baea90aaf4fd14cdbf3',
};

// Inicializa el firebase
export const app = initializeApp(firebaseConfig);
// Inicializa firebase autentificación y la referencia al servicio , también Firestore 
export const auth = getAuth(app);
export const db = getFirestore(app);  
