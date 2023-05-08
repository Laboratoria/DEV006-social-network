import { getDocs, query, orderBy } from 'firebase/firestore';
import { exit, colRef } from '../lib/index.js';

export const wall = (navigateTo) => {
  // ------------------------------------------------- Wallpaper
  const bodyimg = document.createElement('div');
  bodyimg.setAttribute('class', 'bodyimg');

  // ------------------------------------------------- Contenedor de muro/timeline
  const walldiv = document.createElement('div');
  walldiv.setAttribute('id', 'wall');
  walldiv.setAttribute('class', 'wall');

  const postsSection = document.createElement('section');
  postsSection.setAttribute('class', 'postsSection');

  const header = document.createElement('header');

  const logoImg = document.createElement('img');
  logoImg.setAttribute('src', 'img/logo.png');
  logoImg.setAttribute('alt', 'This is the logo. It is a dog paw inside a heart.');

  const nav = document.createElement('nav');
  nav.setAttribute('class', 'wallNav');

  const h1 = document.createElement('h1');
  h1.setAttribute('class', 'wallH1');
  h1.textContent = 'Be My Friend';

  const containerIcons = document.createElement('div');
  containerIcons.setAttribute('class', 'containerIcons');

  const iconHome2 = document.createElement('img');
  iconHome2.setAttribute('src', '../img/HOME.png');

  const iconSearch2 = document.createElement('img');
  iconSearch2.setAttribute('src', '../img/LUPA.png');

  const iconAdd2 = document.createElement('img');
  iconAdd2.setAttribute('src', '../img/AÑADIRINACTIVO.png');
  iconAdd2.addEventListener('mouseover', function () {
    this.src = 'img/AÑADIRACTIVO.png';
  });
  iconAdd2.addEventListener('mouseout', function () {
    this.src = 'img/AÑADIRINACTIVO.png';
  });
  iconAdd2.addEventListener('click', () => {
    navigateTo('/newpost');
  });

  const iconProfile2 = document.createElement('img');
  iconProfile2.setAttribute('src', '../img/PROFILE.png');

  // ------------------------------------------------- Inicia menú de hamburguesa
  const navMenu = document.createElement('ul');
  navMenu.setAttribute('class', 'nav-menu');

  const navItem = document.createElement('li');
  navItem.setAttribute('class', 'nav-item btn-log-out');
  navItem.textContent = 'Log Out';

  navItem.addEventListener('click', () => {
    exit(navigateTo);
  });

  const divMenu = document.createElement('div');
  divMenu.setAttribute('class', 'hamburger');
  divMenu.addEventListener('click', () => {
    divMenu.classList.toggle('active');
    navMenu.classList.toggle('active');
  });

  const span1 = document.createElement('span');
  span1.setAttribute('class', 'bar');

  const span2 = document.createElement('span');
  span2.setAttribute('class', 'bar');

  const span3 = document.createElement('span');
  span3.setAttribute('class', 'bar');
  // ------------------------------------------------- Termina menú de hamburguesa

  // ------------------------------------------------- Barra de íconos
  const footer = document.createElement('footer');
  footer.setAttribute('id', 'footerWall');

  const iconHome = document.createElement('img');
  iconHome.setAttribute('src', '../img/HOME.png');

  const iconSearch = document.createElement('img');
  iconSearch.setAttribute('src', '../img/LUPA.png');

  const iconAdd = document.createElement('img');
  iconAdd.setAttribute('src', '../img/AÑADIRINACTIVO.png');
  iconAdd.addEventListener('mouseover', function () {
    this.src = 'img/AÑADIRACTIVO.png';
  });
  iconAdd.addEventListener('mouseout', function () {
    this.src = 'img/AÑADIRINACTIVO.png';
  });
  iconAdd.addEventListener('click', () => {
    navigateTo('/newpost');
  });

  const iconProfile = document.createElement('img');
  iconProfile.setAttribute('src', '../img/PROFILE.png');

  bodyimg.append(walldiv, footer);
  walldiv.append(header, postsSection);
  header.append(nav);
  nav.append(logoImg, h1, containerIcons, divMenu, navMenu);
  divMenu.append(span1, span2, span3);
  navMenu.append(navItem);
  footer.append(iconHome, iconSearch, iconAdd, iconProfile);
  containerIcons.append(iconHome2, iconSearch2, iconAdd2, iconProfile2);

  // ------------------------------------------------- Publicaciones/posts
  // Recuperamos la colección de "post"
  // Para cada doc de la colección se crea lo siguiente...
  const q = query(colRef, orderBy('timestamp', 'desc'));
  getDocs(q)
    .then((snapshot) => {
      const posts = [];
      snapshot.docs.forEach((doc) => {
        posts.push({ ...doc.data(), id: doc.id });
      });
      posts.forEach((post) => {
        const postArticle = document.createElement('article');
        postArticle.setAttribute('class', 'postArticle');

        const username = document.createElement('span');
        username.textContent = post.userid;
        // obtenemos el valor de userid del display name para que se muestre en el post
        username.setAttribute('class', 'wallUsername');

        const descriptionPet = document.createElement('p');
        descriptionPet.textContent = post.description;
        descriptionPet.setAttribute('class', 'descriptionPet');

        const reactionContainer = document.createElement('div');
        reactionContainer.setAttribute('class', 'reactionContainer');

        const namePet = document.createElement('p');
        namePet.textContent = post.petName;
        namePet.setAttribute('class', 'namePet');

        const likeHeart = document.createElement('img');
        likeHeart.setAttribute('src', 'img/like.png');

        const pawMatch = document.createElement('img');
        pawMatch.setAttribute('src', 'img/matchvacio.png');

        reactionContainer.append(namePet, likeHeart, pawMatch);
        postArticle.append(username, descriptionPet, reactionContainer);
        postsSection.append(postArticle);
      });
    })
    .catch((err) => {
      console.log(err.message);
    });

  return bodyimg;
};

/* function closeMenu() {
    divMenu.classList.remove("active");
    navMenu.classList.remove("active");
} */
/*   navItem.forEach(n => n.addEventListener("click", closeMenu)); */
