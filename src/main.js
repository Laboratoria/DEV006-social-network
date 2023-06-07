// import './lib/firebase.js';
import { auth } from './lib/firebase';
import login from './templates/login.js';
import createAcount from './templates/createAcount.js';
import error from './templates/error.js';
import wall from './templates/wall.js';
import newpost from './templates/newpost.js';

const routes = [
  { path: '/', component: login },
  { path: '/createAcount', component: createAcount },
  { path: '/wall', component: wall },
  { path: '/newpost', component: newpost },
  { path: '/error', component: error },
];

const defaultRoute = '/';
const root = document.getElementById('root');

function navigateTo(hash, data = {}) {
  const route = routes.find((routeFound) => routeFound.path === hash);
  if (route) {
    if ((route.path === '/wall' || route.path === '/newpost') && !auth.currentUser) {
      navigateTo('/'); // Redirige al inicio si no hay un usuario autenticado
      return;
    }
    window.history.pushState(
      {},
      route.path,
      window.location.origin + route.path
    );

    if (root.firstChild) {
      root.removeChild(root.firstChild);
    }
    root.appendChild(route.component(navigateTo, data));
  } else {
    navigateTo('/error');
  }
}

window.onpopstate = () => navigateTo(window.location.pathname);

navigateTo(window.location.pathname || defaultRoute);

export default routes;
