import { getAuth, onAuthStateChanged } from 'firebase/auth'; // import para protección de rutas
// import para componentes
import { welcome } from './view/welcome.js';
import { login } from './view/login.js';
import { register } from './view/register.js';
import { error } from './view/error.js';
import { wall } from './view/wall.js';
import { newpost } from './view/newpost.js';
import { adopt } from './view/profile.js';

const auth = getAuth();
const defaultRoute = '/'; // ruta por defecto
const root = document.getElementById('root'); // en root se insertan los componentes
const routes = [ // array de objetos, cada uno con dos key: path y component
  { path: '/', component: welcome },
  { path: '/login', component: login },
  { path: '/register', component: register },
  { path: '/error', component: error },
  { path: '/wall', component: wall },
  { path: '/newpost', component: newpost },
  { path: '/adopt', component: adopt },
];

export function navigateTo(hash) { // esta fx tiene como parámetro el 'path'
  const route = routes.find((routeFound) => routeFound.path === hash);
  // con el método find recupera aquel objeto del cual su key 'path' coincida con hash

  // ----HISTORIAL DE NAVEGACIÓN
  if (route && route.component) {
    window.history.pushState( // agregar en el historia de navegación los sig 3 parámetros
      {}, // state, no es necesario
      route.path, // title, insertamos nuestra ruta
      window.location.origin + route.path, // url, nuestro dominio actual + la ruta
    );

    // ----COMPONENTES
    if (root.firstChild) { // si hay un elemento insertado en 'root'
      root.removeChild(root.firstChild); // remover ese elemnto
    }
    root.appendChild(route.component(navigateTo)); // e insertar 'component' de nuestro objeto
    // nota: navigateTo está como callback para evitar dependencias ciruclares
    // de esta forma, cuando se ejecute el componente, aquí recibe la fx navigateTo
    // y aquí se ejecuta, sin necesidad de exportarla
  } else {
    navigateTo('/error');
  }
}

window.onpopstate = () => { // evento onpopstate: cambios en el historial de navegación
  navigateTo(window.location.pathname); // fx navigateTo con parámetro del pathname del navegador
};

navigateTo(window.location.pathname || defaultRoute);

/* Protección de rutas, solamente navegar si el usuario ha iniciado sesión. */
onAuthStateChanged(auth, (user) => {
  if (user) { // si hay usuario puede permanecer activo(permanece en wall)
    navigateTo('/wall');
  } else { // si no, lo mantiene o lleva a la página welcome (no se puede ir a wall)
    navigateTo('/');
  }
});
