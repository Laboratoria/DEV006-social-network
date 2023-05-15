/* eslint-disable no-undef */
/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../lib/firebase';

export function wall() {
  // Crear elementos
  const container = document.createElement('div');
  const navegator = document.createElement('nav');
  const main = document.createElement('main');
  const logoRefresh = document.createElement('img');
  // const exitButton = document.createElement('button');
  const divposts = document.createElement('div');

  // Establecer atributos y contenido
  logoRefresh.setAttribute('src', './images/logoEasygym.png');
  logoRefresh.setAttribute('onclick', 'location.reload()');
  divposts.id = 'posts';
  // exitButton.id = 'exit';
  logoRefresh.classList.add('refresh');

  // Agregar elementos a nav
  navegator.appendChild(logoRefresh);

  // Agregar elementos a main
  // main.appendChild(exitButton);

  // Agregar elementos al contenedor (div) especificado
  container.appendChild(navegator);
  container.appendChild(main);
  
  const getPost = () => getDocs(collection(db, 'Posts'));

  window.addEventListener('DOMContentLoaded', async () => {
    const querySnapshot = await getPost();
    querySnapshot.forEach((doc) => {
      console.log(doc.data());
    });
  });

  const createPost = (poster) => {
  // crear que va a mostrar
    const post = document.createElement('div');
    const header = document.createElement('div');
    const img1 = document.createElement('img');
    const dateInput = document.createElement('input');
    const img2 = document.createElement('img');
    const photoOrVideo = document.createElement('div');
    const descriptionAndLikes = document.createElement('p');

    // Establecer las propiedades de los elementos
    post.className = 'post';
    header.className = 'header';
    img1.src = poster.avatar;
    dateInput.type = poster.fecha;
    img2.src = 'ruta/al/imagen2';
    photoOrVideo.className = 'photoOrVideo';
    photoOrVideo.textContent = 'foto/video';
    descriptionAndLikes.textContent = poster.descripción;

    // Armar la estructura del nodo
    header.appendChild(img1);
    header.appendChild(dateInput);
    header.appendChild(img2);
    post.appendChild(header);
    post.appendChild(photoOrVideo);
    post.appendChild(descriptionAndLikes);
    root.appendChild(post);
  };

  return container;
}
