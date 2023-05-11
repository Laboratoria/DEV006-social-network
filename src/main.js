// import './app/registerAuth.js';
import home from './views/home.js';
import login from './views/login.js';
import error from './views/error.js';
import register from './views/register.js';
import forgotPassword from './views/forgotPassword.js';
import newPassword from './views/newPassword.js';
import posts from './views/posts.js';

const routes = [
  { path: '/', component: home },
  { path: '/login', component: login },
  { path: '/register', component: register },
  { path: '/forgotPassword', component: forgotPassword },
  { path: '/newPassword', component: newPassword },
  { path: '/posts', component: posts },
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

window.onpopstate = () => {
  navigateTo(window.location.pathname);
};

navigateTo(window.location.pathname || defaultRoute);
