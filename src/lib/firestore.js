import {
  collection, addDoc, getDocs, onSnapshot,
} from 'firebase/firestore';
import { db } from './configFirebase.js';

export const savePost = async (title, description) => {
  await addDoc(collection(db, 'postsWall'), { title, description });
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
