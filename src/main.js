import home from './lib/home.js';
import login from './lib/login.js';
import createAcount from './lib/createAcount.js';
import error from './lib/error.js';
// import navigateTo from './lib/index.js';

const routes = [
  { path: '/', component: home },
  { path: '/login', component: login },
  { path: '/loginCreate', component: createAcount },
  { path: '/error', component: error },
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
