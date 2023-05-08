// import routes from '../main.js';

// export const home = () => {
// };

// // hash genera identificadores unicos e irrepetibles
// // conseguir la ruta
// // pushState cambia el estado de la ventana
// // onpopstate para navegar y ejecutar nuestra funcion navigateTo

// const root = document.getElementById('root');

// function navigateTo(hash) {
//   const route = routes.find((routeFound) => routeFound.path === hash);
//   if (route && route.component) {
//     window.history.pushState(
//       {},
//       route.path,
//       window.location.origin + route.path,
//     );
//     if (root.firstChild) {
//       root.removeChild(root.firstChild);
//     }
//     root.appendChild(route.component());
//   } else {
//     navigateTo('/error');
//   }
// }

// export default navigateTo;
