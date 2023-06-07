/* eslint-disable no-console */
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  getRedirectResult,
  signInWithRedirect,
} from 'firebase/auth';
import { auth, db } from './firebase';
import { collection, addDoc, onSnapshot, deleteDoc,doc,getDoc,updateDoc, arrayUnion, Timestamp, arrayRemove, orderBy, query} from 'firebase/firestore'; 

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


export function saveTask(description, userid, email) {

  return addDoc(collection(db, 'tasks'), {description, createBy: userid, usersLike: [], createAt: Timestamp.now(), displayName: email});
 
}

export function onGetPost(callback,userid) {
  const taskCollection = collection(db, 'tasks');
  const queryTask = query(taskCollection, orderBy('createAt','desc'));
  const unsubscribe = onSnapshot(queryTask, (querySnapshot) => { //onSnapShot de Firestore es una función que toma 2 argumentos, el primero es la referencia a la colección que se desea evaluar y el segundo es una función de devolución de llamada que se invocará cada vez que se produce un cambio en la colección.
    //Dentro de la función de devolución de llamada creo un array vacío donde iran los post nuevos que se creen
    const posts = [];
    querySnapshot.forEach((doc) => { //Dentro del bucle se crea un objeto que contiene la propiedad id del documento y todas la propiedades del doc. con el metodo .data(). Este objeto se va agregando a "post".
      const task = doc.data();
      posts.push({
        id: doc.id,
        likeCount: task.usersLike.length,
        hasLike: task.usersLike.includes(userid),
        isOwn: task.createBy == userid, 
        ...task,
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

export function giveLikes(id,userid) {
 
  const postRef = doc(db, 'tasks', id);
  return updateDoc(postRef, { usersLike: arrayUnion(userid)});
}


export function removeLikes(id,userid) {

  const postRef = doc(db, 'tasks', id);
  return updateDoc(postRef, { usersLike: arrayRemove(userid)});
}