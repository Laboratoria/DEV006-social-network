// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// import { ref } from 'firebase/storage';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
// eslint-disable-next-line object-curly-newline
import { getFirestore, collection, addDoc, getDocs, onSnapshot, deleteDoc, doc, getDoc, updateDoc, arrayUnion, arrayRemove } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.descriptiongoogle.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBjhOESemBSDaB-vCAqUKB0spcDfn3wy2w',
  authDomain: 'socialnetwork-foodiegram.firebaseapp.com',
  projectId: 'socialnetwork-foodiegram',
  storageBucket: 'socialnetwork-foodiegram.appspot.com',
  messagingSenderId: '169678372302',
  appId: '1:169678372302:web:3fb784e61d7135daf3ff9f',
  measurementId: 'G-59SY6E4Z0D',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const create = createUserWithEmailAndPassword;

const db = getFirestore();

export const saveTask = (title, description) => addDoc(collection(db, 'post'), {
  title, description, likes: [], username: auth.currentUser.email,
});

export const getTasks = () => getDocs(collection(db, 'post'));
export const onGetPost = () => onSnapshot(collection(db, 'post'));
export const deleteTask = (id) => deleteDoc(doc(db, 'post', id));
export const getTask = (id) => getDoc(doc(db, 'post', id));
export const updateTask = (id, newFields) => updateDoc(doc(db, 'post', id), newFields);

export const addLike = (id) => {
  const docRef = doc(db, 'post', id);
  const currentUser = auth.currentUser;
  updateDoc(docRef, {
    likes: arrayUnion(currentUser.uid),
  });
};

export const removeLike = (id) => {
  const currentUser = auth.currentUser;
  const docRef = doc(db, 'post', id);
  updateDoc(docRef, {
    likes: arrayRemove(currentUser.uid),
  });
};
