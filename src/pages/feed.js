import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
} from 'firebase/firestore';

import { db } from '../lib/firebaseConf.js';

const colRef = collection(db, 'posts');
const feed = () => {
  const feedSection = document.createElement('section');
  feedSection.classList.add('feedSection');
  const profileNav = document.createElement('nav');
  profileNav.classList.add('profileNav');
  const logoArticle = document.createElement('article');
  logoArticle.classList.add('articleLogoSignUp');
  const logoImg = document.createElement('img');
  logoImg.setAttribute('src', './pages/images/LOGO.png');
  logoImg.setAttribute(
    'alt',
    'Logo: dos boletos para el cine. Uno morado y uno amarillo. Ambos dicen "Cinergia"',
  );
  logoImg.classList.add('logoSignUp');
  const username = document.createElement('p');
  username.classList.add('userSpan');
  const postForm = document.createElement('div');
  postForm.classList.add('postForm');
  const postInput = document.createElement('input');
  postInput.classList.add('postInput');
  postInput.setAttribute('type', 'text');
  postInput.setAttribute('placeholder', '¿Qué quieres compartir hoy?');
  const postBtn = document.createElement('button');
  postBtn.classList.add('postBtn');
  postBtn.setAttribute('type', 'button');
  postBtn.textContent = '¡Publicar!';
  const postsContainer = document.createElement('div');
  postsContainer.classList.add('postsContainer');
  postBtn.addEventListener('click', (e) => {
    e.preventDefault();
    addDoc(colRef, {
      post: postInput.value,
      createdAt: new Date(),
    })
      .then(() => {
        postInput.value = ''; // Limpiar el campo de entrada después de agregar el post
      });
  });
  // Obtener y mostrar los posts existentes en orden descendente por fecha de creación
  const q = query(colRef, orderBy('createdAt', 'desc'));
  onSnapshot(q, (snapshot) => {
    // Limpiar el contenido anterior
    postsContainer.innerHTML = '';
    snapshot.forEach((doc) => {
      const post = doc.data().post;
      // Crear un contenedor para el post
      const postContainer = document.createElement('div');
      postContainer.classList.add('postContainer');
      // Crear un elemento para mostrar el post
      const postDiv = document.createElement('div');
      postDiv.textContent = post;
      // Agregar el elemento del post al contenedor del post
      postContainer.appendChild(postDiv);
      // Agregar el post al contenedor de posts
      postsContainer.appendChild(postContainer);
    });
  });
  feedSection.appendChild(profileNav);
  feedSection.appendChild(postForm);
  feedSection.appendChild(postsContainer);
  profileNav.appendChild(logoArticle);
  profileNav.appendChild(username);
  logoArticle.appendChild(logoImg);
  postForm.appendChild(postInput);
  postForm.appendChild(postBtn);
  return feedSection;
};
export default feed;

