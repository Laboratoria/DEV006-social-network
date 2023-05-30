import './lib/firebase.js';
import login from './templates/login.js';
import createAcount from './templates/createAcount.js';
import error from './templates/error.js';
import wall from './templates/wall.js';
import newpost from './templates/newpost.js';
import editProfile from './templates/editProfile.js';

const routes = [
  { path: '/', component: login },
  { path: '/createAcount', component: createAcount },
  { path: '/wall', component: wall },
  { path: '/newpost', component: newpost },
  {path: '/editProfile', component: editProfile},
  { path: '/error', component: error },
];

const defaultRoute = '/';
const root = document.getElementById('root');

function navigateTo(hash, data = {}) {
  const route = routes.find((routeFound) => routeFound.path === hash);
  if (route && route.component) {
    window.history.pushState(
      {},
      route.path,
      window.location.origin + route.path,
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
