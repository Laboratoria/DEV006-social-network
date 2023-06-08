import home from './home.js';
import login from './login.js';
import error from './error.js';
import wall from './wall.js';

const routes = [
  { path: '/', component: home },
  { path: '/login', component: login },
  { path: '/error', component: error },
  { path: '/wall', component: wall },
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
  } else {
    navigateTo('/error');
  }
}

window.onpopstate = () => {
  navigateTo(window.location.pathname);
};
// verificar si el ususario esta guardado en el localStorage
//si el usuario esta logeado deberia poder ir a cualquier pagina
//si el usuario no esta logeado deberia llevarlo al defaultRoute
//defaultRoute puede ser login o wall
navigateTo(window.location.pathname || defaultRoute);
