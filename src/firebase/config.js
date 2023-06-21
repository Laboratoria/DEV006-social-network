import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  onSnapshot,
  query,
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAwDENqtqqClEQU0v75FqVs3HAI6i2-YWI',
  authDomain: 'runnersnetwork-96c39.firebaseapp.com',
  projectId: 'runnersnetwork-96c39',
  storageBucket: 'runnersnetwork-96c39.appspot.com',
  messagingSenderId: '110348471556',
  appId: '1:110348471556:web:987cf19e46a47bc42a5451',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const createEmail = (email, password) => createUserWithEmailAndPassword(auth, email, password);
const signIn = (email, password) => signInWithEmailAndPassword(auth, email, password);
const provider = new GoogleAuthProvider();

const loginGoogle = () => {
  const promesa1 = signInWithPopup(auth, provider);
  return promesa1;
};
// firestore
const eventsCollection = (publicaciones) => addDoc(collection(db, 'eventos'), { publicaciones });

// mostar publicaciones
const getPost = () => getDocs(collection(db, 'eventos'));

// borrar datos o publicaciones

const fetchPost = query(collection(db, 'eventos'));

const deleteDocument = (id) => deleteDoc(doc(db, 'eventos', id));

export {
  auth,
  db,
  collection,
  getDocs,
  createEmail,
  signIn,
  provider,
  loginGoogle,
  eventsCollection,
  getPost,
  deleteDocument,
  fetchPost,
  onSnapshot,

};
