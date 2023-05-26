// Este es el punto de entrada de tu aplicacion

// import { myFunction } from './lib/index.js';
import { login } from './login.js';
import { register } from './register.js';

// myFunction();
login();
register();

const routes = [
  { path: '/', component: login },
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
    root.appendChild(route.component());
  }
}

window.onpopstate = () => {
navigateTo(window.location.pathname);
};

// root.appendChild(route.component(navigateTo));

window.onpopstate = () => {
  navigateTo(window.location.pathname);
};

navigateTo(window.location.pathname || defaultRoute);