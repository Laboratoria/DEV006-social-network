import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

export const firebaseConfig = {
  apiKey: 'AIzaSyDoRs5TiCvg-5ih7HQqAYZOdrLEUQEKj40',
  authDomain: 'cinergia-vja.firebaseapp.com',
  projectId: 'cinergia-vja',
  storageBucket: 'cinergia-vja.appspot.com',
  messagingSenderId: '797919775414',
  appId: '1:797919775414:web:7759904b12c0d7ca99b417',
  measurementId: 'G-8SL0NK4KPP',
};

// export default firebaseConfig;

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
