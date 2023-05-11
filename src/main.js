// Importar las vistas

import { home } from './pages/home.js';
import { createAccount } from './pages/createAccount.js';

const root = document.getElementById('root');

const routes = {
  '/': home,
  '/createAccount': createAccount,
};

function navigateTo(pathname) {
  /*objeto que proporciona acceso y control sobre el historial de navegación del navegador*/
  /*pushState (state, title, url) es un método del objeto history que permite modificar la URL del navegador sin recargar la página*/
  window.history.pushState({}, pathname, window.location.origin + pathname); // Guarda el historial
  root.innerHTML = '';
  const view = routes[pathname];
  root.appendChild(view(navigateTo));
}

/*window.onpopstate se utiliza para manejar el evento de cambio en el historial de navegación del navegador*/
window.onpopstate = () => {
  root.innerHTML = '';
  const path = window.location.pathname;
  const view = routes[path];
  root.appendChild(view(navigateTo));
};

navigateTo('/');
