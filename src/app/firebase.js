/* eslint-disable import/no-unresolved */
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js';
import {
  getFirestore,
  collection,
  addDoc,
  getDoc,
  updateDoc,
  // getDocs,
  deleteDoc,
  onSnapshot,
  doc,
}
  from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js';

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
const db = getFirestore();
export const savePost = (postText) => {
  const user = auth.currentUser;
  const post = {
    name: user.displayName, // Obtén el nombre del usuario actual
    date: new Date().toLocaleDateString(), // Obtiene la fecha actual formateada
    post: postText,
  };

  return addDoc(collection(db, 'publicaciones'), post);
};
// export const getPosts = () => getDocs(collection(db, 'publicaciones'));
export const onGetPosts = (callback) => onSnapshot(collection(db, 'publicaciones'), callback);
export const deletePost = (id) => deleteDoc(doc(db, 'publicaciones', id));
export const getPost = (id) => getDoc(doc(db, 'publicaciones', id));
export const updatePost = (id, newField) => updateDoc(doc(db, 'publicaciones', id), newField);
