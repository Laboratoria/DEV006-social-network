import { welcome } from './view/welcome.js';
import { login } from './view/login.js';
import { register } from './view/register.js';
import {error} from './view/error.js'

const routes = [
  { path: '/', component: welcome },
  { path: '/login', component: login },
  { path: '/register', component: register },
  { path: '/error', component: error  }
];

const defaultRoute = '/';
const root = document.getElementById('root');

function navigateTo(hash) {
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
  root.appendChild(route.component(navigateTo));
  }
  else {
    navigateTo('/error');
  }
}

window.onpopstate = () => {
  navigateTo(window.location.pathname);
};

navigateTo(window.location.pathname || defaultRoute);