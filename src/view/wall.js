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

  const header = document.createElement('header');

  const logoImg = document.createElement('img');
  logoImg.setAttribute('src', 'img/logo.png');
  logoImg.setAttribute('alt', 'This is the logo. It is a dog paw inside a heart.');

  const nav = document.createElement('nav');
  nav.setAttribute('class', 'wallNav');

  const h1 = document.createElement('h1');
  h1.setAttribute('class', 'wallH1');
  h1.textContent = 'Be My Friend';

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

  const parrafo = document.createElement('p');
  parrafo.setAttribute('id', '');
  parrafo.textContent = 'post';

  const q = query(colRef, orderBy('timestamp', 'desc'));
  getDocs(q)
    .then((snapshot) => {
      const posts = [];
      snapshot.docs.forEach((doc) => {
        posts.push({ ...doc.data(), id: doc.id });
      });
      posts.forEach((post) => {
        const testDiv = document.createElement('div');

        const namePet = document.createElement('p');
        namePet.textContent = `${post.petName}`;

        const descrotionPet = document.createElement('p');
        descrotionPet.textContent = post.description;

        console.log(q)

        /* testDiv.append(namePet, descrotionPet);
        walldiv.append(testDiv); */
      });
    });

  const footer = document.createElement('footer');
  footer.setAttribute('id', 'footer');

  const iconHome = document.createElement('img');
  iconHome.setAttribute('src', '../img/HOME.png');

  const iconSearch = document.createElement('img');
  iconSearch.setAttribute('src', '../img/LUPA.png');

  const iconAdd = document.createElement('img');
  iconAdd.setAttribute('src', '../img/AÑADIRINACTIVO.png');
  iconAdd.addEventListener('click', () => {
    navigateTo('/newpost');
  });

  const iconProfile = document.createElement('img');
  iconProfile.setAttribute('src', '../img/PROFILE.png');

  bodyimg.append(walldiv, parrafo, footer);
  walldiv.append(header);
  header.append(nav);
  nav.append(logoImg, h1, divMenu, navMenu);
  divMenu.append(span1, span2, span3);
  navMenu.append(navItem);
  footer.append(iconHome, iconSearch, iconAdd, iconProfile);

  return bodyimg;
};

/* function closeMenu() {
    divMenu.classList.remove("active");
    navMenu.classList.remove("active");
} */
/*   navItem.forEach(n => n.addEventListener("click", closeMenu)); */
