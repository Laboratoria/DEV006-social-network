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
  arrayRemove, arrayUnion, doc, updateDoc, getDoc,
} from 'firebase/firestore';
import { app, auth, colRef } from './firebase';

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

// Dar y quitar Likes
export const likeCounter = (postId) => {
  const postDocRef = doc(colRef, postId);
  return updateDoc(postDocRef, { likes: arrayUnion(auth.currentUser.email) });
};

export const dislikeCounter = (postId) => {
  const postDocRef = doc(colRef, postId);
  return updateDoc(postDocRef, { likes: arrayRemove(auth.currentUser.email) });
};

// verificar like
export const verifyLikes = async (postId, emailUser) => {
  const postDocRef = doc(colRef, postId);
  const docPost = await getDoc(postDocRef);
  if (docPost.exists) {
    const data = docPost.data();
    const likesArray = data.likes;
    if (likesArray != null && likesArray.includes(emailUser)) {
      return true;
    }
  }
  return false;
};
