// import { async } from 'regenerator-runtime';
// import { doc } from 'firebase/firestore/lite';

import {
  deleteDocument,
  eventsCollection, fetchPost, onSnapshot,
} from './firebase/config';

function wall(navigateTo) {
  const headerWall = document.createElement('header');
  const ctnHeader = document.createElement('div');
  const imgHeader = document.createElement('img');
  const btnLogOut = document.createElement('button');
  const mainWall = document.createElement('main');
  const section1 = document.createElement('section');
  const newPost = document.createElement('div');
  const inputPost = document.createElement('input');
  const btnPost = document.createElement('button');
  const ctnPost = document.createElement('div');

  headerWall.setAttribute('id', 'header');
  ctnHeader.setAttribute('id', 'container-1');
  imgHeader.setAttribute('id', 'img-logo');
  btnLogOut.setAttribute('id', 'logOut');
  mainWall.setAttribute('id', 'mainWall');
  section1.setAttribute('id', 'section1');
  newPost.setAttribute('id', 'divNewPost');
  inputPost.setAttribute('id', 'inputNewPost');
  ctnPost.setAttribute('id', 'post');
  btnPost.setAttribute('id', 'btnPost');

  imgHeader.src = './img/logo-title33.png';
  imgHeader.alt = 'header-logo';
  ctnHeader.appendChild(imgHeader);

  inputPost.placeholder = '¡Comparte tus eventos!';
  btnLogOut.textContent = 'CERRAR SESION';

  // actualizar datos
  onSnapshot(fetchPost, (querySnapshot) => {
    ctnPost.innerHTML = '';

    querySnapshot.forEach((doc) => {
      // crear elementos de publicaciones
      const liPost = document.createElement('p');
      liPost.setAttribute('id', 'newPost');
      const postData = doc.data();

      liPost.textContent = postData.publicaciones;
      ctnPost.appendChild(liPost);

      // crear boton borrar
      const buttonDelete = document.createElement('button');
      buttonDelete.setAttribute('class', 'deletePublication');

      // buttonDelete.textContent = 'borrar';
      liPost.appendChild(buttonDelete);

      // borrar publicacion
      buttonDelete.addEventListener('click', () => {
        const idPost = doc.id;

        deleteDocument(idPost);
      });
    });
  });

  // crear publicación
  btnPost.textContent = 'PUBLICAR';
  btnPost.addEventListener('click', () => {
    const newPosts = inputPost.value;

    eventsCollection(newPosts).then((posts) => {
      inputPost.value = '';

      return posts;
    });
  });

  // cerrar sesión
  btnLogOut.addEventListener('click', () => {
    navigateTo('/');
  });

  // ctnPost.appendChild(liPost);
  newPost.append(inputPost, btnPost);

  section1.append(newPost, ctnPost);

  headerWall.append(ctnHeader, btnLogOut);
  mainWall.append(headerWall, section1);
  return mainWall;
}

export default wall;
