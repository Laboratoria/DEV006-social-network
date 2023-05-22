import login from './SPA/components/login.js';
import error from './SPA/components/error.js';
import registro from './SPA/components/registro.js';
import home from './SPA/components/home.js';

// creando una variable para obtener la ruta
const routes = [
  { path: '/', component: login },
  { path: '/registro', component: registro },
  { path: '/error', component: error },
  { path: '/home', component: home },
];

//  definir la ruta por defecto
const defaultRoute = '/';

// creando la variable que acceda al nodo con el id root
const root = document.getElementById('root');

function navigateTo(hash) {
  /* usaremos el método de arreglos: FIND para encontrar la primera coincidencia
para ello se usa la comparación === */
  const route = routes.find((routeFound) => routeFound.path === hash);
  if (route && route.component) {
    // utiliza el window.history... para actualizar la URL y refleje la ruta actual
    window.history.pushState(
      {},
      route.path,
      window.location.origin + route.path,
    );
    // y si verifica que root tiene algún hijo presente
    if (root.firstChild) {
      // se elimina utilizando el metodo removeChild
      root.removeChild(root.firstChild);
    }
    root.appendChild(route.component(navigateTo));
  } else {
    navigateTo('/error');
  }
}

// Evento onpopstate
window.onpopstate = () => {
  navigateTo(window.location.pathname);
};

// Navegación inicial o por defecto
navigateTo(window.location.pathname || defaultRoute);

/* En resumen, esta función busca la ruta correspondiente a hash,
actualiza la URL y agrega el componente asociado al root.
Si no se encuentra una ruta válida, redirige al usuario a la ruta de error */
