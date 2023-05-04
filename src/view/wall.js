
import { footer } from "./footer";
import { exit } from "../lib/index.js";

export const wall = (navigateTo) => {
    const bodyimg = document.createElement('div');
  bodyimg.setAttribute('class', 'bodyimg');

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
    divMenu.classList.toggle("active");
    navMenu.classList.toggle("active");
  });

  const span1 = document.createElement('span');
  span1.setAttribute('class', 'bar');

  const span2 = document.createElement('span');
  span2.setAttribute('class', 'bar');

  const span3 = document.createElement('span');
  span3.setAttribute('class', 'bar');

  const parrafo = document.createElement('p');
  parrafo.textContent = 'post';

  bodyimg.append(walldiv, parrafo, footer());
  walldiv.append(header);
  header.append(nav);
  nav.append(logoImg, h1,divMenu, navMenu);
  divMenu.append(span1, span2, span3);
  navMenu.append(navItem);

return bodyimg;

};


/* function closeMenu() {
    divMenu.classList.remove("active");
    navMenu.classList.remove("active");
} */
/*   navItem.forEach(n => n.addEventListener("click", closeMenu)); */