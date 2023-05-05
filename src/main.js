import { getAuth, onAuthStateChanged} from "firebase/auth";
import { welcome } from './view/welcome.js';
import { login } from './view/login.js';
import { register } from './view/register.js';
import { error } from './view/error.js';
import { wall } from './view/wall.js';
const auth = getAuth();

const routes = [
  { path: '/', component: welcome},
  { path: '/login', component: login },
  { path: '/register', component: register },
  { path: '/error', component: error },
  { path: '/wall', component: wall },
  
];


const defaultRoute = '/';
const root = document.getElementById('root');

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

onAuthStateChanged(auth, (user) => {
  if (user) { // si hay usuario puede permanecer activo(permanece en wall)
    console.log(user)
    navigateTo('/wall');
  } else { // si no lo mantiene o lleva a la página welcome (no se puede ir a wall)
    console.log("no hay usuario")
    navigateTo('/');
  }
});

