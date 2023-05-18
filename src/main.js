import './lib/firebase.js';
import home from './templates/home.js';
import login from './templates/login.js';
import createAcount from './templates/createAcount.js';
// import buttonGoogle from './lib/buttonGoogle.js';
import error from './templates/error.js';
import wall from './templates/wall.js';
// console.log('HOlA')

const routes = [
  { path: '/', component: home },
  { path: '/login', component: login },
  { path: '/loginCreate', component: createAcount },
  { path: '/wall', component: wall },
  { path: '/error', component: error },
  // { path: '/buttonGoogle', component: buttonGoogle },
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

window.onpopstate = () => navigateTo(window.location.pathname);

navigateTo(window.location.pathname || defaultRoute);

export default routes;
