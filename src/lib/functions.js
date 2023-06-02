/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable no-shadow */
/* eslint-disable no-console */
/* eslint-disable consistent-return */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/named */
import {
  signInWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from 'firebase/auth';
import {
  collection, arrayRemove, arrayUnion, doc, updateDoc, getDoc, getDocs, addDoc, deleteDoc, onSnapshot, query, orderBy, serverTimestamp,
} from 'firebase/firestore';
import {
  app, auth, colRef, db,
} from './firebase';

export const timeStamp = serverTimestamp;
const orderedQuery = query(colRef, orderBy('fecha', 'asc'));// Consulta la colección y la ordena los posts por su fecha/hora de publicación// Consulta la colección y la ordena los posts por su fecha/hora de publicación
//const orderedQuery = query(colRef);
export const getPost = (callback) => onSnapshot(orderedQuery, callback);
// export function login(email, password) {
//   const auth1 = getAuth(app);
//   const resultPromise = signInWithEmailAndPassword(auth1, email, password);
//   const promise2 = resultPromise.then((userCredential) => userCredential.email);
//   return promise2;
// }

// function callback(credential) {
//   return credential.email;
// }

// const callback2 = (credential) => credential.user.email;

// export function login(email, password) {
//   const auth1 = getAuth(app);
//   const resultPromise = signInWithEmailAndPassword(auth1, email, password);
//   const promise2 = resultPromise.then(callback2);
//   return promise2;
// }
// LOGIN CON FIREBASE
export async function login(email, password) {
  const auth1 = getAuth(app);
  const result = await signInWithEmailAndPassword(auth1, email, password);
  return result.user.email;
}

// CONTINUAR CON GOOGLE DESDE SIGNIN y CREATE ACCOUNT - FIREBASE
export async function signInWithGoogle() {
  const provider = new GoogleAuthProvider();
  try {
    const credentials = await signInWithPopup(auth, provider);
    return credentials.user;
  } catch (error) {
    console.log(error);
  }
}

// CREATE ACCOUNT CON FIREBASE
export async function register(auth, email, password) {
  try {
    const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
    console.log(userCredentials);
  } catch (error) {
    console.log(error.message);
    console.log(error.code);
    throw error;
  }
}

// detecta los cambios en el estado de autenticación

export function authDetector() {
  const auth2 = getAuth(app);
  // let userEmail = null;
  return new Promise((resolve) => {
    onAuthStateChanged(auth2, (user) => {
      if (user) {
        resolve(user.email);
      /* userEmail = user.email;
      console.log(userEmail); */
      } else {
        resolve(null);
      // userEmail = null;
      }
    });
  });
}
authDetector();

// user email
export const userEmail = () => auth.currentUser.email;

// Obtener collección Posts
export const postPromise = getDocs(collection(db, 'Posts'));

// Agregar un post
export const postCol = collection(db, 'Posts');
export async function addPost(postCollection, data) {
  try {
    await addDoc(postCollection, data);
    return addPost;
  } catch (error) {
    console.log(error);
  }
}

// Dar y quitar Likes
export const likeCounter = async (postId) => {
  const postDocRef = doc(colRef, postId);
  const docPost = await getDoc(postDocRef);
  const likesCount = docPost.data().likesCount || 0; // Si no existe la propiedad likesCount, la inicializamos en 0
  return updateDoc(postDocRef, {
    likes: arrayUnion(auth.currentUser.email),
    likesCount: likesCount + 1,
  });
};

export const dislikeCounter = async (postId) => {
  const postDocRef = doc(colRef, postId);
  const docPost = await getDoc(postDocRef);
  const likesCount = docPost.data().likesCount || 0; // Si no existe la propiedad likesCount, la inicializamos en 0
  if (likesCount > 0) { // Solo disminuimos el conteo si es mayor a 0
    return updateDoc(postDocRef, {
      likes: arrayRemove(auth.currentUser.email),
      likesCount: likesCount - 1,
    });
  }
};

// verificar like
export const verifyLikes = async (postId, emailUser) => {
  const postDocRef = doc(db, 'Posts', postId);
  const docPost = await getDoc(postDocRef);
  let userLiked = false;
  let likesCount = 0;
  if (docPost.exists) {
    const data = docPost.data();
    const likesArray = data.likes;
    if (likesArray != null) {
      likesCount = likesArray.length; // Get the likes count
      if (likesArray.includes(emailUser)) {
        userLiked = true;
      }
    }
  }
  return { userLiked, likesCount };
};

// Eliminar el post
export async function deletePost(postId) {
  try {
    await deleteDoc(doc(db, 'Posts', postId));
  } catch (error) {
    console.log(error);
  }
}

// Edit post
export async function editpost(postId, textEdit) {
  try {
    const updatedPost = await updateDoc(doc(colRef, postId), { descripción: textEdit });
    return updatedPost;
  } catch (error) {
    console.log(error);
  }
}

export async function signOut() {
  auth.signOut()
    .then(() => {

    })
    .catch((error) => {

    });
}
