import error from './pages/error.js';
import welcomePage from './pages/home.js';
import signIn from './pages/signIn.js';
import signUp from './pages/signUp.js';
import feed from './pages/feed.js';

const routes = [
  { path: '/', component: welcomePage },
  { path: '/signIn', component: signIn },
  { path: '/signup', component: signUp },
  { path: '/error', component: error },
  { path: '/feed', component: feed },
];

const defaultRoute = '/';
const root = document.getElementById('root');

function navigateTo(hash) {
  const route = routes.find((routeFound) => routeFound.path === hash);
  if (route) {
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
