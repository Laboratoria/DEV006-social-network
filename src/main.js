// Importar las vistas

import { home } from './pages/home.js';
import { createAccount } from './pages/createAccount.js';

const root = document.getElementById('root');

const routes = {
  '/': home,
  '/createAccount': createAccount,
};

export const navigateTo = (pathname) => {
  window.history.pushState({}, pathname, window.location.origin + pathname);
  root.innerHTML = '';
  root.appendChild(routes[pathname](navigateTo));
};

window.onpopstate = () => {
  root.innerHTML = '';
  root.appendChild(routes[window.location.pathname](navigateTo));
};

navigateTo('/');

/*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
export const navigateTo = (pathname) => {
  /* window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );
  // root.removeChild(root.firstChild);
  root.innerHTML = '';
  root.appendChild(routes[pathname](this));
}; */

/* const getDefaultComponent = () => {
// Puedes reemplazar esto con un componente de error personalizado si lo deseas
  const errorComponent = document.createElement('div');
  errorComponent.innerText = 'Error: Ruta no encontrada';
  return errorComponent;
}; */

/* window.onpopstate = () => {
  // const component = routes[window.location.pathname] // || getDefaultComponent;
  const path = window.location.pathname;
  // root.removeChild(root.firstChild);
  // root.appendChild(component());
  navigateTo(path);
}; */

// navigateTo('/');

// const initialComponent = routes[window.location.pathname] || getDefaultComponent;
// root.appendChild(initialComponent());

// const routes = (route) => {
//   root.innerHTML = '';

//   switch (route) {
//     case './': {
//       return root.appendChild(home());
//       break;
//     }
//     case './createAccount': {
//     return root.appendChild(createAccount());
//     }
//     // Agrega más casos de rutas aquí si es necesario
//     default: {
//       // Puedes agregar una ruta predeterminada o manejar casos no coincidentes
//       break;
//     }
//   }
// };

// export {routes}
