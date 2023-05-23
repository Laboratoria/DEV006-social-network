// Este es el punto de entrada de tu aplicacion
// eslint-disable-next-line import/no-unresolved

import home from './vistas/home.js';
import login from './vistas/login.js';
import error404 from './vistas/error404.js';
import signup from './vistas/signup.js';
import genderValidation from './vistas/genderValidation.js';
import questionWomen from './vistas/questionWomen.js';
import wall from './vistas/wall.js';
import settings from './vistas/settings.js';

const routes = [
  { path: '/', component: home },
  { path: '/login', component: login },
  { path: '/error404', component: error404 },
  { path: '/signup', component: signup },
  { path: '/sorry', component: genderValidation },
  { path: '/question', component: questionWomen },
  { path: '/wall', component: wall },
  { path: '/settings', component: settings },

];
const defaultRoute = '/';
const container = document.getElementById('container');

function navigateTo(hash) {
  const route = routes.find((routeFound) => routeFound.path === hash);
  if (route) {
    window.history.pushState(
      {},
      route.path,
      window.location.origin + route.path,

    );
    if (container.firstChild) {
      container.removeChild(container.firstChild);
    }
    container.appendChild(route.component(navigateTo));
  } else {
    navigateTo('/error404');
  }
}

window.onpopstate = () => {
  navigateTo(window.location.pathname);
};
navigateTo(window.location.pathname || defaultRoute);
