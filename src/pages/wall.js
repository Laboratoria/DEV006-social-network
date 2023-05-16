/* eslint-disable no-undef */
/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../lib/firebase';

export function wall() {
  // Crear elementos
  const container = document.createElement('div');
  const navegator = document.createElement('nav');
  const logoRefresh = document.createElement('img');
  const divposts = document.createElement('div');

  // Establecer atributos y contenido
  logoRefresh.setAttribute('src', './images/logoEasygym.png');
  logoRefresh.setAttribute('onclick', 'location.reload()');
  container.id = 'container';
  divposts.id = 'posts';
  // exitButton.id = 'exit';
  logoRefresh.classList.add('refresh');

  // Agregar elementos a nav
  navegator.appendChild(logoRefresh);

  // Agregar elementos al contenedor (div) especificado
  container.appendChild(navegator);
  container.appendChild(divposts);

  const getPost = () => getDocs(collection(db, 'Posts'));

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
    publicDate.textContent = '16 de mayo de 2023';
    publicDate.type = poster.fecha;
    userName.textContent = 'user email';
    imagenPost.src = 'ruta/al/imagen2';
    descriptionAndLikes.textContent = poster.descripción;

    // Armar la estructura del nodo
    infoUser.id = 'infoUser';
    infoUser.appendChild(avatar);
    infoUser.appendChild(userName);
    infoUser.appendChild(publicDate);
    post.appendChild(infoUser);
    post.appendChild(descriptionAndLikes);
    divposts.appendChild(post);
  };

  window.addEventListener('DOMContentLoaded', async () => {
    const querySnapshot = await getPost();
    querySnapshot.forEach((doc) => {
      const postdata = doc.data();
      createPost(postdata);
    });
  });
  return container;
}