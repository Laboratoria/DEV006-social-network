/* eslint-disable eol-last */
export {
  getAuth, createUserWithEmailAndPassword,
  GoogleAuthProvider, signInWithPopup, signOut, updateProfile, signInWithEmailAndPassword,
  sendEmailVerification, sendPasswordResetEmail, onAuthStateChanged,
} from 'firebase/auth';

export {
  getFirestore, collection, addDoc, getDocs, onSnapshot, deleteDoc, doc, getDoc, updateDoc,
} from 'firebase/firestore';

export { initializeApp } from 'firebase/app';

// exportamos todas las funciones de firebase para hacer los mocks directamente desde esta carpeta