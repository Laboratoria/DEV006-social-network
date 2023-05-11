/* eslint-disable import/named */
/* eslint-disable no-unused-vars */
// Importar las vistas

import { home } from './pages/home.js';
import { createAccount } from './pages/createAccount.js';
import { signIn } from './pages/signIn.js';

const root = document.getElementById('root');

const routes = {
  '/': home,
  '/createAccount': createAccount,
  '/signIn': signIn,
};

function navigateTo(pathname) {
  window.history.pushState({}, pathname, window.location.origin + pathname); // Guarda el historial
  root.innerHTML = '';
  const view = routes[pathname];
  root.appendChild(view(navigateTo));
}

window.onpopstate = () => {
  root.innerHTML = '';
  const path = window.location.pathname;
  const view = routes[path];
  root.appendChild(view(navigateTo));
};

navigateTo('/');
