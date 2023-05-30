import {
  collection, addDoc, getDocs, onSnapshot,
} from 'firebase/firestore';
import { db, auth } from './configFirebase.js';

export const savePost = async (title, description) => {
  console.log(auth.currentUser);
  const user = auth.currentUser;
  const name = user.displayName;
  const email = user.email;
  const useruid = user.uid;
  await addDoc(collection(db, 'postsWall'), {
    title, description, useruid, email, name,
  });
};

const getPosts = () => getDocs(collection(db, 'postsWall'));
getPosts();

export function fetchPosts() {
  return new Promise((resolve, reject) => {
    onSnapshot(collection(db, 'postsWall'), (querySnapshot) => {
      const resultPosts = [];

      querySnapshot.forEach((doc) => {
        resultPosts.push(doc.data());
      });
      console.log(resultPosts);
      resolve(resultPosts);
    }, reject);
  });
}

export const onGetPosts = (drawPosts) => {
  onSnapshot(collection(db, 'postsWall'), (querySnapshot) => {
    const resultPosts = [];
    console.log('snapshot aqui');
    querySnapshot.forEach((doc) => {
      resultPosts.push(doc.data());
    });
    drawPosts(resultPosts);
  });
};
