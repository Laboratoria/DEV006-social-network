/* eslint-disable max-len */
/* eslint-disable object-shorthand */
/* eslint-disable no-undef */
/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
import {
  collection, getDocs, addDoc,
} from 'firebase/firestore';
import { db } from '../lib/firebase';
import { authDetector } from '../lib/functions';

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
  textarea.placeholder = 'write your tips today?';
  // textarea.setAttribute('rows', '4');
  writeAndPost.classList.add('writeAndPost');

  // exitButton.id = 'exit';
  logoRefresh.classList.add('refresh');

  // Agregar elementos a nav
  navegator.appendChild(logoRefresh);

  // Agregar elementos a divposts
  // divposts.appendChild(writeAndPost);

  // Agregar elementos a divposts
  writeAndPost.appendChild(textarea);
  writeAndPost.appendChild(buttonCreatePost);

  // Agregar elementos al contenedor (div) especificado
  container.appendChild(navegator);
  container.appendChild(writeAndPost);
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
    const menuLikeSection = document.createElement('section');
    const likesAndCount = document.createElement('div');
    const menuOptions = document.createElement('img');
    const likesPic = document.createElement('img');
    const likesLab = document.createElement('label');

    // Establecer las propiedades de los elementos

    post.className = 'post';
    avatar.className = 'avatar';
    userName.className = 'userName';
    publicDate.className = 'publicDate';
    avatar.src = poster.avatar;
    publicDate.textContent = poster.fecha.toLocaleString();
    publicDate.type = poster.fecha;
    userName.textContent = poster.usuario;
    imagenPost.src = 'ruta/al/imagen2';
    descriptionAndLikes.textContent = poster.descripción;
    menuLikeSection.classList.add('menuLikeSection');
    menuOptions.classList.add('menuOptions');
    menuOptions.setAttribute('src', './images/menuOptions.png');
    likesAndCount.classList.add('likesAndCount');
    likesPic.classList.add('likesPic');
    likesPic.setAttribute('src', './images/Likes.png');
    likesLab.classList.add('likesLab');
    likesLab.textContent = '0';

    // Armar la estructura del nodo
    infoUser.id = 'infoUser';
    infoUser.appendChild(avatar);
    infoUser.appendChild(userName);
    infoUser.appendChild(publicDate);
    infoUser.appendChild(descriptionAndLikes);
    post.appendChild(infoUser);
    post.appendChild(menuLikeSection);
    menuLikeSection.appendChild(menuOptions);
    menuLikeSection.appendChild(likesAndCount);
    likesAndCount.appendChild(likesPic);
    likesAndCount.appendChild(likesLab);
    divposts.insertBefore(post, divposts.firstChild); // Utilizar insertBefore para insertar al principio
  };

  const postPromise = getDocs(collection(db, 'Posts'));
  postPromise.then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      const postData = doc.data();
      createPost(postData);
    });
  });
  console.log(authDetector);

  buttonCreatePost.addEventListener('click', async () => {
    const userDetector = await authDetector();// Obtener el email del usuario

    const currentDate = new Date(); // devuelve la fecha local
    const day = currentDate.getDate();// devuelve el día solamente
    const month = currentDate.getMonth() + 1; // Los meses comienzan desde 0
    const year = currentDate.getFullYear();
    const formattedDate = `${day}/${month}/${year}`;

    const data = {
      avatar: '/images/Avatar.png',
      descripción: textarea.value,
      fecha: formattedDate,
      usuario: userDetector, // Asignar el email del usuario a "usuario"
    };

    const result = await addDoc(collection(db, 'Posts'), data);
    console.log(result);
    // Crear el nuevo post y agregarlo al principio
    createPost(data);
    textarea.value = '';
  });

  // DOMContentLoaded se dispara cuando se ha cargado
  //  completamente el árbol DOM de una página web por
  // lo q no sirve en este caso ya q se cambia lo q esta en root
  // window.addEventListener('DOMContentLoaded', async () => {
  //   const querySnapshot = await getPost();0'+''''''zz
  //   querySnapshot.forEach((doc) => {
  //     const postdata = doc.data();
  //     createPost(postdata);
  //   });
  // });
  return container;
}
