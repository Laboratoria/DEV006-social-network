/* eslint-disable no-console */
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  getRedirectResult,
  signInWithRedirect,
} from 'firebase/auth';
import { auth, db } from './firebase';
import { collection, addDoc, onSnapshot, deleteDoc,doc,getDoc,updateDoc} from 'firebase/firestore'; 

export function registerUser(email, password) {
  console.log(email, password);

  return createUserWithEmailAndPassword(auth, email, password);
}

export function userLogin(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export function registerGoogle() {
  const provider = new GoogleAuthProvider();
  return signInWithRedirect(auth, provider);
}

export function redirectResult() {
  return getRedirectResult(auth);
}


export function saveTask(description,usuarioPost) {
 const docRef = addDoc(collection(db, 'tasks'), {description, usuarioPost}); //Acá utilizo la función addDoc de Firestore para agregar un documento a la colección en la base de datos db.El segundo argumento es un Objeto que contiene la descripción del documento nuevo almacenado
 return docRef //la función devuelve el documento nuevo que se agregó en la base de datos.
 }


export function onGetPost(callback) {
  const unsubscribe = onSnapshot(collection(db, 'tasks'), (querySnapshot) => { //onSnapShot de Firestore es una función que toma 2 argumentos, el primero es la referencia a la colección que se desea evaluar y el segundo es una función de devolución de llamada que se invocará cada vez que se produce un cambio en la colección.
    //Dentro de la función de devolución de llamada creo un array vacío donde iran los post nuevos que se creen
    const posts = [];
    querySnapshot.forEach((doc) => { //Dentro del bucle se crea un objeto que contiene la propiedad id del documento y todas la propiedades del doc. con el metodo .data(). Este objeto se va agregando a "post".
      posts.push({
        id: doc.id,
        ...doc.data(),
      });
    });
    callback(posts);
  });
  return unsubscribe;
}

export function deletePost(id) {
const deleteP = deleteDoc(doc(db,'tasks',id));
return deleteP
}

export function getPost(id) {
  const editPost = getDoc(doc(db,'tasks',id));
return editPost
}

 export function updatePost(id, newPost) {
const upadatePosts = updateDoc(doc(db,'tasks',id), newPost)
 return upadatePosts
}