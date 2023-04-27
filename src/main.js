import { welcome } from './view/welcome.js';
import { login } from './view/login.js';
import { footer } from './view/footer.js';
import { register } from './view/register.js';
import {error} from './view/error.js'


const routes = [
  { path: '/', component: welcome },
  { path: '/login', component: login },
  { path: '/register', component: register },
  { path: '/error', component: error  }
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
  }
  else {
    navigateTo('/error');
  }
}
window.onpopstate = () => {
  navigateTo(window.location.pathname);
};

navigateTo(window.location.pathname || defaultRoute);




/* const router = (route) => {
  switch (route) {
    case '/': {
      welcome();
      footer();
      break;
    }
    case '/login': {
      login();
      footer();
      break;
    }
    case '/register': {
      register();
      footer();
      break;
    }
    default:
      console.log('error');
      break;
  }
}; */

// window.addEventListener('popstate', ()=>{
//     router(window.location.pathname)
// })

// function navigateTo(url) {
//   window.history.pushState(null, null, url);
//   router(url);
// }
//   // Ejemplo de uso:
// navigateTo('/');

/* document.addEventListener('click', (evento) => {
  /*   const { target } = e; */
/*   if (!evento.target.matches('a')) {
    return;
  }
  evento.preventDefault();

  router(evento.target.pathname);
  window.history.pushState({}, '', evento.target.href);
});

router(window.location.pathname);
 */