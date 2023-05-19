/* eslint-disable import/no-unresolved */
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js';
import {
  getFirestore,
  collection,
  addDoc,
  getDoc,
  updateDoc,
  getDocs,
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
export const db = getFirestore();
export const savePost = (postText) => {
  const user = auth.currentUser;
  const post = {
    name: user.displayName, // Obtén el nombre del usuario actual
    date: new Date().toLocaleDateString(), // Obtiene la fecha actual formateada
    post: postText,
    likes: 0,
  };

  return addDoc(collection(db, 'publicaciones'), post);
};
export const getPosts = () => getDocs(collection(db, 'publicaciones'));
export const onGetPosts = (callback) => onSnapshot(collection(db, 'publicaciones'), callback);
export const deletePost = (id) => deleteDoc(doc(db, 'publicaciones', id));
export const getPost = (id) => getDoc(doc(db, 'publicaciones', id));
export const updatePost = (id, newField) => updateDoc(doc(db, 'publicaciones', id), newField);
// export const updateLikesCount = async (postId, userId) => {
//   try {
//     const postRef = doc(db, 'publicaciones', postId);
//     const postSnapshot = await getDoc(postRef);
//     const post = postSnapshot.data();

//     // Verificar si el usuario ya dio like a la publicación
//     if (post.likes && post.likes[userId]) {
//       console.log('El usuario ya ha dado like a esta publicación.');
//       return;
//     }
//     // Actualizar el contador de likes
//     const updatedLikes = post.likes || {};
//     updatedLikes[userId] = true;

//     await updateDoc(postRef, { likes: updatedLikes });
//     const likeBtn = document.getElementById(`contador-${postId}`);
//     likeBtn.innerHTML = Object.keys(updatedLikes).length; // Mostrar la cantidad total de likes
//   } catch (error) {
//     console.error('Error al actualizar el recuento de "likes"', error);
//   }
// };
// export const addLike = async (postId, userId) => {
//   try {
//     const postRef = doc(db, 'publicaciones', postId);
//     const postSnapshot = await getDoc(postRef);
//     const postData = postSnapshot.data();

//     const updatedLikes = postData.likes || {};
//     updatedLikes[userId] = true;

//     await updateDoc(postRef, { likes: updatedLikes });
//   } catch (error) {
//     console.error('Error al añadir el like', error);
//   }
// };
// export const removeLike = async (postId, userId) => {
//   try {
//     const postRef = doc(db, 'publicaciones', postId);
//     const postSnapshot = await getDoc(postRef);
//     const postData = postSnapshot.data();

//     const updatedLikes = postData.likes || {};
//     delete updatedLikes[userId];

//     await updateDoc(postRef, { likes: updatedLikes });
//   } catch (error) {
//     console.error('Error al quitar el like', error);
//   }
// };
export { getDoc, doc };
