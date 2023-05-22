/* eslint-disable no-undef */
/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
import {
  collection, getDocs, addDoc, doc,
} from 'firebase/firestore';
import { db } from '../lib/firebase';

export function wall() {
  // Crear elementos
  const container = document.createElement('div');
  const navegator = document.createElement('nav');
  const logoRefresh = document.createElement('img');
  const divposts = document.createElement('div');
  const buttonCreatePost = document.createElement('button');
  const textarea = document.createElement('textarea');
  const writeAndPost = document.createElement('div');

  // Establecer atributos y contenido
  logoRefresh.setAttribute('src', './images/logoEasygym.png');
  logoRefresh.setAttribute('onclick', 'location.reload()');
  container.id = 'container';
  divposts.id = 'posts';
  buttonCreatePost.classList.add('buttonCreatePost');
  buttonCreatePost.textContent = 'Post';
  textarea.classList.add('textArea');
  // textarea.setAttribute('rows', '4');
  writeAndPost.classList.add('writeAndPost');

  // exitButton.id = 'exit';
  logoRefresh.classList.add('refresh');

  // Agregar elementos a nav
  navegator.appendChild(logoRefresh);

  // Agregar elementos a divposts
  divposts.appendChild(writeAndPost);
  
    // Agregar elementos a divposts
  writeAndPost.appendChild(textarea);
  writeAndPost.appendChild(buttonCreatePost);

  // Agregar elementos al contenedor (div) especificado
  container.appendChild(navegator);
  container.appendChild(divposts);

  const createPost = (poster) => {
    // crear que va a mostrar
    const post = document.createElement('div');
    const infoUser = document.createElement('div');
    const avatar = document.createElement('img');
    const publicDate = document.createElement('time');
    const userName = document.createElement('h5');
    const imagenPost = document.createElement('img');
    const descriptionAndLikes = document.createElement('p');

    // Establecer las propiedades de los elementos

    post.className = 'post';
    avatar.className = 'avatar';
    userName.className = 'userName';
    publicDate.className = 'publicDate';
    avatar.src = poster.avatar;
    publicDate.setAttribute('datetime', '2023-05-16');
    publicDate.textContent = poster.fecha.toLocaleString();
    publicDate.type = poster.fecha;
    userName.textContent = poster.usuario;
    imagenPost.src = 'ruta/al/imagen2';
    descriptionAndLikes.textContent = poster.descripción;

    // Armar la estructura del nodo
    infoUser.id = 'infoUser';
    infoUser.appendChild(avatar);
    infoUser.appendChild(userName);
    infoUser.appendChild(publicDate);
    post.appendChild(infoUser);
    post.appendChild(descriptionAndLikes);
    divposts.appendChild(post); // return post prepend
  };

  const postPromise = getDocs(collection(db, 'Posts'));
  postPromise.then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      const postData = doc.data();
      createPost(postData);
    });
  });

  buttonCreatePost.addEventListener('click', async () => {
    const data = {
      avatar: 'fto',
      descripción: textarea.value,
      fecha: 'hoy',
      usuario: 'yo',
    };
    const result = await addDoc(collection(db, 'Posts'), data);
    console.log(result);
  });
  // DOMContentLoaded se dispara cuando se ha cargado  completamente el árbol DOM de una página web por lo q no sirve en este caso ya q se cambia lo q esta en root
  // window.addEventListener('DOMContentLoaded', async () => {
  //   const querySnapshot = await getPost();
  //   querySnapshot.forEach((doc) => {
  //     const postdata = doc.data();
  //     createPost(postdata);
  //   });
  // });
  return container;
}
