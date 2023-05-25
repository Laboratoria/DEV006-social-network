import {
  collection, addDoc, getDocs, onSnapshot,
} from 'firebase/firestore';
import { db } from './configFirebase.js';

export const savePost = (title, description) => {
  addDoc(collection(db, 'postsWall'), { title, description });
};

const getPosts = () => getDocs(collection(db, 'postsWall'));
getPosts();

export async function fetchPosts() {
  onSnapshot(collection(db, 'postsWall'), (querySnapshot) => {
    const resultPosts = [];

    querySnapshot.forEach((doc) => {
      resultPosts.push(doc.data());
    });
    console.log(resultPosts);
    return resultPosts;
  });
}

export const onGetPosts = () => console.log('onGetPost');
