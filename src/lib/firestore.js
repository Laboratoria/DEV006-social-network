import {
  collection, addDoc, getDocs, query, orderBy, onSnapshot,
} from 'firebase/firestore';
import { db, auth } from './configFirebase.js';

export const savePost = async (title, description) => {
  console.log(auth.currentUser);
  const user = auth.currentUser;
  const name = user.displayName;
  const email = user.email;
  const useruid = user.uid;
  const currentDate = new Date();
  const day = currentDate.getDate();
  const month = currentDate.getMonth() + 1;
  const year = currentDate.getFullYear();
  const hour = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const fullDate = `${day}/${month}/${year}- ${hour}:${minutes}`;
  await addDoc(collection(db, 'postsWall'), {
    title,
    description,
    useruid,
    email,
    name,
    createdAt: currentDate, // Agrega una propiedad 'createdAt' con la fecha de creación actual
    fullDate,
  });
};

const getPosts = () => {
  const postsQuery = query(collection(db, 'postsWall'), orderBy('createdAt', 'desc'));
  return getDocs(postsQuery);
};

getPosts();

export const onGetPosts = (drawPosts) => {
  const postsQuery = query(collection(db, 'postsWall'), orderBy('createdAt', 'desc'));

  onSnapshot(postsQuery, (querySnapshot) => {
    const resultPosts = [];
    console.log('snapshot aqui');
    querySnapshot.forEach((doc) => {
      resultPosts.push({ ...doc.data(), id: doc.id });
    });
    drawPosts(resultPosts);
  });
};
