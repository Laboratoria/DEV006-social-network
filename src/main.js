// Este es el punto de entrada de tu aplicacion
// se agrega ruta auth para realizar la validacion de las rutas

import { auth } from './lib/configFirebase.js';
import home from './vistas/home.js';
import login from './vistas/login.js';
import error404 from './vistas/error404.js';
import signup from './vistas/signup.js';
import genderValidation from './vistas/genderValidation.js';
import questionWomen from './vistas/questionWomen.js';
import wall from './vistas/wall.js';
import settings from './vistas/settings.js';
import buildsite from './vistas/buildsite.js';

const routes = [
  { path: '/', component: home },
  { path: '/login', component: login },
  { path: '/error404', component: error404 },
  { path: '/signup', component: signup },
  { path: '/sorry', component: genderValidation },
  { path: '/question', component: questionWomen },
  { path: '/wall', component: wall },
  { path: '/settings', component: settings },
  { path: '/buildsite', component: buildsite },
];
const defaultRoute = '/';
const container = document.getElementById('container');

function navigateTo(hash) {
  const route = routes.find((routeFound) => routeFound.path === hash);
  if (route) {
    // Verificar si la ruta es "/wall" y si el usuario está autenticado
    if (route.path === '/wall' && !auth.currentUser) {
      navigateTo('/login'); // Redireccionar a la página de inicio de sesión si no está autenticado
      return;
    }

    window.history.pushState({}, route.path, window.location.origin + route.path);

    if (container.firstChild) {
      container.removeChild(container.firstChild);
    }
    container.appendChild(route.component(navigateTo));
  } else {
    navigateTo('/error404');
  }
}

// el popstate detecta y maneja los cambios en el historial de navegacion
window.onpopstate = () => {
  navigateTo(window.location.pathname);
};
navigateTo(window.location.pathname || defaultRoute);
