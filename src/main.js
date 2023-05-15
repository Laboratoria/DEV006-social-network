import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { welcome } from './view/welcome.js';
import { login } from './view/login.js';
import { register } from './view/register.js';
import { error } from './view/error.js';
import { wall } from './view/wall.js';
import { newpost } from './view/newpost.js';
// import { editPost } from './view/editpost.js';

const auth = getAuth();
const defaultRoute = '/';
const root = document.getElementById('root');
const routes = [
  { path: '/', component: welcome },
  { path: '/login', component: login },
  { path: '/register', component: register },
  { path: '/error', component: error },
  { path: '/wall', component: wall },
  { path: '/newpost', component: newpost },
  // { path: '/editpost', component: editPost },

];

export function navigateTo(hash) {
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

/* Protección de rutas, solamente navegar si el usuario ha iniciado sesión.
Pendiente: esta protección debe de estar en index.js junto con LoginUser y CreateUser  */
onAuthStateChanged(auth, (user) => {
  if (user) { // si hay usuario puede permanecer activo(permanece en wall)
    console.log(user);
    navigateTo('/wall');
  } else { // si no lo mantiene o lleva a la página welcome (no se puede ir a wall)
    console.log('no hay usuario');
    navigateTo('/');
  }
});
