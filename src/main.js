// Este es el punto de entrada de tu aplicacion

// import { myFunction } from './lib/index.js';
import { home } from './vistas/home.js';
import { login } from './vistas/login.js';
import { register } from './vistas/register.js';

const routes = [
  { path: '/', component: home },
  { path: '/login', component: login },
  { path: '/register', component: register },
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
    root.append(route.component(navigateTo));
    } else {
    navigateTo('/error');
    }
  }
  

// root.appendChild(route.component(navigateTo));

window.onpopstate = () => {
  navigateTo(window.location.pathname);
};

navigateTo(window.location.pathname || defaultRoute);